import React from 'react';
import '../styles/PublicApp.css';
import {SideBar} from "../components/SideBar";
import {TopNavBar} from "../components/TopNavBar";
import {ChatPage} from "./ChatPage";

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
                   <ChatPage/>
                </div>
            </div>


        </div>
    )
};

export {PublicApp};