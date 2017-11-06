import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {firebasePushData, subscribe} from "./firebaseData";
import {isEmpty} from "../utils/index";
import {signup, login, verifyAuth} from './routes/users';
import {auth0} from "./auth";
import {authCheck} from './middleware'
// DB connection through Mongoose
const options = {
    useMongoClient: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/dogoapp', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));


let allData = {};
if (isEmpty(allData)) {
    setTimeout(() => firebasePushData({
            databaseRef: 'logs',
            data: {
                date: Date.now(),
                message: 'All Data is Empty server restart'
            }
        }
    ), 2000);

}
subscribe(newData => {
    allData = newData;
});
export {allData};


const router = express.Router();


// Body parser and Morgan middleware
router.use(bodyParser.urlencoded({extended: true}));
router.use(bodyParser.json());
router.use(morgan('dev'));

// Enable CORS so that we can make HTTP request from webpack-dev-server
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
    next();
});

router.get('/auth/signup', authCheck, (req, res, next) => {

    const token ='eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik56UkVOalkxTkVZMlF6bEJRakJHTXpnNU1FSkJNVVJFTUVWQ1FqTkNOVFEwT1VFMU4wVkRPUSJ9.eyJpc3MiOiJodHRwczovL2RvZ28uZXUuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTA2ODM4NTIwNjg0MTYyMDI4NTA4IiwiYXVkIjoiZG9nby1sYi5jb20iLCJpYXQiOjE1MDk5NzczMTgsImV4cCI6MTUwOTk4NDUxOCwiYXpwIjoiOUpodHlJTXNxRW9id1RJVDRZa1VTOFRXWlRwQzB2OHEiLCJzY29wZSI6IiJ9.lftcS1S8noKWbA_OK7eRY345D9hSYSGEma8VdocYuzpT3cQ6--N3S4YvUbNRUgrhzM01aXQ94gYbR0HdXGEAFDyhSjgP4wLkR_ZH8_rb494_s6Do_7SQqB2dJOeqDqOqxjowvC2j5KU8D47EKf0Z_X82SY-bNRcODgn2pFO5LJqE7GcsSaQT_o1jpwpGQ96O45wuQ3JiYE59D1z0r0GhyBXZfxeum7gv_ji1G8VkACecVkQrH9f3257yrGZTSNQfM4O31JYmjA4suJk4Opwu1c6NDj77Nqdth2RVFKZeoV-gdTPggdYqM1tG0YdmBXJPJ7tzihsn14sM09JjAbODPw'
    const users = auth0.getProfile(token, function (err, userInfo) {
        if (err) {
            // Handle error.
        }
        console.log(userInfo);

        res.json({
            test: true,
            user: req.user,
            userInfo,
            auth: req.auth,
            userProfile: JSON.stringify(req.user, null, '  ')
        })

    });


})
// Auth API routes
router.post('/auth/login', login);
router.post('/auth/signup', signup);


//  Extract Get url
// var parts = url.parse(req.url, true);
// var query = parts.query;
router.get("/*", (req, res, next) => {
    res.send({
        allData: allData,
        default: true
    });
});


export default router;
