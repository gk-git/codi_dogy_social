import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/OwlCarousel.css'

const OwlCarouselComponent = (props) => {
    const {images,children} = props;
    let settings = {
        infinite: true,
        accessibility: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        className: 'center profile-gallery',
        adaptiveHeight: true
    };

    return (
        <Slider {...settings }>

            <div>
                <div className="cover-image">
                    <img className={'img'} src='http://placekitten.com/g/400'/>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <img className={'img'} src='http://placekitten.com/g/500'/>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <img className={'img'} src='http://placekitten.com/g/500'/>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <img className={'img'} src='http://placekitten.com/g/600/200'/>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <img className={'img'} src='http://placekitten.com/g/400/600'/>
                </div>
            </div>
        </Slider>
    )
};
export {OwlCarouselComponent}