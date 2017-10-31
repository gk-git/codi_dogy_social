import React from 'react';
import {DogCard} from "../components/DogCard";

import '../styles/GamePage.css';

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};

const events = {};

const GamePage = () => {

    return (
        <div className={'game'}>
            <DogCard container={'col-md-8 col-md-offset-2 '}/>
            <div className={'clear-both'}/>
        </div>
    )
};

export {GamePage}