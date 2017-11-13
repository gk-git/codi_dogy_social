import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css'
import {websiteUrl} from "../utils/index";

const Carousel = (props) => {
    const {user, handleUserGalleryImageDelete} = props;
    const {images = []} = user;
    const slidesToShow = images.length > 3 ? 3 : images.length;
    let settings = {
        accessibility: true,
        speed: 500,
        infinite: false,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        initialSlide: 0,
        className: 'center profile-gallery',
        adaptiveHeight: true,
        responsive: [
            {breakpoint: 768, settings: {slidesToShow: 1}},
            {breakpoint: 1200, settings: {slidesToShow: 2}},
        ]
    };



    return (
        <div>
            <Slider {...settings}>

                <div>
                    <div className="cover-image">
                        <div className="img">
                            <img className={'img'} src={`${websiteUrl}default_profile.png`} alt={'dog pic'}/>
                            <div className={'img-action '}>
                                <button><i className={'fa fa-plus'}/></button>
                            </div>
                        </div>

                    </div>
                </div>
                {
                    images.map((image, index) => {

                        return (
                            <div key={index}>
                                <div className="cover-image">
                                    <div className="img">
                                        <img className={'img'} src={image.imageSrc}
                                             alt={`${user.username} gallery `}/>
                                        <div className={'img-action '}>
                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                handleUserGalleryImageDelete()
                                            }}><i className={'fa fa-trash'}/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }


            </Slider>
        </div>
    )
};
export {Carousel}