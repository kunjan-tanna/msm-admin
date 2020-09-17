import React from "react";
import { connect } from "react-redux";
import {
   Button,
   CardHeader,
   CardBody,
   CardTitle,
   Card,
   Row,
   Col,
   Form,
   FormGroup,
   CustomInput,
   Label,
   Input,
} from "reactstrap";
import { loginWithJWT } from "../../../redux/actions/auth/loginActions";
import { NavLink } from "react-router-dom";
import { Mail, Lock, Check } from "react-feather";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { history } from "../../../history";
import fgImg from "../../../assets/imgs/login.png";

class Login extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {},
      };
   }
   //handleInput
   handleInput = (event) => {
      event.persist();
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [event.target.name]: event.target.value,
         },
      }));
   };
   //Handle Form Submit
   handleFormSubmit = () => {
      console.log("FORMDATA===", this.state.formData);
      this.props.dispatch(loginWithJWT(this.state.formData));
   };
   render() {
      return (
         <Row className="m-0 justify-content-center">
            <Col
               sm="8"
               xl="7"
               lg="10"
               md="8"
               className="d-flex justify-content-center pt-4"
            >
               <Card>
                  <Row className="m-0">
                     <Col
                        lg="6"
                        className="d-lg-block d-none text-center align-self-center"
                     >
                        <img src={fgImg} alt="fgImg" />
                     </Col>
                     <Col lg="6" md="12" className="p-0">
                        <Card className="rounded-0 mb-0 px-2">
                           <CardHeader className="pb-1">
                              <CardTitle>
                                 <h4 className="mb-0">Login</h4>
                              </CardTitle>
                           </CardHeader>
                           <p className="px-2 ml-4 pt-2">
                              Welcome back, please login to your account.
                           </p>
                           <CardBody>
                              <Col sm="12">
                                 <Form
                                    onSubmit={(e) => {
                                       e.preventDefault();
                                       this.handleFormSubmit();
                                    }}
                                 >
                                    <Row>
                                       <Col sm="12">
                                          <FormGroup>
                                             <Label>
                                                <Mail size={15} /> Email
                                             </Label>
                                             <Input
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                onChange={this.handleInput}
                                             />
                                          </FormGroup>
                                       </Col>
                                       <Col sm="12">
                                          <FormGroup>
                                             <Label>
                                                <Lock size={15} /> Password
                                             </Label>
                                             <Input
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                onChange={this.handleInput}
                                             />
                                          </FormGroup>
                                          <FormGroup className="d-flex justify-content-between align-items-center">
                                             <CustomInput
                                                className="pt-1 ml-2"
                                                type="checkbox"
                                                name="donotcall"
                                                id="donotcall"
                                                label="Remember me"
                                                //checked = {this.state.formData}
                                                //onChange={this.onCheckChange}
                                             />
                                             <div className="float-right">
                                                <NavLink
                                                   to="/forgotpassword"
                                                   exact
                                                   className="nav-link"
                                                >
                                                   Forgot Password?
                                                </NavLink>
                                             </div>
                                          </FormGroup>
                                          <div className="d-flex justify-content-between">
                                             <Button
                                                color="primary"
                                                outline
                                                onClick={() => {
                                                   history.push("/register");
                                                }}
                                             >
                                                Register
                                             </Button>
                                             <Button
                                                color="primary"
                                                type="submit"
                                             >
                                                Login
                                             </Button>
                                          </div>
                                          <ToastContainer />
                                       </Col>
                                    </Row>
                                 </Form>
                              </Col>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               </Card>
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};

export default connect(mapStateToProps)(Login);
