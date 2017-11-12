import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap'

import '../styles/TopNavBar.css'
import {Link} from "react-router-dom";

const TopNavBar = (props) => {
    const {authenticated, logout, loadUserInfo, showLoginForm, showSignupForm, user} = props;
    return (
        <Navbar collapseOnSelect className={'navbar'}>
            <Navbar.Header>
                <Navbar.Toggle/>

                <Navbar.Brand>
                    <Link to={'/'}>Doggo</Link>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    {/*fa fa-paw*/}
                    {
                        authenticated ? (<NavDropdown eventKey={3} className={'profile-dropdown'} title={user.dogName}
                                                      id="basic-nav-dropdown">
                                <LinkContainer to="/u/profile" onClick={event =>{
                                    loadUserInfo(user.username);}
                                }>
                                    <MenuItem eventKey={3.1}><i className={'fa fa-user'}/>My Dog Profile</MenuItem>
                                </LinkContainer>
                                <LinkContainer to="/u/profile/edit">
                                    <MenuItem eventKey={3.2}><i className={'fa fa-cogs'}/>Edit My Dog Profile</MenuItem>
                                </LinkContainer>
                                <MenuItem divider/>
                                <MenuItem eventKey={3.3}
                                          onClick={() => {
                                              logout()
                                          }
                                          }
                                ><i className={'fa fa-sign-out'}/>Sign Out</MenuItem>
                            </NavDropdown>)
                            : ([
                                    <LinkContainer key={'login'} to="/login" onClick={() => {
                                        showLoginForm()
                                    }}>
                                        <NavItem eventKey={2}><i className={'fa fa-sign-in'}/> Login</NavItem>
                                    </LinkContainer>,
                                    <LinkContainer key={'sign-up'} to="/login" onClick={() => showSignupForm()}>

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