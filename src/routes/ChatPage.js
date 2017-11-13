import React from 'react';
import '../styles/ChatPage.css'
import ChatRoom from "../components/ChatRoom";
import {Link} from "react-router-dom";

const ChatPage = (props) => {


    return [
        <div key={1} className={'chat-page'}>
            <Link to={'/'}><h2>Back</h2></Link>
           <ChatRoom {...props}/>
            <div className="col-sm-9 col-xs-10">

            </div>
            <div className="clear-both"/>
        </div>
    ]
};
export {ChatPage};