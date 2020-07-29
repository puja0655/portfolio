import React ,{useState} from 'react';
import '../App.css';
import {Nav,NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

function Header(props){
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    
    return(

        <div className="header">
            
            <Nav className="navbar navbar-expand-lg " id="navbar">
                <NavItem className="m-2">
                <NavLink activeStyle={{
                          fontWeight: 800,
                           color: "white" 
                                  }}
                        to="/home" id="navlink">Home
              </NavLink>
                </NavItem>
               
              <NavItem className="m-2">
                <NavLink activeStyle={{
                          fontWeight: 800,
                           color: "white"
                                  }}
                        to="/about" id="navlink">About
              </NavLink>
              </NavItem>
                <NavItem className="m-2">
                    
                    <Dropdown  isOpen={dropdownOpen} toggle={toggle}>
                 <DropdownToggle >
                  <i className="fa fa-address-book fa-lg"></i>
                 </DropdownToggle>
      <DropdownMenu  className="dropdown-menu">
        <DropdownItem  tag="a" href="www.google.com"><i className="fa fa-envelope fa-lg"></i></DropdownItem>
        <DropdownItem tag="a" href=""><i className="fa fa-comments fa-lg"></i></DropdownItem>
        <DropdownItem><i className="fa fa-phone fa-lg"></i></DropdownItem>
      </DropdownMenu>
    </Dropdown> 
                    
                </NavItem>
            </Nav>
            </div>
        
    );
}

export default Header;