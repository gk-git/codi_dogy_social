import React from 'react';

import {Button} from "react-bootstrap";
import {DogCard} from "../components/DogCard";
const HomePage = () => {


    return [
        <div key={1} className="intro-alert ">
            <div className="row">

                <div className="col-md-4">
                    <img src="https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"
                         className="circle thumbnail"/>
                    <img src="https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"
                         className="circle thumbnail"/>
                    <img src="https://pbs.twimg.com/media/CGn0rggUkAEPRlC.jpg"
                         className="circle thumbnail"/>
                    <div className={'clear-both'}/>
                </div>
                <div className="col-md-8">
                    <p style={{marginRight: '20px'}}>209 people is already here. Meet new
                        users
                        by
                        playing hot or not game.</p>


                    <Button bsStyle="primary" style={{background: '#377CED'}}>
                        Play like-me game!
                    </Button>

                </div>
            </div>

        </div>,
        <div key={2} className="row">
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
            <DogCard container={'col-md-4 col-xs-6'} />
        </div>,
        <div key={3} className="row text-center">
            <nav>
                <ul className="pagination">
                    <li><a aria-label="Previous"><span aria-hidden="true">«</span></a></li>
                    <li><a>1</a></li>
                    <li><a>2</a></li>
                    <li><a>3</a></li>
                    <li><a>4</a></li>
                    <li><a>5</a></li>
                    <li><a aria-label="Next"><span aria-hidden="true">»</span></a></li>
                </ul>
            </nav>
        </div>
    ]
}

export  {HomePage}