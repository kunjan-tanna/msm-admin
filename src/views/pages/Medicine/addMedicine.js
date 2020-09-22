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
import Menu from "../../../navbar/menu";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import chroma from "chroma-js";
import Select from "react-select";
import { connect } from "react-redux";
import * as globalActions from "../../../redux/actions/global";
import * as MedicineActions from "../../../redux/actions/medicines";

class AddMedicine extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         categories: this.props.categories,
         packages: this.props.packages,
         racks: this.props.racks,
         packgeTypes: this.props.packageType,
         result: "",
         SubItem: "",
         totalQuantity: "",
         itemInPack: "",
         formData: {},
      };
   }
   componentDidMount() {
      this.props.dispatch(globalActions.getCategory());
      this.props.dispatch(globalActions.getPackage());
      this.props.dispatch(globalActions.getRack());
      this.props.dispatch(globalActions.getPackageType());
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

      // PackageTypes
      if (
         nextProps.packageTypes &&
         nextProps.packageTypes.length &&
         nextProps.packageTypes !== prevState.packageTypes
      ) {
         const packageTypes = nextProps.packageTypes.map((item) => {
            return {
               label: item.packageTypeName,
               value: item._id,
            };
         });
         // console.log("--this.props.--", nextProps.packageType);
         Object.assign(updatedObject, { packageTypes: packageTypes });
      }
      // Racks
      if (
         nextProps.racks &&
         nextProps.racks.length &&
         nextProps.racks !== prevState.racks
      ) {
         const racks = nextProps.racks.map((item) => {
            return {
               label: item.rackName,
               value: item._id,
            };
         });
         Object.assign(updatedObject, { racks: racks });
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
            const ItemUnitCost =
               this.state.formData.MRPRate / this.state.formData.noOfItemPack;
            this.setState({
               result: ItemUnitCost,
            });
            const SubItemUnitCost =
               ItemUnitCost / this.state.formData.noOfSubItemPack;
            this.setState({
               SubItem: SubItemUnitCost,
            });
         }
      );
   };
   handleQuantity = (event) => {
      event.persist();
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [event.target.name]: event.target.value,
            },
         }),
         () => {
            const ItemInPack =
               this.state.formData.noOfItemPack *
               this.state.formData.noOfSubItemPack;
            console.log("itempack", ItemInPack);
            this.setState({
               itemInPack: ItemInPack,
            });
            const TotalQuantity = this.state.formData.quantity * ItemInPack;
            this.setState({
               totalQuantity: TotalQuantity,
            });
         }
      );
   };
   handleChange = (name, data) => {
      this.setState(
         (prevState) => ({
            formData: {
               ...prevState.formData,
               [name]: data.value,
            },
         }),
         () => console.log("dattattaa", data)
      );
      // ()=>console.log('---setState---',this.state.formData,name,data)
   };

   handleFormSubmit = () => {
      const obj = this.state.formData;
      obj.itemUnitCost = this.state.result;
      obj.subItemUnitCost = this.state.SubItem;
      obj.totalNoOfItem = this.state.itemInPack;
      obj.totalNoOfQuantity = this.state.totalQuantity;

      console.log("FORMSAATATA", obj);
      this.props
         .dispatch(MedicineActions.addMedicine(obj))
         .then((res) => {
            console.log("Medicine Data", res);
            if (res.data && res.data.client) {
               toast.success("Add Medicine Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
               //  setTimeout(() => {
               //    history.push("/cold-lead");
               //  }, 3000);
            } else {
               toast.error("Add Medicine not Successfully", {
                  position: toast.POSITION.BOTTOM_RIGHT,
               });
            }
         })
         .catch((error) => {
            // show error message in Toast
            toast.error("Add Medicine not Successfully", {
               position: toast.POSITION.BOTTOM_RIGHT,
            });
         });
   };
   render() {
      return (
         <Row>
            <Col sm="12">
               <Menu />
               <Card>
                  <CardHeader>
                     <CardTitle>
                        <h4 className="mb-0">Add Medicine</h4>
                     </CardTitle>
                     <CardBody
                        body
                        inverse
                        style={{
                           backgroundColor: "#7EBDE4",
                           borderColor: "#7EBDE4",
                        }}
                     >
                        <Form
                           onSubmit={(e) => {
                              e.preventDefault();
                              this.handleFormSubmit();
                           }}
                        >
                           <Col sm="12">
                              <Row>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Product Name</Label>
                                       <Input
                                          type="text"
                                          id="productName"
                                          name="productName"
                                          placeholder="Product Name"
                                          //required
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Category Name</Label>
                                       <Select
                                          isClearable={false}
                                          //styles={colourStyles}
                                          options={this.state.categories}
                                          className="React"
                                          classNamePrefix="select"
                                          id="categoryId"
                                          name="categoryId"
                                          //onChange={this.handleChange}
                                          onChange={(data) =>
                                             this.handleChange(
                                                "categoryId",
                                                data
                                             )
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="name">Package Name</Label>
                                       <Select
                                          isClearable={false}
                                          //styles={colourStyles}
                                          options={this.state.packages}
                                          className="React"
                                          classNamePrefix="select"
                                          id="packageId"
                                          name="packageId"
                                          //onChange={this.handleChange}
                                          onChange={(data) =>
                                             this.handleChange(
                                                "packageId",
                                                data
                                             )
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="number">Purchase Rate</Label>
                                       <Input
                                          //required
                                          type="number"
                                          id="purchaseRate"
                                          placeholder="Purchase Rate"
                                          name="purchaseRate"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="number">MRP Rate</Label>
                                       <Input
                                          required
                                          type="number"
                                          id="MRPRate"
                                          placeholder="MRP Rate"
                                          name="MRPRate"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="number">Sale Rate</Label>
                                       <Input
                                          //required
                                          type="number"
                                          id="saleRate"
                                          placeholder="Sale Rate"
                                          name="saleRate"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup>
                                       <Label for="number">
                                          No.of Item Pack
                                       </Label>
                                       <Input
                                          required
                                          type="number"
                                          id="noOfItemPack"
                                          placeholder="No.of Item Pack"
                                          name="noOfItemPack"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup style={{ paddingTop: "30px" }}>
                                       <Select
                                          isClearable={false}
                                          //styles={colourStyles}
                                          options={this.state.packageTypes}
                                          className="React"
                                          classNamePrefix="select"
                                          id="packageTypeId"
                                          name="packageTypeId"
                                          //onChange={this.handleChange}
                                          onChange={(data) =>
                                             this.handleChange(
                                                "packageTypeId",
                                                data
                                             )
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="4" sm="12">
                                    <FormGroup>
                                       <Label for="number">
                                          Item Unit Cost
                                       </Label>
                                       <Input
                                          disabled
                                          type="number"
                                          id="itemUnitCost"
                                          placeholder="Item Unit Cost"
                                          name="itemUnitCost"
                                          value={
                                             this.state.formData &&
                                             this.state.result
                                                ? this.state.result
                                                : ""
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup>
                                       <Label for="number">
                                          No.of SubItem Pack
                                       </Label>
                                       <Input
                                          required
                                          type="number"
                                          id="noOfSubItemPack"
                                          placeholder="No.of SubItem Pack"
                                          name="noOfSubItemPack"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>

                                 <Col md="3" sm="12">
                                    <FormGroup>
                                       <Label for="number">
                                          SubItem Unit Cost
                                       </Label>
                                       <Input
                                          disabled
                                          type="number"
                                          id="subItemUnitCost"
                                          placeholder="SubItem Unit Cost"
                                          name="subItemUnitCost"
                                          value={
                                             this.state.formData &&
                                             this.state.SubItem
                                                ? this.state.SubItem
                                                : ""
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup>
                                       <Label for="number">
                                          Manufecturing Date
                                       </Label>
                                       <Input
                                          //required
                                          type="date"
                                          id="manufecturingDate"
                                          placeholder="Manufecturing Date"
                                          name="manufecturingDate"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup>
                                       <Label for="number">Expire Date</Label>
                                       <Input
                                          //required
                                          type="date"
                                          id="expireDate"
                                          placeholder="Expire Date"
                                          name="expireDate"
                                          onChange={this.handleInput}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup>
                                       <Label for="number">Quantity</Label>
                                       <Input
                                          required
                                          type="number"
                                          id="quantity"
                                          placeholder="Quantity"
                                          name="quantity"
                                          onChange={this.handleQuantity}
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup style={{ paddingTop: "30px" }}>
                                       <Input
                                          disabled
                                          type="number"
                                          id="totalNoOfItem"
                                          placeholder="Total No.Of Item"
                                          name="totalNoOfItem"
                                          value={
                                             this.state.formData &&
                                             this.state.itemInPack
                                                ? this.state.itemInPack
                                                : ""
                                          }
                                       />
                                    </FormGroup>
                                 </Col>
                                 <Col md="3" sm="12">
                                    <FormGroup style={{ paddingTop: "30px" }}>
                                       <Input
                                          disabled
                                          type="number"
                                          id="totalNoOfQuantity"
                                          placeholder="Total No.Of Quantity"
                                          name="totalNoOfQuantity"
                                          value={
                                             this.state.formData &&
                                             this.state.totalQuantity
                                                ? this.state.totalQuantity
                                                : ""
                                          }
                                       />
                                    </FormGroup>
                                 </Col>

                                 <Col md="3" sm="12">
                                    <Card>
                                       <CardHeader>
                                          <CardTitle>
                                             <strong>Rack Entry</strong>
                                          </CardTitle>
                                          <CardBody>
                                             <Row>
                                                <Col>
                                                   <FormGroup>
                                                      <Label for="name">
                                                         Weight
                                                      </Label>
                                                      <Input
                                                         type="text"
                                                         id="weight"
                                                         name="weight"
                                                         placeholder="Weight"
                                                         //required
                                                         onChange={
                                                            this.handleInput
                                                         }
                                                      />
                                                   </FormGroup>
                                                   <FormGroup>
                                                      <Label for="name">
                                                         Rack Number
                                                      </Label>
                                                      <Select
                                                         isClearable={false}
                                                         //styles={colourStyles}
                                                         options={
                                                            this.state.racks
                                                         }
                                                         className="React"
                                                         classNamePrefix="select"
                                                         id="rackId"
                                                         name="rackId"
                                                         //onChange={this.handleChange}
                                                         onChange={(data) =>
                                                            this.handleChange(
                                                               "rackId",
                                                               data
                                                            )
                                                         }
                                                      />
                                                   </FormGroup>
                                                </Col>
                                             </Row>
                                          </CardBody>
                                       </CardHeader>
                                    </Card>
                                 </Col>
                                 <Col
                                    className="d-flex justify-content-center flex-wrap mt-2"
                                    sm="12"
                                 >
                                    <Button
                                       className="mr-1"
                                       color="primary"
                                       type="submit"
                                       //onClick={this.props.leadId}
                                    >
                                       Add Medicine
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
                        </Form>
                     </CardBody>
                  </CardHeader>
               </Card>
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
      racks: state.global.racks,
      packageTypes: state.global.packageTypes,
   };
};
export default connect(mapStateToProps)(AddMedicine);
