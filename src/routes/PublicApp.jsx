import React from 'react';
import '../styles/PublicApp.css';
import {SideBar} from "../components/SideBar";
import {TopNavBar} from "../components/TopNavBar";
import {ChatPage} from "./ChatPage";
import {ProfilePage} from "./ProfilePage";
import {EditProfilePage} from "./EditProfilePage";
import {HomePage} from "./HomePage";
import {LoginPage} from "./LoginPage";

const PublicApp = (props) => {

    return (
        <div>
            <div className={'header'}>
                <TopNavBar/>
            </div>
            <div className="fixed-cont">
                <SideBar/>
            </div>
            <div id="wrapper">

                <div className="full-column">
                   <HomePage/>
                </div>
                <div className={'clear-both'}/>
            </div>


        </div>
    )
};

export {PublicApp};