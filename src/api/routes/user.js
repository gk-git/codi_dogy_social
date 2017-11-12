import jwt from 'jsonwebtoken';
import moment from 'moment';
import User from '../model/user';
import Location from '../model/location'
import config from '../config';
import {uploadImagesToStorage} from "../firebaseStorage";

const createToken = name => {
    let payload = {
        sub: name,
        exp: moment().add(1, 'day').unix()
    };

    return jwt.sign(payload, config.TOKEN_SECRET);
};
const signup = (req, res) => {
    const {username, email} = req.body;

    // User.findOne({$or: [{email}, {username}, {}]}, (err, existingUser) => {
    User.findOne({
        $or: [{
            email: email
        }, {
            username: username
        }]
    }, (err, existingUser) => {
        let response = {
            success: true,
            errors: {},
            message: ''
        };
        if (existingUser) {
            response = {
                ...response,
                success: false,
                user: existingUser,
                email,
                username
            };
            if (existingUser.username === username) {
                response.errors.username = 'Username already exist';
            }
            if (existingUser.email === email) {
                response.errors.email = 'Email already exist';
            }
            response.message = 'check the errors and submit again'
            return res.json(response);
        }

        const token = createToken(req.body.email);
        const user = Object.assign(new User(), {...req.body, token});
        user.save((err, result) => {
            if (err) {
                res.send({
                    err,
                    body: req.body
                });
            }
            else {
                res.json({
                    success: true,
                    message: 'Welcome to Doggo, you are now logged in',
                    token: user.token,
                    user
                });
            }
        });
    });
};
const login = (req, res) => {

    const {email_username, password} = req.body;
    let response = {
        success: true,
        errors: {},
        message: ''
    };
    User.findOne({
        $or: [{
            email: email_username
        }, {
            username: email_username
        }]
    }, 'password').populate('images').exec((err, user) => {
        if (!user) {
            response.success = false;
            response.message = 'Invalid email/password 1';
            return res.json(response);
        }
        user.comparePwd(password, (err, isMatch) => {

            if (!isMatch) {
                response.success = false;
                response.message = 'Invalid email/password 2';

                return res.json(response);
            }

            User.findOne({
                $or: [{
                    email: email_username
                }, {
                    username: email_username
                }]
            }, (err, user) => {

                user.lastLogin = new Date();
                user.save();


                const token = createToken(user.email);
                user.token = token;
                response.token = token;
                response.user = user;
                res.json(response);
            });

        });
    });
};
const verifyAuth = (req, res, next) => {
    // Get the token from the header x-access-token
    const token = req.headers['x-access-token'];
    if (token) {
        // Verifies the token and the expiration
        jwt.verify(token, config.TOKEN_SECRET, function (err, payload) {
            // If the verification fails it returns http status 403
            if (err) {
                return res.status(403).send({
                    message: 'Failed to authenticate token.'
                });
            } else {
                // Goes to the next route since there are no errors

                User.findOne({token}, (err, user) => {

                    if (err) {
                        res.json({
                            success: false,
                            errors: {},
                            message: 'Something wen wrong try to login again'
                        })
                    }
                    req.user = user;
                    next();

                });
            }
        });
    } else {
        // Requests without token return http status 4003
        return res.status(403).send({
            message: 'No token provided.'
        });
    }
};
const getUsers = ((req, res) => {
    // User.find({})
    const page = req.body.page || 1;
    User.paginate({}, {page}, function (err, results) {
       if(err){
           res.json({
               success:false,
               message: 'Something went wrong in Routes/user.js'
           })
       }else {
           res.send({
               success: true,
               data: results
           })
       }
    });

});
const getLocations = (req, res) => {
    Location.find({}, function (err, locations) {
        if (err) {
            res.send({
                success: false,
                data: {}
            })
        }
        let locationMap = {};
        locations.forEach(function (location) {
            locationMap[location._id] = location;
        });
        res.send({
            success: true,
            data: locationMap
        });
    });
};
const insertNewLocation = (req, res) => {
    const location = Object.assign(new Location(), {...req.body});
    location.save((err, result) => {
        if (err) {
            res.status(300).send(err);
        }
        res.send(result);
    })
};
const updateUser = (req, res) => {
    const {id, origin, breed, dogName, location, gender, personalData, dateOfBirth} = req.body;
    User.findById(id, (err, user) => {
        if (err) {
            res.send({
                success: false,
                message: 'User not found'
            })
        }

        user.origin = origin || user.origin;
        user.breed = breed || user.breed;
        user.dogName = dogName || user.dogName;
        user.gender = gender || user.gender;
        user.location = location || user.location;
        user.personalData = personalData || user.personalData;
        console.log(dateOfBirth);
        user.dateOfBirth = dateOfBirth || user.dateOfBirth;
        user.save((err, user) => {
            if (err) {
                res.send({
                    success: false,
                    message: 'Something went wrong',
                    err
                })
            }
            res.status(200).send({
                success: true,
                message: 'User updated',
                data: {
                    user, body: req.body
                }
            });
        });
    })
};
const updateProfilePic = (req, res, next) => {
    const files = req.files;
    const token = req.headers['x-access-token'];

    uploadImagesToStorage(files, 'profileImages')
        .then(response => {

            const image = response['profile_image'];
            if (image) {
                // data.imageSrc = image.url;
                User.findOne({token}, (err, user) => {

                    if (err) {
                        res.json({
                            success: false,
                            errors: {},
                            message: 'Something wen wrong try to login again'
                        })
                    }
                    user.profileImage = image.url;
                    user.save((err, user) => {
                        if (err) {
                            res.send({
                                success: false,
                                message: 'Something went wrong',
                                err
                            })
                        }
                        res.status(200).send({
                            success: true,
                            message: 'User profile pic updated',
                            data: {
                                user, body: req.body
                            }
                        });
                    });
                });

            } else {
                console.log('Image not found')
                res.json({
                    success: false,
                    errors: {},
                    message: 'Something wen wrong try to login again'
                })
            }


        })
        .catch((err) => {
            next(err);
            res.send({
                success: false,
                error: err
            })
        });
}
export {
    signup,
    login,
    verifyAuth,
    getLocations,
    insertNewLocation,
    updateUser,
    updateProfilePic,
    getUsers
};
