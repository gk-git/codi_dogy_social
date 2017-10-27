import express from "express";
import { firebasePushData, subscribe} from "./firebaseData";
import {isEmpty} from "../utils/index";

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

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

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
