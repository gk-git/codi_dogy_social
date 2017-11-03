import React from 'react';
import '../styles/ProfilePage.css';
import {Button} from "react-bootstrap";
import {Carousel} from "../components/Carousel";

const ProfilePage = (props) => {
    const {dogName} = props;
    return [
        <div key={0} className={'profile-page'}>
            <div className="">
                <Button bsStyle="info"> <span className={'fa fa-edit'}/></Button>
                <img className={'status'} src="http://branko83.com/vadoo111/img/online.png" alt="online status"/>
                <h2 className={'title profile-name'}>The Dog Name</h2>
            </div>
            <div className={'add-image'}>
                <button className={'btn btn-info '}><i className={'fa fa-camera'}/></button>
                <span>Upload Image</span>
            </div>
            <Carousel/>
            <div>
                <span className={'profile-state'}>Profile is unconfirmed</span> <Button>Confirm ?</Button>
            </div>
            <div>
                <button className={'start-chat'}><i className={'fa fa-commenting'}/> Chat with Dog Owner</button>
            </div>
            <div className={'location'}>
                <h4><i className="fa fa-map-marker" aria-hidden="true"/>Location </h4>
                <span>New York, USA</span>
            </div>
            <div className="personal-data">
                <h4><i className="fa fa-user" aria-hidden="true"/>Personal data</h4>
                <div className={'item'}><span className={'section'}>General Description: </span>Jax is our gorgeous red,
                    black mask boxer.
                    He has a wonderful temperament; soft, cuddly, playful, very friendly and fabulous with children. He
                    is KC registered and is heart scored 0. His COI is 1.5% well below the average of 6.8%!!
                    His dad is Hiding in the grass (kc) son of Edenacres yorkshire boy (kc) and summertime for megan
                    (kc) and his mum is Siennas dark secret (kc) daughter of Big brutus lad (kc) and Pilando wonderer
                    (kc).
                    We'd do 2 matings, 48 hours apart, he is available to both kc and non kc bitches.
                    We are currently charging £170 for the mating which is due on 1st day of mating.
                    Jax has had a successful mating and his 1st litter is due in december! I will update his profile
                    with updates of his litter :)
                </div>
                <div className={'item'}><span className={'section'}>Origin: </span>Origin</div>
                <div className={'item'}><span className={'section'}>Gender: </span>Male</div>
                <div className={'item'}><span className={'section'}>Breed: </span>Origin</div>
                <div className={'item'}><span className={'section'}>Date of birth: </span>28 February 2016</div>
                <div className={'item'}><span className={'section'}>Age: </span>1 year, 8 months</div>
                <div className={'item'}><span className={'section'}>Date listed: </span>30 October 2017</div>
            </div>
            <hr/>
            <div className="time-line">
                <h3 className={'text-center'}>TimeLine</h3>

                <div className="dog-post">
                    <div className="cover-image">
                        <img className={''}
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
                        <img className={''}
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
        </div>
    ]
};
export {ProfilePage}
