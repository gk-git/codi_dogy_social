import React from 'react';
import {Nav, Navbar, NavItem} from "react-bootstrap";

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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export  {TopNavBar}