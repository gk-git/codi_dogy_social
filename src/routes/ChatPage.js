import React from 'react';
import '../styles/ChatPage.css'
import ChatRoom from "../components/ChatRoom";

const ChatPage = () => {


    return [
        <div className={'chat-page'}>
            <h2>Back</h2>
           <ChatRoom/>
            <div className="col-sm-9 col-xs-10">

            </div>
            <div className="clear-both"/>
        </div>
    ]
};
export {ChatPage};