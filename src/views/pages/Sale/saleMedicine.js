import React from "react";
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
   FormGroup,
} from "reactstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Select from "react-select";
import { history } from "../../../history";
import { connect } from "react-redux";
import TempShowMedicine from "./tempShowMedicine";
import * as globalActions from "../../../redux/actions/global";
import * as medicineActions from "../../../redux/actions/medicines";
import { data } from "jquery";

const groupBadgeStyles = {
   control: (base) => ({
      ...base,
   }),
   option: (styles, { data, isDisabled, isFocused, isSelected }) => ({
      ...styles,
      height: 33,

      //minHeight: 5,
   }),
};
class SaleMedicine extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: this.props.categories,
         packages: this.props.packages,
         rowData: [],
         medicine: this.props.medicine,
         formData: {},
         data: [],
         finalRate: "",
         totalStock: "",
         final: "",
         quantity: "",
         totalNoOfItem: "",
         currentItem: "",
         value: 0,
         val: 0,
         updateValue: [],
         tempData: [],
         arr: "",
         handltemp: [],
         userdata: this.props.userInfo,
      };
   }
   componentDidMount() {
      this.props.dispatch(globalActions.getCategory());
      this.props.dispatch(globalActions.getPackage());
      this.props.dispatch(medicineActions.getMedicine()).then((res) => {
         // console.log("MEDICICICIIC", res.data);
         let data = res.data.filter((item) => {
            if (item.userId === this.state.userdata._id) {
               return item;
            }
         });

         this.setState({ data });
      });
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
      // Medicine
      if (
         nextProps.medicine &&
         nextProps.medicine.length &&
         nextProps.medicine !== prevState.medicine
      ) {
         const medicine = nextProps.medicine.map((item) => {
            return {
               label: item.productName,
               value: item._id,
            };
         });
         // console.log("--this.props.--", nextProps);
         Object.assign(updatedObject, { medicine: medicine });
      }

      return Object.keys(updatedObject).length !== 0 ? updatedObject : null;
   }

   handleChange = (name, data) => {
      this.setState((prevState) => ({
         formData: {
            ...prevState.formData,
            [name]: data.value,
         },
      }));
      // ()=>console.log('---setState---',this.state.formData,name,data)
   };
   handleChangePkg = (name, data) => {
      this.setState(
         (prevState) => ({
            rowData: {
               ...prevState.rowData,
               [name]: data.value,
            },
         }),
         () => {
            this.setState({ final: this.state.rowData.totalNoOfItem });
            this.setState({ finalRate: this.state.rowData.itemUnitCost });
            this.props.stock(this.state.rowData.itemUnitCost);
         }
      );
   };
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
            const abc = this.state.finalRate ? this.state.finalRate : "";

            const totalStock = abc * this.state.formData.saleQuantity;

            this.setState({
               totalStock: totalStock,
            });

            //TotalNoofItem
            const item =
               this.state.totalNoOfItem - this.state.formData.saleQuantity;
            this.setState({
               currentItem: item,
            });
         }
      );
   };
   handleFormSubmit1 = () => {
      const data = this.state.rowData;

      data.saleQuantity = this.state.formData.saleQuantity;
      // data.productName = this.state.rowData.productName;
      // data.categoryId = this.state.rowData.categoryId;

      data.quantity = this.state.quantity;

      data.totalNoOfItem = this.state.currentItem;

      // data.MRPRate = this.state.rowData.MRPRate;
      //data.saleRate = this.state.finalRate ? this.state.finalRate : "";
      data.price = this.state.totalStock;
      // console.log("quantityyyy", data);
      this.props
         .dispatch(medicineActions.updateMedicine(this.state.arr, data))
         .then((res1) => {
            if (res1.data) {
               this.props
                  .dispatch(medicineActions.getMedicine())
                  .then((res) => {
                     // console.log("MEDICICICIIC", res.data);
                     let data = res.data.filter((item) => {
                        if (item.userId === this.state.userdata._id) {
                           return item;
                        }
                     });

                     this.setState({ data });
                  });

               this.props
                  .dispatch(medicineActions.getUpdatedMedicine())
                  .then((res) => {
                     let data = res.data.filter((item) => {
                        if (item.userId === this.state.userdata._id) {
                           return item;
                        }
                     });
                     console.log("ressssponseee", data);
                  });
            }
         });
      this.handleTotal();
      this.handleMedicine();
   };
   handleTempData = (value) => {
      this.setState({ arr: value });
      this.props
         .dispatch(medicineActions.getMedicineById(value))
         .then((res) => {
            if (res.data._id === value) {
               this.setState({ rowData: res.data });
               this.setState({ final: res.data.quantity });
               this.setState({ finalRate: res.data.saleRate });
               this.setState({ quantity: res.data.quantity });
               this.setState({ totalNoOfItem: res.data.totalNoOfItem });

               //this.props.medicineId(data._id);
               this.props.stock(res.data.saleRate);
            }
         });
   };
   handleTotal = () => {
      this.setState({ value: this.state.value + this.state.totalStock }, () =>
         this.props.data(this.state.value)
      );
   };
   handleMedicine = () => {
      this.setState({ val: this.state.val + 1 }, () => {
         this.props.totalMedicine(this.state.val);
      });
   };
   render() {
      const categories =
         this.state.categories &&
         this.state.categories.filter(
            (item) => item.value === this.state.rowData.categoryId
         );
      const data = categories && categories.map((item) => item.label);

      return (
         <Row>
            <Col sm="12">
               <Card>
                  <CardBody>
                     <Col sm="12">
                        <Row>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Product Name</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="productName"
                                    name="productName"
                                    placeholder="productName"
                                    value={
                                       this.state.rowData &&
                                       this.state.rowData.productName
                                          ? this.state.rowData.productName
                                          : ""
                                    }
                                 />
                                 {/* <Select
                                    options={abc}
                                    isClearable={false}
                                    //styles={groupBadgeStyles}
                                    className="React"
                                    classNamePrefix="select"
                                    id="medicineId"
                                    name="medicineId"
                                    maxMenuHeight={200}
                                    //onChange={this.handleChange}
                                    onChange={(data) =>
                                       this.handleChange("medicineId", data)
                                    }
                                 /> */}
                                 {/* <Input
                                    type="text"
                                    id="status"
                                    name="status"
                                    placeholder="status"
                                    value={
                                       this.state.data && this.state.data.status
                                          ? this.state.data.status
                                          : ""
                                    }
                                 /> */}
                              </FormGroup>
                           </Col>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Category Name</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="categoryId"
                                    name="categoryId"
                                    placeholder="category Name"
                                    value={data}
                                 />
                              </FormGroup>
                           </Col>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Unit</Label>
                                 <Select
                                    value={
                                       this.state.packages &&
                                       this.state.packages.filter(
                                          (item) =>
                                             item.value ===
                                             this.state.rowData.packageId
                                       )
                                    }
                                    isClearable={false}
                                    //styles={colourStyles}
                                    options={this.state.packages}
                                    className="React"
                                    classNamePrefix="select"
                                    id="packageId"
                                    name="packageId"
                                    //onChange={this.handleChange}
                                    onChange={(data) =>
                                       this.handleChangePkg("packageId", data)
                                    }
                                 />
                              </FormGroup>
                           </Col>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Quantity/Stripe Stock</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="quantity"
                                    name="dquantity"
                                    placeholder="quantity"
                                    value={
                                       this.state.final ? this.state.final : ""
                                    }
                                 />
                              </FormGroup>
                           </Col>

                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">MRP Rate</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="MRPRate"
                                    name="MRPRate"
                                    placeholder="MRP Rate"
                                    value={
                                       this.state.finalRate
                                          ? this.state.finalRate
                                          : ""
                                    }
                                 />
                              </FormGroup>
                           </Col>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Sale Rate</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="saleRate"
                                    name="saleRate"
                                    placeholder="Sale Rate"
                                    value={
                                       this.state.finalRate
                                          ? this.state.finalRate
                                          : ""
                                    }
                                 />
                              </FormGroup>
                           </Col>
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
                                    // value={
                                    //    this.state.rowData &&
                                    //    this.state.rowData.saleQuantity
                                    //       ? this.state.rowData.saleQuantity
                                    //       : ""
                                    // }
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
                                    id="dprice"
                                    placeholder="Price"
                                    name="dprice"
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
                           <Col
                              className="d-flex justify-content-end flex-wrap mt-2"
                              sm="12"
                           >
                              <Button
                                 className="mr-1"
                                 color="primary"
                                 onClick={() => this.handleFormSubmit1()}
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
               </Card>
            </Col>

            <Col className="pt-2">
               <Row>
                  <Col>
                     <TempShowMedicine
                        tempData={this.state.data}
                        handleTemp={this.handleTempData}
                     />
                  </Col>
               </Row>
            </Col>
         </Row>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      //Once data are store in dispatch variable so whenever use it variable to call like this in below:
      userInfo: state.auth.login.userInfo,
      medicine: state.global.medicine,
      categories: state.global.categories,
      packages: state.global.packages,
   };
};
export default connect(mapStateToProps)(SaleMedicine);
