import React from "react";

const DogCard = () => {
    return (
        <div className="dog-list">
            <div className="col-md-4 col-xs-6">
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
                    </div>
                </div>
            </div>
        </div>
    );
};
export {DogCard};
