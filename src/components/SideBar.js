import React from "react";
import {NavLink} from 'react-router-dom';

import '../styles/Sidebar.css';
import {websiteUrl} from "../utils/index";

const SideBar = props => {
    const {user, authenticated} = props;

    const UserProfileCard = () => (
        <div className="profile-card">
            <img
                src={user.profileImage}
                alt={`${user.username} profile`}
                className="profile-photo"
            />
            <span className={'profile-name'}>
                    <NavLink to={`${websiteUrl}u/${user.username}`} className={''}>{user.name}</NavLink>
            </span>

            {
                user.likes ? ( <span className={'profile-followers'}>
                    <i className="ion ion-android-person-add"/> {user.likes.length} Likes
               </span>) : null
            }
        </div>
    );
    return (
        <div className={"sidebar-block"}>
            {
                authenticated ? <UserProfileCard/> : null
            }


            <ul className="nav-news-feed">
                <li>
                    <i className="icon ion-ios-paper"/>
                    <div className="ffspan">
                        <button className={'menu-item menu-modal'} data-toggle="modal" data-target="#filterbox">
                            <i className={'fa fa-filter'}/>
                            <span>Filter your matches!</span></button>
                    </div>

                </li>
                <li>
                    <i className="icon ion-ios-people"/>
                    <div>
                        <a href="newsfeed-people-nearby.html">People Nearby</a>
                    </div>
                </li>
                <li>
                    <i className="icon ion-ios-people-outline"/>
                    <div>
                        <a href="newsfeed-friends.html">Friends</a>
                    </div>
                </li>
            </ul>

            <div className="title">Chat online</div>
            <ul className="online-users list-inline">
                <li>
                    <a href="newsfeed-messages.html" title="Linda Lohan">
                        <img
                            src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                            alt="user"
                            className="img-responsive profile-photo"
                        />
                        <span className="online-dot"/>
                    </a>
                </li>
                <li>
                    <a href="newsfeed-messages.html" title="Sophia Lee">
                        <img
                            src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                            alt="user"
                            className="img-responsive profile-photo"
                        />
                        <span className="online-dot"/>
                    </a>
                </li>
                <li>
                    <a href="newsfeed-messages.html" title="Robert Cook">
                        <img
                            src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                            alt="user"
                            className="img-responsive profile-photo"
                        />
                        <span className="online-dot"/>
                    </a>
                </li>
                <li>
                    <a href={""} title="Richard Bell">
                        <img
                            src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                            alt="user"
                            className="img-responsive profile-photo"
                        />
                        <span className="online-dot"/>
                    </a>
                </li>
                <li>
                    <a href="newsfeed-messages.html" title="Anna Young">
                        <img
                            src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                            alt="user"
                            className="img-responsive profile-photo"
                        />
                        <span className="online-dot"/>
                    </a>
                </li>
                <li>
                    <a href="newsfeed-messages.html" title="Julia Cox">
                        <img
                            src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                            alt="user"
                            className="img-responsive profile-photo"
                        />
                        <span className="online-dot"/>
                    </a>
                </li>
            </ul>
        </div>

    );
};
export {SideBar};
