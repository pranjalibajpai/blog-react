import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as NavLinkReact, Jumbotron
} from 'reactstrap';
import './Header.css';
import {AiOutlineBars} from 'react-icons/ai';
import {NavLink} from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return ( 
        <div className="header">
        <Navbar expand="md">
        <NavbarBrand href="/">Pranjali's Blog</NavbarBrand>
        <NavbarToggler onClick={toggle} ><AiOutlineBars /></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" activeClassName="active" tag={NavLinkReact}>Create New Post</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/about" activeClassName="active" tag={NavLinkReact}>About</NavLink>
            </NavItem>
            <NavItem>
              <a href="https://pranjalibajpai.netlify.app" activeClassName="active" tag={NavLinkReact}>Portfolio</a>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
        </div>
    );
}
 
export default Header;