import React from "react";
import {Link, NavLink} from 'react-router-dom';

import '../styles/Sidebar.css';
import {websiteUrl} from "../utils/index";

const SideBar = props => {
    const {user, authenticated, showFilterModal, randomUsers} = props;

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
    if (authenticated) {
        return (
            <div className={"sidebar-block"}>
                <UserProfileCard/>
                <ul className="nav-news-feed">
                    <li>
                        <i className="icon ion-ios-paper"/>
                        <div className="ffspan">
                            <button className={'menu-item menu-modal'} data-toggle="modal" data-target="#filterbox"
                                    onClick={event => {
                                        event.preventDefault();
                                        showFilterModal();
                                    }}>
                                <i className={'fa fa-filter'}/>
                                <span>Filter your matches!</span></button>
                        </div>

                    </li>

                </ul>

                <Link to={'/chat'}>
                    <div className="title">Chat online</div>
                </Link>
                <ul className="online-users list-inline">
                    {
                        randomUsers.map(user => {
                            return (
                                <li key={user._id} className={'random-list'}>
                                    <Link to={`/dog/${user.username}`}>
                                        <div className="image-profile">
                                            <img
                                                src={user.profileImage}
                                                alt={`${user.dogName} dog`}
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot"/>
                                        </div>
                                        <div className="profile-content">
                                            <span className={'span-username'}>{user.username}</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

        );
    } else {
        return (
            <div className={"sidebar-block no-auth"}>

                <Link className={'btn title'} to={'/login'}>
                    Meet New Dogs
                </Link>
                <ul className="online-users list-inline">

                    {
                        randomUsers.map(user => {
                            return (
                                <li key={user._id} className={'random-list'}>
                                    <Link to={`/dog/${user.username}`}>
                                        <div className="image-profile">
                                            <img
                                                src={user.profileImage}
                                                alt={`${user.dogName} dog`}
                                                className="img-responsive profile-photo"
                                            />
                                            <span className="online-dot"/>
                                        </div>
                                        <div className="profile-content">
                                            <span className={'span-username'}>{user.username}</span>
                                        </div>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }

};
export {SideBar};
