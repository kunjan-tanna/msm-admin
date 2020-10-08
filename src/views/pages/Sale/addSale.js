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
import CreatableSelect from "react-select/creatable";
import { history } from "../../../history";
import { connect } from "react-redux";
import SaleMedicine from "./saleMedicine";
import * as globalActions from "../../../redux/actions/global";
import * as medicineActions from "../../../redux/actions/medicines";
import * as saleActions from "../../../redux/actions/sale";

import moment from "moment";

class AddSale extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: this.props.categories,
         packages: this.props.packages,
         rowData: [],
         cust: [],
         companies: this.props.companies,
         userdata: this.props.userInfo,
         medicine: this.props.medicine,
         customers: this.props.customers,
         payments: this.props.payments,
         result: "",

         date: new Date().toLocaleDateString(),
         stock: "",
         finalTotal: "",
         erroMsg: false,
         price: "",
         mVal: "",
         formData: {},
      };
   }
   componentDidMount() {
      this.props.dispatch(globalActions.getPackage());
      this.props.dispatch(globalActions.getCustomers());
      this.props.dispatch(globalActions.getPayments());
      this.props.dispatch(medicineActions.getMedicine());

      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            ["saleDate"]: this.state.date,
         },
      }));
   }
   static getDerivedStateFromProps(nextProps, prevState) {
      const updatedObject = {};

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
      // customers
      if (
         nextProps.customers &&
         nextProps.customers.length &&
         nextProps.customers !== prevState.customers
      ) {
         const customers = nextProps.customers.map((item) => {
            return {
               label: item.customerName,
               value: item._id,
            };
         });
         // console.log("----nexProps.tag", typeof nextProps.customers);
         Object.assign(updatedObject, { customers: customers });
      }

      return Object.keys(updatedObject).length !== 0 ? updatedObject : null;
   }

   handleInput = (event) => {
      event.persist();
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [event.target.name]: event.target.value,
         },
      }));
   };
   handleChange = (name, data) => {
      const custs = data && data.map((item) => item.value);
      //const customer = data && data.map((item) => item.value);
      console.log("DATAAAAA", data);

      //const abc = name & name.map(index => index+1)
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [name]: custs,
         },
      }));
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
               (this.state.price * this.state.formData.discount) / 100;
            const final = this.state.price - Discount;

            // this.setState({
            //    discountP: final,
            // });
            this.setState({
               finalTotal: final,
            });
         }
      );
   };
   handleFormSubmit = () => {
      if (this.state.formData.customerId) {
         const obj = this.state.formData;

         //obj.discount = this.state.finalTotal;
         obj.basePrice = this.state.price;
         obj.grandTotal = this.state.finalTotal;
         obj.userId = this.state.userdata._id;
         // console.log("FORM<DATTAAA", obj);
         this.props
            .dispatch(saleActions.addSale(obj))
            .then((res) => {
               if (res.data) {
                  toast.success("Add Sale Successfully", {
                     position: toast.POSITION.BOTTOM_RIGHT,
                  });
                  setTimeout(() => {
                     history.push(`/show/sale/medicine?saleId=${res.data._id}`);
                  }, 5000);
               } else {
                  toast.error("Add Sale not Successfully", {
                     position: toast.POSITION.BOTTOM_RIGHT,
                  });
               }
            })

            .catch((error) => {
               // show error message in Toast
               toast.error("Add Sale not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            });
      } else {
         this.setState({ erroMsg: true });
         // show error message in Toast
         toast.error("Please Enter the Customer Name", {
            position: toast.POSITION.BOTTOM_RIGHT,
         });
      }
      //this.handleMedicine();
   };
   // handleMedicine = () => {
   //    let tags = [];
   //    //let key = 1;
   //    this.state.medicine.map((x) => {
   //       this.state.result.map((y) => {
   //          // console.log("------------",this.state.formData.tag)
   //          if (y == x._id) {
   //             tags.push(x);
   //          }
   //       });
   //    });
   //    // tags.map(tag => {
   //    //   tag.key = key;
   //    // })
   //    console.log("yaaaaayy", tags);
   //    this.setState({
   //       mId: tags,
   //    });
   //    // this.setState = ({
   //    //   value : [...this.state.value, tags]
   //    // })
   // };
   handleTotal = (value) => {
      this.setState({ price: value });
   };
   handleMedicine = (val) => {
      this.setState({ mVal: val });
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
                                       <Label for="name">Customer Name</Label>

                                       <CreatableSelect
                                          isMulti
                                          options={this.state.customers}
                                          className="React"
                                          name="customerId"
                                          maxMenuHeight={100}
                                          classNamePrefix="select"
                                          onChange={(data) =>
                                             this.handleChange(
                                                "customerId",
                                                data
                                             )
                                          }
                                       />
                                       <strong>
                                          <p className="text-danger">
                                             *This field is required
                                          </p>
                                       </strong>
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Sale Date</Label>
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
                                 <SaleMedicine
                                    stock={this.handleStock}
                                    data={this.handleTotal}
                                    totalMedicine={this.handleMedicine}
                                 />
                              </Row>
                              {/* <Row>
                                 <Col
                                    className="d-flex justify-content-end flex-wrap mt-2"
                                    sm="12"
                                 >
                                    <FormGroup>
                                       <Label for="name">Sale Quantity</Label>
                                       <Input
                                          type="number"
                                          id="saleQuantity"
                                          name="saleQuantity"
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
                                          id="price"
                                          placeholder="Price"
                                          name="price"
                                          value={
                                             this.state.formData &&
                                             parseFloat(
                                                this.state.totalStock
                                             ).toFixed(2)
                                                ? parseFloat(
                                                     this.state.totalStock
                                                  ).toFixed(2)
                                                : ""
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                              </Row> */}
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
                                       <Label for="name">
                                          Total Medicine :
                                       </Label>
                                       <Input
                                          disabled
                                          type="number"
                                          name="totalMedicine"
                                          id="totalMedicine"
                                          placeholder="Total Medicine"
                                          value={
                                             this.state.mVal
                                                ? this.state.mVal
                                                : ""
                                          }
                                          //onChange={this.handleInput}
                                       />
                                    </FormGroup>

                                    <FormGroup>
                                       <Label for="name">Price:</Label>
                                       <Input
                                          disabled
                                          type="text"
                                          name="basePrice"
                                          id="basePrice"
                                          placeholder="price"
                                          value={
                                             parseFloat(
                                                this.state.price
                                             ).toFixed(2)
                                                ? parseFloat(
                                                     this.state.price
                                                  ).toFixed(2)
                                                : ""
                                          }
                                          //onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col
                                    className="d-flex justify-content-between flex-wrap mt-2"
                                    sm="12"
                                 >
                                    <FormGroup>
                                       <Label for="name">Discount</Label>
                                       <InputGroup>
                                          <Input
                                             type="number"
                                             name="discount"
                                             id="discount"
                                             placeholder="Discount"
                                             onChange={this.handleDiscount}
                                          />
                                          <InputGroupAddon addonType="append">
                                             <InputGroupText>%</InputGroupText>
                                          </InputGroupAddon>
                                       </InputGroup>
                                       <strong>
                                          <p className="text-danger">
                                             *Price will be more then 500
                                          </p>
                                       </strong>
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
                                             parseFloat(
                                                this.state.price
                                             ).toFixed(2) >= 500
                                                ? parseFloat(
                                                     this.state.finalTotal
                                                  ).toFixed(2)
                                                : parseFloat(
                                                     this.state.price
                                                  ).toFixed(2)
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
                                       Submit
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

      packages: state.global.packages,
      medicine: state.global.medicine,
      customers: state.global.customers,

      payments: state.global.payments,
      userInfo: state.auth.login.userInfo,
   };
};
export default connect(mapStateToProps)(AddSale);
