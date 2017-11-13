import React from 'react';
import {StaticRouter} from 'react-router-dom';
import express from 'express';
import {renderToString} from 'react-dom/server';
import api from './api';
import {parseCookies} from "./utils/index";
import Apps from "./Apps";

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const server = express();
let allData = {};

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
        // To Read a Cookie
        const cookies = parseCookies(req);
        const visited = cookies.visited ? cookies.visited : false;

        const markup = renderToString(
            <StaticRouter context={context} location={req.url}>
                <Apps initialLocation={req.url} appData={allData} allData={allData} visited={visited}/>

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
        <title>Welcome to Doggo</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=vMO7AeyP0a">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=vMO7AeyP0a">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=vMO7AeyP0a">
<link rel="manifest" href="/manifest.json?v=vMO7AeyP0a">
<link rel="mask-icon" href="/safari-pinned-tab.svg?v=vMO7AeyP0a" color="#5bbad5">
<link rel="shortcut icon" href="/favicon.ico?v=vMO7AeyP0a">
<meta name="theme-color" content="#ffffff">
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
            var ___VISITED___ = ${visited}
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
