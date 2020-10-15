import React from "react";
import Menu from "../../../navbar/menu";
import {
   Card,
   CardBody,
   Row,
   Col,
   CardHeader,
   CardTitle,
   Button,
   Form,
   Input,
   Label,
   InputGroup,
   InputGroupAddon,
   InputGroupText,
   FormGroup,
} from "reactstrap";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { history } from "../../../history";
import { connect } from "react-redux";
import UpdateMedicine from "./UpdateMedicine";
import * as globalActions from "../../../redux/actions/global";
import * as medicineActions from "../../../redux/actions/medicines";
import * as purchaseActions from "../../../redux/actions/purchase";

import moment from "moment";

class AddPurchase extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: this.props.categories,
         packages: this.props.packages,
         rowData: [],
         companies: this.props.companies,
         userdata: this.props.userInfo,
         medicine: this.props.medicine,
         payments: this.props.payments,
         result: "",
         date: new Date().toLocaleDateString(),
         stock: "",
         totalStock: "",
         // quantity1: "",
         // updateQuantity: "",
         // noOfPack: "",
         // updatePack: "",
         // noOfSubItem: "",
         // updateSubItem: "",
         discountP: "",
         formData: {},
      };
   }
   componentDidMount() {
      this.props.dispatch(globalActions.getCategory());
      this.props.dispatch(globalActions.getPackage());
      this.props.dispatch(globalActions.getCompanies());
      this.props.dispatch(globalActions.getPayments());
      this.props.dispatch(medicineActions.getMedicine());

      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            ["purchaseDate"]: this.state.date,
         },
      }));
   }
   static getDerivedStateFromProps(nextProps, prevState) {
      const updatedObject = {};

      // Categories
      if (
         nextProps.categories &&
         nextProps.categories.length &&
         nextProps.categories !== prevState.categories
      ) {
         const categories = nextProps.categories.map((item) => {
            return {
               label: item.categotyName,
               value: item._id,
            };
         });
         Object.assign(updatedObject, { categories: categories });
      }
      // Medicine
      if (
         nextProps.medicine &&
         nextProps.medicine.length &&
         nextProps.medicine !== prevState.medicine
      ) {
         // console.log("--this.props.--", nextProps.medicine);
         Object.assign(updatedObject, { medicine: nextProps.medicine });
      }

      // Packages
      if (
         nextProps.packages &&
         nextProps.packages.length &&
         nextProps.packages !== prevState.packages
      ) {
         const packages = nextProps.packages.map((item) => {
            return {
               label: item.packageName,
               value: item._id,
            };
         });
         // console.log("--this.props.--", nextProps.packages);
         Object.assign(updatedObject, { packages: packages });
      }

      // companies
      if (
         nextProps.companies &&
         nextProps.companies.length &&
         nextProps.companies !== prevState.companies
      ) {
         const companies = nextProps.companies.map((item) => {
            return {
               label: item.companyName,

               value: item._id,
            };
         });
         // console.log("--this.props.--", companies);
         Object.assign(updatedObject, { companies: companies });
      }
      // payments
      if (
         nextProps.payments &&
         nextProps.payments.length &&
         nextProps.payments !== prevState.payments
      ) {
         const payments = nextProps.payments.map((item) => {
            return {
               label: item.paymentBy,
               value: item._id,
            };
         });
         Object.assign(updatedObject, { payments: payments });
      }

      return Object.keys(updatedObject).length !== 0 ? updatedObject : null;
   }

   handleInput = (event) => {
      event.persist();
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [event.target.name]: event.target.value,
            },
         }),
         () => {
            const totalStock =
               this.state.stock * this.state.formData.purchaseQuantity;

            this.setState({
               totalStock: totalStock,
            });
            // this.setState({
            //    updateQuantity:
            //       +this.state.quantity1 + +this.state.formData.purchaseQuantity,
            // });
         }
      );
   };
   handleChangePurchase = (name, data) => {
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [name]: data.value,
         },
      }));
      // ()=>console.log('---setState---',this.state.formData,name,data)
   };

   handleMedicineId = (value) => {
      this.setState({ result: value });
   };
   handleStock = (value) => {
      this.setState({ stock: value });
   };
   // handle = (pack, subItem, quantity) => {
   //    console.log("quantity", quantity);
   //    this.setState({ noOfPack: pack }, () =>
   //       console.log("NoOfPack", this.state.noOfPack)
   //    );
   //    this.setState({ quantity1: quantity });
   //    this.setState({ noOfSubItem: subItem }, () =>
   //       console.log("SubItem", this.state.noOfSubItem)
   //    );
   // };

   handleDiscount = (event) => {
      event.persist();
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [event.target.name]: event.target.value,
            },
         }),
         () => {
            const Discount =
               (this.state.totalStock * this.state.formData.discount) / 100;
            const final = this.state.totalStock - Discount;

            this.setState({
               discountP: final,
            });
         }
      );
   };
   handleFormSubmit = () => {
      const obj = this.state.formData;
      obj.medicineId = this.state.result;
      obj.total = this.state.totalStock;
      obj.grandTotal = this.state.totalStock;
      obj.userId = this.state.userdata._id;

      this.props
         .dispatch(purchaseActions.addPurchase(obj))
         .then((res) => {
            if (res.data && res.data.client) {
               toast.success("Add Purchase Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               setTimeout(() => {
                  history.push("/show/medicine");
               }, 3000);
            } else {
               toast.error("Add Purchase not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("Add Purchase not Successfully", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };

   render() {
      return (
         <Row>
            <Col sm="12">
               <Menu />
               <Form
                  onSubmit={(e) => {
                     e.preventDefault();
                     this.handleFormSubmit();
                  }}
               >
                  <Card>
                     <CardHeader>
                        <CardTitle>
                           <h4 className="mb-0">Main Information</h4>
                        </CardTitle>
                        <CardBody
                           body="true"
                           inverse="true"
                           style={{
                              backgroundColor: "#7EBDE4",
                              borderColor: "#7EBDE4",
                           }}
                        >
                           <Col sm="12">
                              <Row>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Supplier Name</Label>
                                       <Select
                                          isClearable={false}
                                          //styles={colourStyles}
                                          options={this.state.companies}
                                          className="React"
                                          classNamePrefix="select"
                                          id="companyId"
                                          name="companyId"
                                          //onChange={this.handleChange}
                                          onChange={(data) =>
                                             this.handleChangePurchase(
                                                "companyId",
                                                data
                                             )
                                          }
                                       />
                                       {/* <Input
                                          type="text"
                                          id="country"
                                          name="country"
                                          placeholder="country"
                                          value={
                                             this.state.rowData &&
                                             this.state.rowData.country
                                                ? this.state.rowData.country
                                                : ""
                                          }
                                       /> */}
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Purchase Date</Label>
                                       <Input
                                          //value={this.state.formData && this.state.formData.message?this.state.formData.message:''}
                                          type="date"
                                          name="publishedAt"
                                          id="publishedAt"
                                          disabled
                                          defaultValue={
                                             moment(this.state.date).format(
                                                "YYYY-MM-DD"
                                             )
                                                ? moment(
                                                   this.state.date
                                                ).format("YYYY-MM-DD")
                                                : ""
                                          }
                                          placeholder="PublishAt"
                                       // onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                           </Col>
                        </CardBody>
                     </CardHeader>
                  </Card>
                  {/* For Update Products */}
                  <Card>
                     <CardHeader>
                        <CardTitle>
                           <h4 className="mb-0">Add Products</h4>
                        </CardTitle>
                        <CardBody
                           body="true"
                           inverse="true"
                           style={{
                              backgroundColor: "#7EBDE4",
                              borderColor: "#7EBDE4",
                           }}
                        >
                           <Col>
                              <Row>
                                 <UpdateMedicine
                                    medicineId={this.handleMedicineId}
                                    stock={this.handleStock}
                                 />
                              </Row>
                              <Row>
                                 <Col
                                    className="d-flex justify-content-end flex-wrap mt-2"
                                    sm="12"
                                 >
                                    <FormGroup>
                                       <Label for="name">
                                          Purchase Quantity
                                       </Label>
                                       <Input
                                          type="number"
                                          id="purchaseQuantity"
                                          name="purchaseQuantity"
                                          placeholder="Quantity"
                                          required
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                    &nbsp;
                                    <FormGroup>
                                       <Label for="name">
                                          <strong>Price</strong>
                                       </Label>
                                       <Input
                                          disabled
                                          //required
                                          type="number"
                                          id="total"
                                          placeholder="Price"
                                          name="total"
                                          value={
                                             this.state.formData &&
                                                this.state.totalStock
                                                ? this.state.totalStock
                                                : ""
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row>
                           </Col>
                        </CardBody>
                     </CardHeader>
                  </Card>
                  {/* For continue add purchase */}

                  <Card>
                     <CardHeader>
                        <CardTitle>
                           <h4 className="mb-0">Add Text</h4>
                        </CardTitle>
                        <CardBody
                           body="true"
                           inverse="true"
                           style={{
                              backgroundColor: "#7EBDE4",
                              borderColor: "#7EBDE4",
                           }}
                        >
                           <Col sm="12">
                              <Row>
                                 <Col
                                    className="d-flex justify-content-between flex-wrap mt-2"
                                    sm="12"
                                 >
                                    <FormGroup>
                                       <Label for="name">Discount</Label>
                                       <InputGroup>
                                          <Input
                                             disabled
                                             type="number"
                                             name="discount"
                                             id="discount"
                                             placeholder="Discount"
                                          //onChange={this.handleDiscount}
                                          />
                                          <InputGroupAddon addonType="append">
                                             <InputGroupText>%</InputGroupText>
                                          </InputGroupAddon>
                                       </InputGroup>
                                    </FormGroup>
                                    <FormGroup>
                                       <Label for="name">
                                          <strong>Grand Total</strong>
                                       </Label>
                                       <Input
                                          disabled
                                          type="number"
                                          name="grandTotal"
                                          id="grandTotal"
                                          placeholder="Grand Total"
                                          value={
                                             this.state.totalStock
                                                ? this.state.totalStock
                                                : this.state.totalStock
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Payment By:</Label>
                                       <Select
                                          isClearable={false}
                                          //styles={colourStyles}
                                          options={this.state.payments}
                                          className="React"
                                          classNamePrefix="select"
                                          id="paymentId"
                                          name="paymentId"
                                          //onChange={this.handleChange}
                                          onChange={(data) =>
                                             this.handleChangePurchase(
                                                "paymentId",
                                                data
                                             )
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Remarks:</Label>
                                       <Input
                                          type="textarea"
                                          rows="3"
                                          cols="4"
                                          name="remarks"
                                          id="remarks"
                                          placeholder="Remarks"
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
                                       Add Purchase
                                    </Button>{" "}
                                    &nbsp;
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
                           </Col>
                        </CardBody>
                     </CardHeader>
                  </Card>
               </Form>
            </Col>
         </Row>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      //Once data are store in dispatch variable so whenever use it variable to call like this in below:
      categories: state.global.categories,
      packages: state.global.packages,
      medicine: state.global.medicine,
      companies: state.global.companies,
      payments: state.global.payments,
      userInfo: state.auth.login.userInfo,
   };
};
export default connect(mapStateToProps)(AddPurchase);
