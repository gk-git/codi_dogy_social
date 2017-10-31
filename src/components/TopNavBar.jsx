import React from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";

const TopNavBar = () => {

    return (
        <Navbar collapseOnSelect className={'navbar'}>
            <Navbar.Header>
                <Navbar.Toggle/>

                <Navbar.Brand>
                    <a href="#">Dogy</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">Link</NavItem>
                    <NavItem eventKey={2} href="#">Link</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                    <NavDropdown eventKey={3} title="My Dog Name" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}><i className={'fa fa-user'}/>My Dog Profile</MenuItem>
                        <MenuItem eventKey={3.2}><i className={'fa fa-cogs'}/>Edit My Dog Profile</MenuItem>
                        <MenuItem divider/>
                        <MenuItem eventKey={3.3}><i className={'fa fa-sign-out'}/></MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export  {TopNavBar}