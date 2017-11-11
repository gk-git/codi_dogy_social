import React from "react";
import "../styles/Login.css";
import {Link} from "react-router-dom";


const Login = (props) => {
    const {registerUser, handleLoginFormSubmit, handleLoginFormChange, loginUser, handleRegisterInputChange, handleRegisterFormSubmit, history, showLoginForm, showSignupForm} = props;


    const handleChange = (event) => {
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
            // handleRegisterInputChange(event);

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
    const current_year = new Date().getFullYear();

    return (
        <div className="form-authentication">
            <ul className="tab-group">
                <li className={`tab ${!registerUser.actions.login ? 'active' : ''} `} id={"form_sign_up"}
                    onClick={(e) => {
                        e.preventDefault();
                        showSignupForm();
                    }}>
                    <a

                    >
                        Sign Up
                    </a>
                </li>
                <li className={`tab ${registerUser.actions.login ? 'active' : ''} `} id={"form_sign_in"}
                    onClick={(e) => {
                        e.preventDefault();
                        showLoginForm();
                    }}>
                    <a>
                        Log In
                    </a>
                </li>
            </ul>
            <div className="tab-content">
                <div id="form_sign_up_content" style={{display: `${!registerUser.actions.login ? 'block' : 'none'}`}}>
                    <h1>Sign Up for Free</h1>
                    <form action="/" method="post" onSubmit={(event) => {
                        event.preventDefault();
                        handleRegisterFormSubmit(event, history)
                    }}>
                        <div className="top-row">
                            <div className={`field-wrap ${registerUser.errors.name ? 'error' : ''}`}>
                                <label className={`${registerUser.name !== '' ? 'active' : ''} label-input`}>
                                    Your Name<span className="req">*</span>

                                </label>
                                <input
                                    type="text"
                                    required
                                    defaultValue={registerUser.name}
                                    autoComplete="off"
                                    name={'name'}
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
                                    {registerUser.errors.name}
                                </label>

                            </div>
                            <div className={`field-wrap ${registerUser.errors.dogName ? 'error' : ''}`}>
                                <label className={`${registerUser.dogName !== '' ? 'active' : ''} label-input`}>
                                    Your Dog Name<span className="req">*</span>

                                </label>
                                <input
                                    type="text"
                                    required
                                    autoComplete="off"
                                    defaultValue={registerUser.dogName}
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
                                    {registerUser.errors.dogName}
                                </label>

                            </div>
                        </div>
                        <div className={`field-wrap ${registerUser.errors.username ? 'error' : ''}`}>
                            <label className={`${registerUser.username !== '' ? 'active' : ''} label-input`}>
                                Username<span className="req">*</span>

                            </label>
                            <input type="text" required autoComplete="off"
                                   defaultValue={registerUser.username}
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
                                {registerUser.errors.username}
                            </label>

                        </div>

                        <div className={`field-wrap ${registerUser.errors.username ? 'error' : ''}`}>
                            <label className={'date'}>Dog Date Of Birth:<span className="req">*</span></label>
                            <div className="date-of-birth">
                                <div className="date-month">
                                    <select className="display-inline-block form-control"
                                            name={'month'}
                                            onChange={(event) => {
                                                handleRegisterInputChange(event)
                                            }}
                                    >
                                        <option value={1}>January</option>
                                        <option value={2}>February</option>
                                        <option value={3}>March</option>
                                        <option value={4}>April</option>
                                        <option value={5}>May</option>
                                        <option value={6}>June</option>
                                        <option value={7}>July</option>
                                        <option value={8}>August</option>
                                        <option value={9}>September</option>
                                        <option value={10}>October</option>
                                        <option value={11}>November</option>
                                        <option value={12}>December</option>
                                    </select>

                                </div>
                                <div className="day">
                                    <select className="display-inline-block form-control"
                                            name={'day'}

                                            onChange={(event) => {
                                                handleRegisterInputChange(event)
                                            }}>
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                        <option value={10}>10</option>
                                        <option value={11}>11</option>
                                        <option value={12}>12</option>
                                        <option value={13}>13</option>
                                        <option value={14}>14</option>
                                        <option value={15}>15</option>
                                        <option value={16}>16</option>
                                        <option value={17}>17</option>
                                        <option value={18}>18</option>
                                        <option value={19}>19</option>
                                        <option value={20}>20</option>
                                        <option value={21}>21</option>
                                        <option value={22}>22</option>
                                        <option value={23}>23</option>
                                        <option value={24}>24</option>
                                        <option value={25}>25</option>
                                        <option value={26}>26</option>
                                        <option value={27}>27</option>
                                        <option value={28}>28</option>
                                        <option value={29}>29</option>
                                        <option value={30}>30</option>
                                        <option value={31}>31</option>
                                    </select>
                                </div>

                                <div className="year">
                                    <select className="display-inline-block form-control"
                                            name={'year'}

                                            defaultValue={new Date().getYear()} onChange={(event) => {
                                        handleRegisterInputChange(event)
                                    }}>
                                        <option value={current_year}>{current_year}</option>
                                        <option value={current_year - 1}>{current_year - 1}</option>
                                        <option value={current_year - 2}>{current_year - 2}</option>
                                        <option value={current_year - 3}>{current_year - 3}</option>
                                        <option value={current_year - 4}>{current_year - 4}</option>
                                        <option value={current_year - 5}>{current_year - 5}</option>
                                        <option value={current_year - 6}>{current_year - 6}</option>
                                        <option value={current_year - 7}>{current_year - 7}</option>
                                        <option value={current_year - 8}>{current_year - 8}</option>
                                        <option value={current_year - 9}>{current_year - 9}</option>
                                        <option value={current_year - 10}>{current_year - 10}</option>
                                        <option value={current_year - 11}>{current_year - 11}</option>
                                        <option value={current_year - 12}>{current_year - 13}</option>
                                    </select>
                                </div>

                            </div>
                            <label className={'error'}>
                                {registerUser.errors.username}
                            </label>

                        </div>
                        <div className={`field-wrap ${registerUser.errors.email ? 'error' : ''}`}>
                            <label className={`${registerUser.email !== '' ? 'active' : ''} label-input`}>
                                Email Address<span className="req">*</span>

                            </label>
                            <input type="email" required autoComplete="off"
                                   defaultValue={registerUser.email}
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
                                {registerUser.errors.email}
                            </label>

                        </div>
                        <div className={`field-wrap ${registerUser.errors.password ? 'error' : ''}`}>
                            <label className={`${registerUser.password !== '' ? 'active' : ''} label-input`}>
                                Set A Password<span className="req">*</span>

                            </label>
                            <input type="password" required autoComplete="off"
                                   name={'password'}
                                   defaultValue={registerUser.password}

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
                                {registerUser.errors.password}
                            </label>

                        </div>
                        <div className={`field-wrap ${registerUser.errors.confirmPassword ? 'error' : ''}`}>
                            <label
                                className={`${registerUser.confirmPassword !== '' ? 'active' : ''} label-input`}>
                                Confirm Password<span className="req">*</span>

                            </label>
                            <input type="password" required autoComplete="off" name={'confirmPassword'}
                                   defaultValue={registerUser.confirmPassword}
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
                                {registerUser.errors.confirmPassword}
                            </label>
                        </div>

                        <button type="submit" className="button button-block"
                                disabled={registerUser.actions.submitDisable}>
                            Get Started
                        </button>
                    </form>
                </div>
                <div id="form_sign_in_content" style={{display: `${registerUser.actions.login ? 'block' : 'none'}`}}>
                    <h1>Welcome Back!</h1>
                    <form action="/" method="post" onSubmit={(event) => {
                        event.preventDefault();
                        handleLoginFormSubmit(event, history);
                    }}>
                        <div className="field-wrap">
                            <label className={'label-input'}>
                                Email Address Or Username<span className="req">*</span>
                            </label>
                            <input type="text" name={'email_username'} autoComplete="off"

                                   onChange={(event) => {
                                       handleLoginFormChange(event);
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
                                {loginUser.errors.email_username}
                            </label>
                        </div>
                        <div className="field-wrap">
                            <label className={'label-input'}>
                                Password<span className="req">*</span>
                            </label>
                            <input type="password" name={'password'} required autoComplete="off"
                                   onChange={(event) => {
                                       handleLoginFormChange(event);
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
                                {loginUser.errors.password}
                            </label>
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
