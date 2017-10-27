import  React from 'react';

import {DogCard} from "../components/DogCard";
import {SideBar} from "../components/SideBar";



const PublicApp = (props)=> {

    return (
        <div  ref="docs">
            <header className="header">
                <div className="header-container">
                    <div className="container">
                        <div className="col-md-6 col-md-offset-3 header-title">
                            <h1 className="text-center" style={{color: '#ffffff'}}>Lorem ipsum</h1>
                            <p>Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum
                                ipsum. </p>
                        </div>
                        <div className="col-md-6 col-md-offset-3 header-buttons">
                            <button className="btn btn-default" type="button">sobre nós</button>
                        </div>
                    </div>
                </div>
            </header>
            <div className={"page-contents"}>

                <div className="container-fluid main-content">
                    <div className="row">
                        <div className="col-sm-3 static">
                            <SideBar/>
                        </div>
                        <div className="col-sm-9 col-sm-push-3 content ">
                            <DogCard/>
                            <DogCard/>
                            <DogCard/>
                            <DogCard/>
                            <DogCard/>
                            <DogCard/>
                            <DogCard/>
                        </div>
                    </div>
                </div>
            </div>

            <footer className={"footer"}>
                <div className="copyright">
                    <p>Thunder Team © 2016. All rights reserved</p>
                </div>
            </footer>
            <div className={'spinner-wrapper'}>
                <div className="spinner"/>
            </div>
        </div>
    )
};

export  {PublicApp};