import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  } from 'reactstrap';

class NavBarComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isNavOpen: false
        }
        
        
    }

    Toggle = ()=>{
      this.setState({
        isNavOpen: ! this.state.isNavOpen
      });
    }
    
    render() {
        return (
            <div className="container-fluid">
                <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="text-white"> FAST FOOD RESTAURANT</NavbarBrand>
        <NavbarToggler onClick={this.Toggle} className="bg-white" />
        <Collapse isOpen = {this.state.isNavOpen}  navbar>
          <Nav className="mr-5 ml-5" navbar>
            <NavItem>
              <NavLink href="/" className="text-white">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about" className="text-white">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/services" className="text-white">Services</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact" className="text-white">Contact</NavLink>
            </NavItem>
            </Nav>
            </Collapse>
        </Navbar> 
            </div>
        )
    }
}

export default NavBarComponent 
