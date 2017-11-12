import React from 'react';
import '../styles/ProfilePage.css';
import {Button} from "react-bootstrap";
import {Carousel} from "../components/Carousel";
import {websiteUrl} from "../utils/index";
import {Link} from "react-router-dom";

const formatDate = (date) => {

    const monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

    const day = date.getDate()
        , monthIndex = date.getMonth()
        , year = date.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
};

const _calculateAge = (birthday) => { // birthday is a date

    const now = new Date(); //Todays Date

    const dobMonth = birthday.getMonth() + 1;
    const dobDay = birthday.getDay();
    const dobYear = birthday.getFullYear();

    const nowDay = now.getDate();
    const nowMonth = now.getMonth() + 1;  //jan=0 so month+1
    const nowYear = now.getFullYear();

    let ageyear = nowYear - dobYear;
    let agemonth = nowMonth - dobMonth;
    let ageday = nowDay - dobDay;
    if (agemonth < 0) {
        ageyear--;
        agemonth = (12 + agemonth);
    }
    if (nowDay < dobDay) {
        agemonth--;
    }
    return ageyear + " year and " + agemonth + 'month';

}


const ProfilePage = (props) => {
    const {user, locations} = props;
    const {images} = user;
    const dateListed = new Date(user.createdAt);
    const dateOfBirth = new Date(user.dateOfBirth);
    const today = new Date();
    let completePercentage = 0;
    completePercentage += user.personalData ? 10 : 0;
    completePercentage += user.gender ? 20 : 0;
    completePercentage += user.origin ? 20 : 0;
    completePercentage += user.breed ? 20 : 0;
    completePercentage += user.dateOfBirth ? 10 : 0;
    completePercentage += user.images.length > 1 ? 10 : 0;
    completePercentage += user.profileImage !== websiteUrl + 'default_profile.png' ? 10 : 0;

    const Timeline = () => {
        return (
            <div className="time-line">
                <h3 className={'text-center'}>TimeLine</h3>

                <div className="dog-post">
                    <div className="cover-image">
                        <img className={''} alt={''}
                             src={'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg'}/>
                    </div>
                    <div className="post-content">
                        <p>gorgeous red,
                            black mask boxer.
                            He has a wonderful temperament; soft, cuddly, playful, very friendly and fabulous with
                            children. He
                            is KC registered and is heart scored 0. His COI is 1.5% well below the average of 6.8%!!
                            His dad is Hiding in the grass (kc) son of Edenacres yorkshire boy (kc) and summertime for
                            megan
                            (kc) and his mum is Siennas dark secret (kc) daughter of Big brutus lad (kc) and Pilando
                            wonderer
                            (kc).
                            We'd do 2 matings, 48 hours apart, he is available to both kc and non kc bitches.
                            We are currently charging £170 for the mating which is due on 1st day of mating.
                            Jax has had a successful mating and his 1st litter is due in december! I will update his
                            profile
                            with updates of his litter :)
                        </p>
                        <div className={'likes'}>

                            <span className={'like'}><Button><span className={'fa fa-thumbs-up '}/></Button> 24</span>
                            <span className={'dislike'}><Button><span
                                className={'fa fa-thumbs-down '}/></Button> 24</span>
                        </div>
                    </div>
                </div>
                <div className="dog-post">
                    <div className="cover-image">
                        <img className={''} alt={''}
                             src={'http://cdn2-www.dogtime.com/assets/uploads/2011/01/file_23252_dogue-de-bordeaux-dog-breed.jpg'}/>
                    </div>
                    <div className="post-content">
                        <p>gorgeous red,
                            black mask boxer.
                            He has a wonderful temperament; soft, cuddly, playful, very friendly and fabulous with
                            children. He
                            is KC registered and is heart scored 0. His COI is 1.5% well below the average of 6.8%!!
                            His dad is Hiding in the grass (kc) son of Edenacres yorkshire boy (kc) and summertime for
                            megan
                            (kc) and his mum is Siennas dark secret (kc) daughter of Big brutus lad (kc) and Pilando
                            wonderer
                            (kc).
                            We'd do 2 matings, 48 hours apart, he is available to both kc and non kc bitches.
                            We are currently charging £170 for the mating which is due on 1st day of mating.
                            Jax has had a successful mating and his 1st litter is due in december! I will update his
                            profile
                            with updates of his litter :)
                        </p>
                        <div className={'likes'}>

                            <span className={'like'}><Button><span className={'fa fa-thumbs-up '}/></Button> 24</span>
                            <span className={'dislike'}><Button><span
                                className={'fa fa-thumbs-down '}/></Button> 24</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    };

    return [
        <div key={0} className={'profile-page'}>
            <div className="">
                <Link to={'/u/profile/edit'}>
                    <Button bsStyle="info"> <span className={'fa fa-edit'}/></Button>
                </Link>
                <img className={'status'} src="http://branko83.com/vadoo111/img/online.png" alt="online status"/>
                <h2 className={'title profile-name'}>{user.dogName}</h2>
                <h3>{`${completePercentage} % profile completed`}</h3>
            </div>
            <div className={'add-image'}>
                <button className={'btn btn-info '}><i className={'fa fa-camera'}/></button>
                <span>Upload Image</span>
            </div>
            <Carousel  {...props} images={images} user={user}/>
            {
                !user.emailVerified ? (
                    <div>
                        <span className={'profile-state'}>Profile is unconfirmed</span> <Button>Confirm ?</Button>
                    </div>
                ) : null
            }

            <div>
                <button className={'start-chat'}><i className={'fa fa-commenting'}/> Chat with Dog Owner</button>
            </div>
            <div className={'location'}>
                <h4><i className="fa fa-map-marker" aria-hidden="true"/>Location </h4>
                <span>{locations[user.location] ? locations[user.location].label : 'Lebanon'}</span>
            </div>
            <div className="personal-data">
                <h4><i className="fa fa-user" aria-hidden="true"/>Personal data</h4>
                <div className={'item'}><span className={'section'}>General Description: </span>
                    {user.personalData}
                </div>
                <div className={'item'}><span className={'section'}>Origin: </span>{user.origin}</div>
                <div className={'item'}><span className={'section'}>Gender: </span>{user.gender}</div>
                <div className={'item'}><span className={'section'}>Breed: </span>{user.breed}</div>
                <div className={'item'}><span className={'section'}>Date of birth:  </span>{formatDate(dateOfBirth)}
                </div>
                <div className={'item'}><span className={'section'}>Age: </span>{_calculateAge(dateOfBirth)}</div>
                <div className={'item'}><span className={'section'}>Date listed: </span>{formatDate(dateListed)}</div>
            </div>
            <hr/>
            {/*<Timeline/>*/}
        </div>
    ]
};
export {ProfilePage}
