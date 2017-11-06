import config from './config/index';
import mongoose from 'mongoose';

const connectionString = process.env.RAZZLE_DATABASE_DEBUG === "true" ? config.debug.database.connectionString : config.database.connectionString;

mongoose.connect(connectionString, {
    useMongoClient: true
});

mongoose.connection.on("connected", function () {
    console.log("Connected to " + connectionString);
});

mongoose.connection.on("error", function (error) {
    console.log("Connection to " + connectionString + " failed:" + error);
});

mongoose.connection.on("disconnected", function () {
    console.log("Disconnected from " + connectionString);
});

process.on("SIGINT", function () {
    mongoose.connection.close(function () {
        console.log("Disconnected from " + connectionString + " through app termination");
        process.exit(0);
    });
});
