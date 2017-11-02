import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown} from "react-bootstrap";


import '../styles/TopNavBar.css'
import {Link} from "react-router-dom";
const TopNavBar = () => {

    return (
        <Navbar collapseOnSelect className={'navbar'}>
            <Navbar.Header>
                <Navbar.Toggle/>

                <Navbar.Brand>
                    <Link to={'/'}>Dogy</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {/*fa fa-paw*/}
                    <NavDropdown eventKey={3} className={'profile-dropdown'} title="My Dog Name" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><i className={'fa fa-user'}/>My Dog Profile</MenuItem>
                        <MenuItem eventKey={3.2}><i className={'fa fa-cogs'}/>Edit My Dog Profile</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}><i className={'fa fa-sign-out'}/>Sign Out</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export  {TopNavBar}