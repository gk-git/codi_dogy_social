import React from 'react';
import '../styles/PublicApp.css';
import {SideBar} from "../components/SideBar";
import {TopNavBar} from "../components/TopNavBar";
import {Header} from "../components/Header";

const PublicApp = (props) => {

    const {children, visited} = props;
    if (!visited) {
        return (<Header {...props}/>)
    }
    return (
        <div>
            <div className={'header'}>
                <TopNavBar {...props}/>
            </div>
            <div className="fixed-cont">
                <SideBar {...props}/>
            </div>
            <div id="wrapper">

                <div className="full-column">
                    {children}
                </div>
                <div className={'clear-both'}/>
            </div>


        </div>
    )
};

const C = ({children}) => <div>
    <div className={'header'}>
        <TopNavBar/>
    </div>
    <div className="fixed-cont">
        <SideBar/>
    </div>
    <div id="wrapper">

        <div className="full-column">
            {children}
        </div>
        <div className={'clear-both'}/>
    </div>

</div>


export {PublicApp};