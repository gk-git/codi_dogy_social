import React from 'react';

import {Button, Pagination} from "react-bootstrap";
import {DogCard} from "../components/DogCard";
import {AlertIntro} from "../components/AlertIntro";
import '../styles/HomePage.css'

const HomePage = (props) => {
    const {alertIntro} = props;

    return [
        <AlertIntro {...alertIntro} key={1}/>,
        <div key={2} className="row">
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
            <div className="col-md-4 col-xs-6">
                <DogCard/>
            </div>
        </div>,
        <div key={3} className="row text-center">
            <Pagination
                prev
                next
                first
                last
                ellipsis
                boundaryLinks
                items={20}
                maxButtons={5}
                activePage={4}

            />
        </div>
    ]
}

export {HomePage}