import React, { useState, useEffect } from "react";
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
import { logout } from "../redux/actions/auth/loginActions";
import { connect } from "react-redux";
import * as userAction from "../redux/actions/auth/registerActions";

const Menu = (props) => {
   const [isOpen, setIsOpen] = useState(false);
   const [data, setData] = useState({ rowData: [] });

   const toggle = () => setIsOpen(!isOpen);

   const handleitem = () => {
      props.logout();
      // console.log('LOGOUT',props.logout)
      props.history.push("/login");
   };
   useEffect(() => {
      const userId = props.userInfo._id;
      props.dispatch(userAction.getUserId(userId)).then((res) => {
         if (res) {
            setData({ rowData: res.data });
         }
      });
   }, []);

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
                     <DropdownMenu left="true">
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
                     <DropdownMenu left="true">
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
                     <DropdownMenu left="true">
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
                           Owner of :{" "}
                           <strong>
                              <i>
                                 {data.rowData && data.rowData.ownerOf
                                    ? data.rowData.ownerOf
                                    : "loading..."}
                              </i>
                           </strong>
                        </span>
                        &nbsp;
                        <span>
                           Username :{" "}
                           <strong>
                              {data.rowData && data.rowData.lastName
                                 ? data.rowData.lastName
                                 : "Loading..."}
                           </strong>
                        </span>
                     </div>
                  </DropdownToggle>
                  <DropdownMenu right>
                     <DropdownItem
                        tag={RRNavLink}
                        to={`/edit/profile`}
                        activeClassName="active"
                     >
                        <Icon.User size={14} className="mr-50" />
                        &nbsp;
                        <span className="align-middle">Edit Profile</span>
                     </DropdownItem>
                     <DropdownItem
                        // tag={RRNavLink}
                        // to={`/login`}
                        onClick={(e) => handleitem(e, "/login")}
                     >
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
const mapDispatchToProps = (dispatch) => {
   return { logout: () => dispatch(logout()), dispatch };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Menu));
