import React from "react";
import '../styles/DogCard.css';
import {Link} from "react-router-dom";

const DogCard = (props) => {
    const {dog_user, authenticated, user, loadUserInfo, likeUser} = props;
    const likesUser = dog_user.likes.find(item => {
        return item === user._id
    });
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
                            <Link to={`/u/${dog_user.username}`} className="profile-link" onClick={(event) => {
                                loadUserInfo(dog_user.username);
                            }}>
                                {dog_user.dogName || 'My Dog Name'}
                            </Link>

                        </p>
                        <p>{dog_user.location ? dog_user.location.label : 'Mount Lebanon'}</p>
                    </div>
                    <div className="like-love">

                        <Link to={`/dog/${dog_user.username}`} className="btn btn-primary view buttontr"
                              onClick={(event) => {
                                  loadUserInfo(dog_user.username);
                              }}
                        ><i
                            className="fa fa-eye"
                            aria-hidden="true"/>
                            View</Link>

                        {
                            authenticated ? (
                                <button type="button" name="love-button"
                                        className={`buttontr btn btn-love ${likesUser ? 'active' : ''}`}
                                        onClick={(event => {
                                            likeUser(dog_user._id)
                                        })}>
                                    <i className="fa fa-heart-o" aria-hidden="true"/> Love
                                </button>
                            ) : null
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};
export {DogCard};
