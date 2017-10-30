import React from "react";
import '../styles/DogCard.css';

const DogCard = (props) => {
    const {container} = props;

    return (
        <div className={`${container} dog-list`} >
            <div className="dog-card">
                <img
                    src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                    alt="profile-cover"
                    className="img-responsive cover"
                />
                <div className="card-info">
                    <img
                        src={"https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"}
                        alt="user"
                        className="profile-photo-lg"
                    />
                    <div className="dog-info">
                        <a href="newsfeed-dogs.html#" className="pull-right text-green">
                            My dog
                        </a>
                        <h5>
                            <a href="timeline.html" className="profile-link">
                                Sophia Lee
                            </a>
                        </h5>
                        <p>Student at Harvard</p>
                    </div>

                    <button type="button" className="btn btn-primary view buttontr">
                        <i className="fa fa-eye" aria-hidden="true"/> View
                    </button>
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
