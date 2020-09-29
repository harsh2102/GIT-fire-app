import React,{useState, useContext} from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, NavbarText} from 'reactstrap';
import {Link} from 'react-router-dom';
import { UserContext } from '../Context/UserContext';
const Header = () => {

    const context = useContext(UserContext);

    const [isOpen, setIsOpen] =useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand>
                <Link to="/" className="text-white">
                    Git fire app
                </Link>
            </NavbarBrand>
            <NavbarText className="text-white text-center"> {context.user?.email ? `Welcome ${context.user.email} !` : ""}</NavbarText>
            <NavbarToggler onClick={toggle}/>
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    {
                        context.user ? (
                            <NavItem>
                                <NavLink onClick={() => {context.setUser(null)}} className="text-white">Logout</NavLink>
                            </NavItem>
                        ) : (
                            <>
                            <NavItem>
                                <NavLink tag={Link} to="/signin" className="text-white">Sign In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/signup" className="text-white">Sign Up</NavLink>
                            </NavItem>
                            </>
                        )
                    }
                </Nav>
            </Collapse>
        </Navbar>
    );
}

export default Header;
