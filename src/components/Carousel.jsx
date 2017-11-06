import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Carousel.css'

const Carousel = (props) => {
    let settings = {
        infinite: true,
        accessibility: true,
        speed: 500,
        autoplay: false,
        slidesToShow: 3,
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
        <Slider {...settings }>

            <div>
                <div className="cover-image">
                    <div className="img">
                        <img className={'img'} src='http://placekitten.com/g/400' alt={'dog pic'}/>
                        <div className={'img-action '}>
                           <button><i className={'fa fa-trash'}/></button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="cover-image">
                    <div className="img">
                        <img className={'img'} src='http://placekitten.com/g/500' alt={''}/>
                        <div className={'img-action '}>
                            <button><i className={'fa fa-trash'}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <div className="img">
                        <img className={'img'} src='http://placekitten.com/g/550' alt={''}/>
                        <div className={'img-action '}>
                            <button><i className={'fa fa-trash'}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <div className="img">
                        <img className={'img'} src='http://placekitten.com/g/600/300' alt={''}/>
                        <div className={'img-action '}>
                            <button><i className={'fa fa-trash'}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="cover-image">
                    <div className="img">
                        <img className={'img'} src='http://placekitten.com/g/400/600' alt={''}/>
                        <div className={'img-action '}>
                            <button><i className={'fa fa-user'}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
    )
};
export {Carousel}