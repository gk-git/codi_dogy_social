import React from 'react';
import '../styles/Header.css';

const Header = () => {

    return (
        <div className={'header'}>
            <header className=" header-content">

            <div className="header-container">
                <div className="container">
                    <div className="row header-title">
                        <div className="col-md-10 col-md-offset-1 ">
                            <h1 className="text-center">The Number One website</h1>
                            <p>Find your perfect stud dog, bitch or puppy today, FREE to advertise, FREE to join and
                                browse. </p>
                        </div>
                    </div>

                </div>
                <div className=" header-buttons">
                    <button className="btn btn-default" type="button">sobre nós</button>
                </div>
            </div>

            </header>
        </div>);
};
export {Header};