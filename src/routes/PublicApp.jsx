import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import '../styles/PublicApp.css';
import {SideBar} from "../components/SideBar";
import {TopNavBar} from "../components/TopNavBar";
import {Header} from "../components/Header";
import {Button, Modal} from "react-bootstrap";

const PublicApp = (props) => {

    const {children, visited, handleFilterModalCancel,filter, sweetAlert, noBackground, hideRegisterAlert} = props;
    if (!visited) {
        return (<Header {...props}/>)
    }
    return (
        <div className={'public-app'}>
            <div className={'header'}>
                <TopNavBar {...props}/>
            </div>
            <div className="fixed-cont">
                <SideBar {...props}/>
            </div>
            <div id="wrapper">

                <div className={`full-column ${ noBackground ? 'noBackground' : ''}`}>
                    {children}
                </div>
                <div className={'clear-both'}/>
            </div>

            <SweetAlert
                show={sweetAlert.show}
                success={sweetAlert.success}
                error={!sweetAlert.success}
                title={sweetAlert.title || 'Title'}
                onConfirm={() => hideRegisterAlert()}
                onOutsideClick={() => hideRegisterAlert()}
            >
                {sweetAlert.text || 'Text hello world'}
            </SweetAlert>

        </div>
    )
};
//
// const C = ({children}) => <div>
//     <div className={'header'}>
//         <TopNavBar/>
//     </div>
//     <div className="fixed-cont">
//         <SideBar/>
//     </div>
//     <div id="wrapper">
//
//         <div className="full-column">
//             {children}
//         </div>
//         <div className={'clear-both'}/>
//     </div>
//
// </div>


export {PublicApp};