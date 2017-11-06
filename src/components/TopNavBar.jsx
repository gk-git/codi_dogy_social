import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown} from "react-bootstrap";


import '../styles/TopNavBar.css'
import {Link} from "react-router-dom";

const TopNavBar = (props) => {
    const {authenticated} = props;
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
                    {
                        authenticated ? <NavDropdown eventKey={3} className={'profile-dropdown'} title="My Dog Name"
                                                     id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}><i className={'fa fa-user'}/>My Dog Profile</MenuItem>
                                <MenuItem eventKey={3.2}><i className={'fa fa-cogs'}/>Edit My Dog Profile</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3} onClick={props.auth.logout}><i className={'fa fa-sign-out'}/>Sign Out</MenuItem>
                            </NavDropdown> :
                            <button onClick={props.auth.login}>Login</button>
                    }
                    {/*fa fa-paw*/}

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export {TopNavBar}