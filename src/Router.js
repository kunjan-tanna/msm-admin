import React, { Component, lazy } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "./history";
import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";
//import AdminRoute from "./AdminRoute";

//user Dashboard
const UserDashboard = lazy(() => import("./views/pages/UserDashboard"));

//Add Medicine
const AddMedicine = lazy(() => import("./views/pages/Medicine/addMedicine"));
//Show Medicine
const ShowMedicine = lazy(() => import("./views/pages/Medicine/showMedicine"));
//Update Medicine
const UpdateMedicine = lazy(() =>
   import("./views/pages/Purchase/UpdateMedicine")
);

//Add Purchase
const AddPurchase = lazy(() => import("./views/pages/Purchase/addPurchase"));

//Add sale
const AddSale = lazy(() => import("./views/pages/Sale/addSale"));
const SaleMedicine = lazy(() => import("./views/pages/Sale/saleMedicine"));
const PrintSale = lazy(() => import("./views/pages/Sale/printSale"));
const ShowSale = lazy(() => import("./views/pages/Sale/getSale"));

const TempShowMedicine = lazy(() =>
   import("./views/pages/Sale/tempShowMedicine")
);

// //Home Dashboard
// import Home from "./views/pages/UserDashboard/Home";

//Authentication
const Login = lazy(() => import("./views/pages/authentication/Login"));
const Register = lazy(() => import("./views/pages/authentication/Register"));
const Profile = lazy(() => import("./views/pages/authentication/Profile"));
// import ForgotPassword from "./views/pages/authentication/ForgotPassword";
// import ResetPassword from "./views/pages/authentication/ResetPassword";

class Routes extends Component {
   render() {
      // console.log("Routes", this.props);
      return (
         <div>
            <Router history={history}>
               <Switch>
                  {/* For user Dashboard */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/"
                     component={UserDashboard}
                  />
                  {/* For Medicines */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/add/medicine"
                     component={AddMedicine}
                  />
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/show/medicine"
                     component={ShowMedicine}
                  />
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/update/medicine"
                     component={UpdateMedicine}
                  />
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/show/sale/medicine"
                     component={PrintSale}
                  />
                  {/* For Purchase */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/add/purchase"
                     component={AddPurchase}
                  />
                  {/* For Sales */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/add/sale"
                     component={AddSale}
                  />
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/show/sale"
                     component={ShowSale}
                  />
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/sale/medicine"
                     component={SaleMedicine}
                  />
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/temp/show/medicine"
                     component={TempShowMedicine}
                  />
                  {/* For Profile */}
                  <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/edit/profile"
                     component={Profile}
                  />
                  {/* For Authentications */}
                  <Route path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />

                  {/* 
                  <Route path="/forgotpassword" component={ForgotPassword} />
                  <Route path="/resetpassword" component={ResetPassword} /> */}

                  {/* For user side */}
                  {/* <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/user-dashboard"
                     component={UserDashboard}
                  /> */}
                  {/* For Update user  */}
                  {/* <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/edit/user"
                     component={UpdateUser}
                  /> */}
                  {/* For admin side */}
                  {/* <AdminRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/admin-dashboard"
                     component={AdminDashboard}
                  /> */}
                  {/* For covidTracker side */}
                  {/* <PrivateRoute
                     userInfo={this.props.userInfo}
                     exact
                     path="/covid/tracker"
                     component={CovidTracker}
                  /> */}
               </Switch>
            </Router>
         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userInfo: state.auth.login.userInfo,
   };
};
export default connect(mapStateToProps)(Routes);
