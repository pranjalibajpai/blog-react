import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, Jumbotron
} from 'reactstrap';
import './Header.css';
import {AiOutlineBars} from 'react-icons/ai';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return ( 
        <Jumbotron className="header">
        <Navbar expand="md">
        <NavbarBrand href="/">Pranjali's Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} ><AiOutlineBars /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </Jumbotron>
    );
}
 
export default Header;