import React from "react";
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "react-router-dom";
import FontAwesome from "../FontAwesome/FontAwesome";
import "./naviogation.css";

const header = () => {
  
    return (

        <div>
            <Navbar expand="sm" className='navigation-bar'>
            <Link to='/'><Navbar.Brand><FontAwesome icon='address-card' /> Nick M</Navbar.Brand></Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto"> 
            
                <Link className='nav-link active' to='/'>Home</Link>
                <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                    {/* <NavDropdown title="My porfolio" id="basic-nav-dropdown" >
                        <Link className='dropdown-item' to='/'>Action</Link>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />            
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            
                    </NavDropdown> */}
                    <Link className='nav-link' to='/aboutme'>About me</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                </Nav>
                {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            </Navbar>

        </div> 
    );
}

export default header;