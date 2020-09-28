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
import * as globalActions from "../../../redux/actions/global";
import * as medicineActions from "../../../redux/actions/medicines";

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
class UpdateMedicine extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: this.props.categories,
         packages: this.props.packages,
         rowData: [],
         medicine: this.props.medicine,
         formData: {},
         data: [],
         userdata: this.props.userInfo,
      };
   }
   componentDidMount() {
      console.log("purchaseQuantity", this.props);
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
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [name]: data.value,
            },
         }),
         () => {
            this.props
               .dispatch(medicineActions.getMedicineById(data.value))
               .then((res) => {
                  if (res.data._id === data.value) {
                     this.setState({ rowData: res.data });
                     this.props.medicineId(res.data._id);
                     this.props.stock(res.data.purchaseRate);
                  }
               });
         }
      );
      // ()=>console.log('---setState---',this.state.formData,name,data)
   };

   render() {
      const categories =
         this.state.categories &&
         this.state.categories.filter(
            (item) => item.value === this.state.rowData.categoryId
         );
      const data = categories && categories.map((item) => item.label);

      const packages =
         this.state.packages &&
         this.state.packages.filter(
            (item) => item.value === this.state.rowData.packageId
         );
      const pkgdata = packages && packages.map((item) => item.label);

      const abc =
         this.state.data &&
         this.state.data.map((item) => {
            return {
               label: item.productName,
               value: item._id,
            };
         });
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
                                 <Select
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
                                 />
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
                                 <Input
                                    disabled
                                    type="text"
                                    id="packageId"
                                    name="packageId"
                                    placeholder="Unit"
                                    value={pkgdata}
                                 />
                              </FormGroup>
                           </Col>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Current Stock</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="quantity"
                                    name="quantity"
                                    placeholder="quantity"
                                    value={
                                       this.state.rowData &&
                                       this.state.rowData.quantity
                                          ? this.state.rowData.quantity
                                          : ""
                                    }
                                 />
                              </FormGroup>
                           </Col>
                           <Col md="4" sm="12">
                              <FormGroup>
                                 <Label for="name">Purchase Rate</Label>
                                 <Input
                                    disabled
                                    type="text"
                                    id="purchaseRate"
                                    name="purchaseRate"
                                    placeholder="Purchase Rate"
                                    value={
                                       this.state.rowData &&
                                       this.state.rowData.purchaseRate
                                          ? this.state.rowData.purchaseRate
                                          : ""
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
                                       this.state.rowData &&
                                       this.state.rowData.MRPRate
                                          ? this.state.rowData.MRPRate
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
                                       this.state.rowData &&
                                       this.state.rowData.saleRate
                                          ? this.state.rowData.saleRate
                                          : ""
                                    }
                                 />
                              </FormGroup>
                           </Col>
                        </Row>
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
      //Once data are store in dispatch variable so whenever use it variable to call like this in below:
      userInfo: state.auth.login.userInfo,
      medicine: state.global.medicine,
      categories: state.global.categories,
      packages: state.global.packages,
   };
};
export default connect(mapStateToProps)(UpdateMedicine);
