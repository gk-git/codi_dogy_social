import React from "react";
import '../styles/DogCard.css';
import {Link} from "react-router-dom";

const DogCard = (props) => {
    const {user} = props;

    return (
        <div className={`dog-list`}>
            <div className="dog-card">
                <img
                    src={user.profileImg || "https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                    alt="profile-cover"
                    className="img-responsive cover"
                />
                <div className="card-info">
                    <img
                        src={user.profileImg || "https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                        alt="user"
                        className="profile-photo-lg"
                    />
                    <div className="dog-info">
                        <p>
                            <a href={`/u/${user.username}`} className="profile-link">
                                {user.dogName || 'My Dog Name'}
                            </a>
                        </p>
                        <p>{user.location || 'Mount Lebanon'}</p>
                    </div>
                    <div className="like-love">

                        <Link to={`/u/${user.username}`} className="btn btn-primary view buttontr"><i
                            className="fa fa-eye"
                            aria-hidden="true"/>
                            View</Link>
                        <button type="button" name="love-button"
                                className="buttontr btn btn-love ">
                            <i className="fa fa-heart-o" aria-hidden="true"/> Love
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};
export {DogCard};
