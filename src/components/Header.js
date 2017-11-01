import React from 'react';
import '../styles/Header.css';

const Header = () => {

    return (

        <div className="wrapper">

            <div className="stage">
                <h1 className="packlogo iconpacklogo" title="Pack">Pack</h1>


            </div>
            <div className="havedog scene-question welcome-screen">
                <h1 className="main">Do you have a&nbsp;dog?</h1>
                <ul className="buttonfork">
                    <li>
                        <a href="#" className="button" data-hasdog="false">
                            No
                        </a>
                    </li>
                    <li>
                        <a href="#" className="button" data-hasdog="true">
                            Yes
                        </a>
                    </li>
                </ul>
            </div>


        </div>


    );
};
export {Header};