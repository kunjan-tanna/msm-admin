import React from "react";
import { connect } from "react-redux";
import {
   Button,
   CardHeader,
   CardBody,
   Card,
   CardTitle,
   Row,
   Col,
   Form,
   FormGroup,
   CustomInput,
   Label,
   Input,
} from "reactstrap";
import * as userAction from "../../../redux/actions/auth/registerActions";

import { Link } from "react-router-dom";
import { history } from "../../../history";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Menu from "../../../navbar/menu";

class Profile extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         formData: {},

         userData: this.props.userInfo,
      };
   }
   //handle the Input
   handleInput = (event) => {
      event.persist();
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [event.target.name]: event.target.value,
         },
      }));
   };

   componentDidMount() {
      const userId = this.state.userData._id;
      this.props.dispatch(userAction.getUserId(userId)).then((res) => {
         if (res) {
            this.setState({ formData: res.data }); //() => {console.log();}
         }
      });
   }

   //To submit the Data
   handleFormSubmit = () => {
      const userId = this.state.userData._id;
      this.props
         .dispatch(userAction.UpdateUsers(userId, this.state.formData))
         .then((res) => {
            if (!res.data) {
               //Add success message in Toast
               // console.log("ERROR");
               toast.error("Update is not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            } else {
               // console.log("Sucess");
               toast.success("Update Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/");
               }, 3000);
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("Update is not Successfully", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
   handleReset = () => {
      this.setState({ formData: {} });
   };
   render() {
      const { formData } = this.state;

      return (
         <Row className="m-0">
            <Col sm="12" className="pt-2">
               <Menu />
               <Card className="rounded-0 mb-0 px-2">
                  <CardHeader className="pb-1">
                     <CardTitle>
                        <h4 className="mb-0">Update Profile</h4>
                     </CardTitle>
                  </CardHeader>
                  <CardBody>
                     <Col sm="12">
                        <Form
                           onSubmit={(e) => {
                              e.preventDefault();
                              this.handleFormSubmit();
                           }}
                        >
                           <Row>
                              <Col md="4" sm="12">
                                 <FormGroup>
                                    <Label>FirstName</Label>
                                    <Input
                                       type="text"
                                       value={
                                          formData && formData.firstName
                                             ? formData.firstName
                                             : ""
                                       }
                                       placeholder="First Name"
                                       name="firstName"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="4" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Last Name</Label>
                                    <Input
                                       type="text"
                                       value={
                                          formData && formData.lastName
                                             ? formData.lastName
                                             : ""
                                       }
                                       placeholder="Last Name"
                                       name="lastName"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="4" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Email</Label>
                                    <Input
                                       type="email"
                                       value={
                                          formData && formData.email
                                             ? formData.email
                                             : ""
                                       }
                                       placeholder="Email"
                                       name="email"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                              </Col>
                              {/* Note :Keep it as for now Password */}
                              <Col md="4" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>OwnerOf</Label>
                                    <Input
                                       type="text"
                                       value={
                                          formData && formData.ownerOf
                                             ? formData.ownerOf
                                             : ""
                                       }
                                       placeholder="e.g ABC Medical"
                                       name="ownerOf"
                                       onChange={this.handleInput}
                                       required
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="4" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Address</Label>
                                    <Input
                                       type="textarea"
                                       value={
                                          formData && formData.address
                                             ? formData.address
                                             : ""
                                       }
                                       placeholder="Address"
                                       name="address"
                                       onChange={this.handleInput}
                                    />
                                 </FormGroup>
                              </Col>
                              <Col md="4" sm="12">
                                 <FormGroup className="form-label-group">
                                    <Label>Phone No</Label>
                                    <Input
                                       type="Number"
                                       value={
                                          formData && formData.mobile
                                             ? formData.mobile
                                             : ""
                                       }
                                       placeholder="Phone No."
                                       name="mobile"
                                       onChange={this.handleInput}
                                    />
                                 </FormGroup>
                              </Col>
                              <Col
                                 className="d-flex justify-content-end flex-wrap mt-2"
                                 sm="12"
                              >
                                 <Button
                                    className="mr-1"
                                    color="primary"
                                    type="submit"
                                    //onClick={this.props.leadId}
                                 >
                                    Update Profile
                                 </Button>
                                 <ToastContainer />
                                 <Button
                                    color="primary"
                                    outline
                                    onClick={() => this.handleReset()}
                                    type="button"
                                 >
                                    Reset
                                 </Button>
                              </Col>
                           </Row>
                        </Form>
                     </Col>
                  </CardBody>
               </Card>
            </Col>
         </Row>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      userInfo: state.auth.login.userInfo,
   };
};
// const mapDispatchToProps = (dispatch) => {
//    return { dispatch };
// };

export default connect(mapStateToProps)(Profile);
