import React, { useState } from "react";
import { withRouter, NavLink as RRNavLink } from "react-router-dom";
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem,
   NavbarText,
} from "reactstrap";
import * as Icon from "react-feather";
import { connect } from "react-redux";

const Menu = (props) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);

   return (
      <div>
         <Navbar color="light" light expand="md">
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
               <Nav className="mr-auto" navbar>
                  <NavItem>
                     <NavLink
                        tag={RRNavLink}
                        to={`/`}
                        activeClassName="active"
                        exact
                     >
                        Dashboard
                     </NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                     <DropdownToggle nav caret>
                        Medicine
                     </DropdownToggle>
                     <DropdownMenu left>
                        <DropdownItem
                           tag={RRNavLink}
                           to={`/add/medicine`}
                           activeClassName="active"
                        >
                           Add Medicine
                        </DropdownItem>
                     </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                     <DropdownToggle nav caret>
                        Transaction
                     </DropdownToggle>
                     <DropdownMenu left>
                        <DropdownItem
                           tag={RRNavLink}
                           to={`/add/purchase`}
                           activeClassName="active"
                        >
                           Purchase
                        </DropdownItem>
                        <DropdownItem
                           tag={RRNavLink}
                           to={`/add/sale`}
                           activeClassName="active"
                        >
                           Sale
                        </DropdownItem>
                     </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown nav inNavbar>
                     <DropdownToggle nav caret>
                        Search
                     </DropdownToggle>
                     <DropdownMenu left>
                        <DropdownItem
                           tag={RRNavLink}
                           to={`/show/sale`}
                           activeClassName="active"
                        >
                           Customer Sales Details
                        </DropdownItem>
                        <DropdownItem
                           tag={RRNavLink}
                           to={`/show/purchase`}
                           activeClassName="active"
                        >
                           Supplier Sales Details
                        </DropdownItem>
                     </DropdownMenu>
                  </UncontrolledDropdown>
                  <NavItem>
                     <NavLink
                        tag={RRNavLink}
                        to={`/show/medicine`}
                        activeClassName="active"
                     >
                        Current Stock
                     </NavLink>
                  </NavItem>
               </Nav>
               <UncontrolledDropdown>
                  <DropdownToggle
                     tag="a"
                     data-toggle="dropdown"
                     className="nav-link dropdown-user-link"
                  >
                     <div className="user-nav d-sm-flex d-none">
                        <span>
                           Owner of : <strong>ABC Medical</strong>
                        </span>
                        &nbsp;
                        <span>
                           Username : <strong>John Doe</strong>
                        </span>
                     </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                     <DropdownItem tag="a" href="#">
                        <Icon.User size={14} className="mr-50" />
                        &nbsp;
                        <span className="align-middle">Edit Profile</span>
                     </DropdownItem>
                     <DropdownItem tag="a" href="#">
                        <Icon.Power size={14} className="mr-50" />
                        &nbsp;
                        <span className="align-bottom">logout</span>
                     </DropdownItem>
                  </DropdownMenu>
               </UncontrolledDropdown>
               {/* <NavbarText>Simple Text</NavbarText> */}
            </Collapse>
         </Navbar>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      userInfo: state.auth.login.userInfo,
   };
};
export default connect(mapStateToProps)(withRouter(Menu));
