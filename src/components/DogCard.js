import React from "react";
import '../styles/DogCard.css';
import {Link} from "react-router-dom";

const DogCard = (props) => {
    const {dog_user} = props;

    return (
        <div className={`dog-list`}>
            <div className="dog-card">
               <div className="profile-img">
                   <img
                       src={dog_user.profileImage || "https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                       alt="profile-cover"
                       className="img-responsive cover"
                   />
               </div>
                <div className="card-info">
                    <img
                        src={dog_user.profileImage || "https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                        alt="user"
                        className="profile-photo-lg"
                    />
                    <div className="dog-info">
                        <p>
                            <a href={`/u/${dog_user.username}`} className="profile-link">
                                {dog_user.dogName || 'My Dog Name'}
                            </a>
                        </p>
                        <p>{dog_user.location || 'Mount Lebanon'}</p>
                    </div>
                    <div className="like-love">

                        <Link to={`/u/${dog_user.username}`} className="btn btn-primary view buttontr"><i
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
