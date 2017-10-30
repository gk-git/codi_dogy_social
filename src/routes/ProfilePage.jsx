import React from 'react';
import OwlCarousel from 'react-owl-carousel2';
import '../styles/ProfilePage.css';
import {DogCard} from "../components/DogCard";

const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true
};

const events = {};

const ProfilePage = () => {

    return (
        <div>
            <DogCard container={'col-md-8 col-md-offset-2'}/>
        </div>
    )
};

export {ProfilePage}