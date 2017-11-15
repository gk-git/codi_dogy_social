import React from 'react';
import '../styles/LoginNotice.css';
import {LinkContainer} from "react-router-bootstrap";
import {websiteUrl} from "../utils/index";

const LoginNotice = (props) => {
    const {match, showLoginForm, showSignupForm} = props;

    return (
        <div className={'login-notice'}>
            <h2>Login Notice</h2>
            <p>You need to login to view {match.params.user} profile</p>
            <div className="notice-img">
                <img src={`${websiteUrl}trotter.jpg`} className={'img-responsive'} alt={'login notice funny '}/>
            </div>
            <div className="login-container">
                <LinkContainer key={'login'} to="/login" onClick={() => {
                    showLoginForm()}}>
                    <button className={'btn login'}>Login</button>
                </LinkContainer>
                <LinkContainer key={'sign-up'} to="/login" onClick={() => showSignupForm()}>
                    <button className={'btn sign-up '}>Sign Up</button>
                </LinkContainer>
            </div>
        </div>
    )
};
export {LoginNotice};