import React from "react";

import "../styles/Login.css";
import {Link} from "react-router-dom";


const tabSignInOnClick = event => {
    event.preventDefault();
    const form_sign_up = document.getElementById("form_sign_up");
    const form_sign_in = document.getElementById("form_sign_in");
    form_sign_up.classList.remove("active");
    form_sign_in.classList.add("active");

    const form_sign_up_content = document.getElementById("form_sign_up_content");
    const form_sign_in_content = document.getElementById("form_sign_in_content");

    form_sign_up_content.style.display = "none";
    form_sign_in_content.style.display = "block";
};

const tabSignUpOnClick = event => {
    event.preventDefault();
    const form_sign_up = document.getElementById("form_sign_up");
    const form_sign_in = document.getElementById("form_sign_in");
    form_sign_up.classList.add("active");
    form_sign_in.classList.remove("active");

    const form_sign_up_content = document.getElementById("form_sign_up_content");
    const form_sign_in_content = document.getElementById("form_sign_in_content");

    form_sign_up_content.style.display = "block";
    form_sign_in_content.style.display = "none";
};

const handleChange = event => {
    const target = event.target;
    const label = target.previousSibling;
    if (event.type === "focus") {
        if (target.value === "") {
            label.classList.remove("highlight");
        } else {
            label.classList.add("highlight");
        }
    } else if (event.type === "blur") {
        if (target.value === "") {
            label.classList.remove("active");
            label.classList.remove("highlight");

        } else {
            label.classList.remove("highlight");

        }
    }
    else if (event.type === "keyup") {
        if (target.value === "") {
            label.classList.remove("active");
            label.classList.remove("highlight");
        } else {
            label.classList.add("active");
            label.classList.add("highlight");
        }
        if (target.nextSibling) {
            target.nextSibling.innerHTML = '';
        }

    }
};
const Login = (props) => {
    const {registerUser, handleRegisterInputChange} = props;

    return (
        <div className="form-authentication">
            <ul className="tab-group">
                <li className="tab active" id={"form_sign_up"}>
                    <a
                        onClick={event => {
                            tabSignUpOnClick(event);
                        }}
                    >
                        Sign Up
                    </a>
                </li>
                <li className="tab" id={"form_sign_in"}>
                    <a
                        onClick={event => {
                            tabSignInOnClick(event);
                        }}
                    >
                        Log In
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="form_sign_up_content">
                    <h1>Sign Up for Free</h1>
                    <form action="/" method="post">
                        <div className="top-row">
                            <div className="field-wrap">
                                <label className={""}>
                                    Your Name<span className="req">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={registerUser.name.value}
                                    autoComplete="off"
                                    name={'name'}
                                    onChange={(event)=> {
                                        handleRegisterInputChange(event)
                                    }}
                                    onKeyUp={event => {
                                        handleChange(event);
                                    }}
                                    onFocus={event => {
                                        handleChange(event);
                                    }}
                                    onBlur={event => {
                                        handleChange(event);
                                    }}
                                />
                                <label className={'error'}>
                                    {registerUser.name.error}
                                </label>
                            </div>
                            <div className="field-wrap">
                                <label className={""}>
                                    Your Dog Name<span className="req">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    autoComplete="off"
                                    defaultValue={registerUser.dogName.value}
                                    name={'dogName'}

                                    onChange={(event) => {
                                        handleRegisterInputChange(event)
                                    }}
                                    onKeyUp={event => {
                                        handleChange(event);
                                    }}
                                    onFocus={event => {
                                        handleChange(event);
                                    }}
                                    onBlur={event => {
                                        handleChange(event);
                                    }}
                                />
                                <label className={'error'}>
                                    {registerUser.dogName.error}
                                </label>
                            </div>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Username<span className="req">*</span>
                            </label>
                            <input type="text" required autoComplete="off"
                                   defaultValue={registerUser.username.value}
                                   name={'username'}

                                   onChange={(event) => {
                                       handleRegisterInputChange(event)
                                   }}
                                   onKeyUp={event => {
                                       handleChange(event);
                                   }}
                                   onFocus={event => {
                                       handleChange(event);
                                   }}
                                   onBlur={event => {
                                       handleChange(event);
                                   }}/>
                            <label className={'error'}>
                                {registerUser.username.error}
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Email Address<span className="req">*</span>
                            </label>
                            <input type="email" required autoComplete="off"
                                   defaultValue={registerUser.email.value}
                                   name={'email'}

                                   onChange={(event) => {
                                       handleRegisterInputChange(event)
                                   }}
                                   onKeyUp={event => {
                                       handleChange(event);
                                   }}
                                   onFocus={event => {
                                       handleChange(event);
                                   }}
                                   onBlur={event => {
                                       handleChange(event);
                                   }}/>
                            <label className={'error'}>
                                {registerUser.email.error}
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Set A Password<span className="req">*</span>
                            </label>
                            <input type="password" required autoComplete="off"
                                   name={'password'}
                                   defaultValue={registerUser.password.value}

                                   onChange={(event) => {
                                       handleRegisterInputChange(event)
                                   }}
                                   onKeyUp={event => {
                                       handleChange(event);
                                   }}
                                   onFocus={event => {
                                       handleChange(event);
                                   }}
                                   onBlur={event => {
                                       handleChange(event);
                                   }}
                            />
                            <label className={'error'}>
                                {registerUser.password.error}
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Confirm Password<span className="req">*</span>
                            </label>
                            <input type="password" required autoComplete="off" name={'confirmPassword'}
                                   defaultValue={registerUser.confirmPassword.value}
                                   onChange={(event) => {
                                       handleRegisterInputChange(event)
                                   }}
                                   onKeyUp={event => {
                                       handleChange(event);
                                   }}
                                   onFocus={event => {
                                       handleChange(event);
                                   }}
                                   onBlur={event => {
                                       handleChange(event);
                                   }}
                            />
                            <label className={'error'}>
                                {registerUser.confirmPassword.error}
                            </label>

                        </div>

                        <button type="submit" className="button button-block">
                            Get Started
                        </button>
                    </form>
                </div>
                <div id="form_sign_in_content">
                    <h1>Welcome Back!</h1>
                    <form action="/" method="post">
                        <div className="field-wrap">
                            <label>
                                Email Address Or Username<span className="req">*</span>
                            </label>
                            <input type="email" required autoComplete="off"

                                   onKeyUp={event => {
                                       handleChange(event);
                                   }}
                                   onFocus={event => {
                                       handleChange(event);
                                   }}
                                   onBlur={event => {
                                       handleChange(event);
                                   }}/>
                        </div>
                        <div className="field-wrap">
                            <label>
                                Password<span className="req">*</span>
                            </label>
                            <input type="password" required autoComplete="off"
                                   onKeyUp={event => {
                                       handleChange(event);
                                   }}
                                   onFocus={event => {
                                       handleChange(event);
                                   }}
                                   onBlur={event => {
                                       handleChange(event);
                                   }}/>
                        </div>
                        <p className="forgot">
                            <Link to={'/forget-password'}>Forgot Password?</Link>
                        </p>
                        <button className="button button-block">Log In</button>
                    </form>
                </div>
            </div>
            {/* tab-content */}
        </div>
    );
};
export {Login};
