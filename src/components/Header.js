import React from 'react';
import '../styles/Header.css';

const Header = (props) => {
    const {welcomeAction} = props;
    return (

        <div className="wrapper">

            <div className="stage">
                <h1 className="packlogo iconpacklogo" title="Pack">Pack</h1>


            </div>
            <div className="havedog scene-question welcome-screen">
                <h1 className="main">Do you have a&nbsp;dog?</h1>
                <ul className="buttonfork">
                    <li>
                        <button className="button" data-hasdog="false" onClick={(event)=>{
                            event.preventDefault();
                            welcomeAction(true)
                        }} >
                            YES
                        </button>
                    </li>
                    <li>
                        <button className="button" data-hasdog="true" onClick={(event) => {
                            event.preventDefault();
                            welcomeAction(false)
                        }}>
                            No
                        </button>
                    </li>
                </ul>
            </div>


        </div>


    );
};
export {Header};