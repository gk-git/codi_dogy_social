import React from 'react';
import {DogCard} from "../components/DogCard";
import {AlertIntro} from "../components/AlertIntro";
import '../styles/HomePage.css'
import Pagination from "react-js-pagination";

const HomePage = (props) => {
    const {alertIntro, handlePageChange, dogs, user} = props;

    return [
        <AlertIntro {...alertIntro} key={1}/>,
        <div key={2} className="row">

            {
                dogs.docs.map((dog, index) => {
                    if (dog.username !== user.username) {
                        return (
                            <div key={dog._id} className="col-md-4 col-xs-6">
                                <DogCard {...props} dog_user={dog}/>
                            </div>
                        )
                    }
                })
            }

        </div>,
        <div key={3} className="row text-center">
            {/*<Pagination*/}
            {/*prev*/}
            {/*next*/}
            {/*first*/}
            {/*last*/}
            {/*ellipsis*/}
            {/*boundaryLinks*/}
            {/*items={20}*/}
            {/*maxButtons={5}*/}
            {/*activePage={4}*/}

            {/*/>*/}
            <Pagination
                hideDisabled
                activePage={dogs.page}
                itemsCountPerPage={15}
                totalItemsCount={dogs.total}
                pageRangeDisplayed={5}
                onChange={handlePageChange}
            />
        </div>
    ]
}

export {HomePage}