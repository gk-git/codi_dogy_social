import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";


import '../styles/TopNavBar.css'
import {Link} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";

const TopNavBar = (props) => {
    const {authenticated} = props;
    return (
        <Navbar collapseOnSelect className={'navbar'}>
            <Navbar.Header>
                <Navbar.Toggle/>

                <Navbar.Brand>
                    <Link to={'/'}>Dogo</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {/*fa fa-paw*/}
                    {
                        authenticated ? (<NavDropdown eventKey={3} className={'profile-dropdown'} title="My Dog Name"
                                                      id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}><i className={'fa fa-user'}/>My Dog Profile</MenuItem>
                                <MenuItem eventKey={3.2}><i className={'fa fa-cogs'}/>Edit My Dog Profile</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}><i className={'fa fa-sign-out'}/>Sign Out</MenuItem>
                            </NavDropdown>)
                            : ([
                                    <LinkContainer key={'login'} to="/login">
                                        <NavItem eventKey={2}><i className={'fa fa-sign-in'}/> Login</NavItem>
                                    </LinkContainer>,
                                    <LinkContainer  key={'sign-up'} to="/login">

                                        <NavItem eventKey={2}><i className={'fa fa-plus-square-o'}/> Sign up</NavItem>
                                    </LinkContainer>

                                ]
                            )
                    }

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export {TopNavBar}