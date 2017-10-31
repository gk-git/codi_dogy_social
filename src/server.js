import App from './App';
import React from 'react';
import {StaticRouter} from 'react-router-dom';
import express from 'express';
import {renderToString} from 'react-dom/server';
import api from './api';
import {firebasePushData} from './api/firebaseData';
import {subscribe} from "./api/firebaseData";
import {isEmpty} from "./utils/index";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();
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
subscribe((newData) => {
    allData = newData
});


server.use('/api', api);
server
    .disable('x-powered-by')
    .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
    // .use(express.static('./public'))
    .use((req, res, next) => {

        // allData = tempData;
        next();
    })
    .get('/*', (req, res) => {
        const context = {};

        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <App appData={allData} allData={allData}/>
            </StaticRouter>
        );

        if (context.url) {
            res.redirect(context.url);
        } else {

            res.status(200).send(
                `<!doctype html>
        <html lang="en">
        <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet='utf-8' />
        <title>Welcome to Razzle</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

         <!-- FontsOnline -->
        <link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
        <link href='https://fonts.googleapis.com/css?family=Crimson+Text:400,400italic,600,600italic,700,700italic' rel='stylesheet' type='text/css'>
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <!-- Load jQuery(1.7+) -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>

        <!-- JavaScripts -->
        <script>
            var ___STATE___ = ${JSON.stringify(allData)}
            var ___allData___ = ${JSON.stringify(allData)}
        </script>
        <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->


        ${assets.client.css
                    ? `<link rel="stylesheet" href="${assets.client.css}">`
                    : ''}
        ${process.env.NODE_ENV === 'production'
                    ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`}
    </head>
    <body>
        <div id="root">${markup}</div>


        <!-- JavaScripts -->
     

       <script src="https://use.typekit.net/ijo4joy.js"></script>
        <script>try{Typekit.load({ async: true });}catch(e){}</script>
    </body>
</html>`
            );
        }

    });
export default server;
