import React from 'react';
import {Login} from "../components/Login";
import  '../styles/LoginPage.css'
const LoginPage = (props) => {
    const {authenticated} = props;

    if (authenticated) {

        return (
            <h2>Redirect</h2>
        )
    } else {

        return (
            <div className={'login-page'}>
                <Login {...props}/>
                <div className="clear-both"/>

            </div>
        )
    }
}

export {LoginPage}