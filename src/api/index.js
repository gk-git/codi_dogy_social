import express from "express";
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import {
    getLocations, insertNewLocation, login, signup, updateProfilePic, verifyAuth, updateUser,
    getUsers, getUserByUsername, loveDogById, updateUserFilter, checkAuth, getRandomUser
} from "./routes/user";
import {uploadGoogle} from './firebaseStorage';
import {fakeDataUsertest, fakeUser} from "./routes/fakedata";

const router = express.Router();


// DB connection through Mongoose
const options = {
    useMongoClient: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/dogo-database', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

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

router.post('/user', signup);
router.put('/user', updateUser);
router.post('/user/profile_pic', verifyAuth, uploadGoogle.any(), updateProfilePic);
router.post('/login', login);
router.get('/location', getLocations);
router.post('/location', insertNewLocation);
router.post('/dogs', checkAuth, getUsers);
router.get('/random-dogs', checkAuth, getRandomUser);
router.post('/dog', getUserByUsername);
router.post('/dog-likes', verifyAuth, loveDogById);
router.post('/filter', verifyAuth, updateUserFilter);
router.get('/fake-user', fakeUser);
router.get('/fake', fakeDataUsertest);

//  Extract Get url
// var parts = url.parse(req.url, true);
// var query = parts.query;
router.get("/*", (req, res, next) => {
    res.send({
        default: true
    });
});


export default router;
