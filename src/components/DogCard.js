import React from "react";
import '../styles/DogCard.css';
import {Link} from "react-router-dom";

const DogCard = (props) => {
    const {profileImg, name, dogName, location, id} = props;

    return (
        <div className={`dog-list`}>
            <div className="dog-card">
                <img
                    src={profileImg || "https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                    alt="profile-cover"
                    className="img-responsive cover"
                />
                <div className="card-info">
                    <img
                        src={profileImg || "https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                        alt="user"
                        className="profile-photo-lg"
                    />
                    <div className="dog-info">
                        <a href="newsfeed-dogs.html#" className="pull-right text-green">
                            {name || ''}
                        </a>
                        <h5>
                            <a href="timeline.html" className="profile-link">
                                {dogName || 'My Dog Name'}
                            </a>
                        </h5>
                        <p>{location || 'Mount Lebanon'}</p>
                    </div>

                    <Link to={`/u/${id}`} className="btn btn-primary view buttontr"><i className="fa fa-eye"
                                                                                       aria-hidden="true"/> View</Link>
                    <button type="button" name="love-button"
                            className="buttontr btn btn-love ">
                        <i className="fa fa-heart-o" aria-hidden="true"/> Love
                    </button>

                </div>
            </div>
        </div>
    );
};
export {DogCard};
