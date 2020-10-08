import React from "react";
import {
   Card,
   CardBody,
   CardText,
   Media,
   Table,
   Button,
   Row,
   Col,
   Input,
} from "reactstrap";
import * as userAction from "../../../redux/actions/auth/registerActions";
import Menu from "../../../navbar/menu";
import * as globalActions from "../../../redux/actions/medicines/index";
import * as saleActions from "../../../redux/actions/sale/index";
import logo from "../../../assets/imgs/logo.png";
import GetSale from "./getSale";
import UpdateSaleMedicine from "./updateSaleMedicine";
import { connect } from "react-redux";
import moment from "moment";
import { Mail, Phone, FileText, Download } from "react-feather";

class PrintSale extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowData: [],
         updateData: [],
         userInfo: [],
         userdata: this.props.userInfo,
         date: new Date().toLocaleDateString(),
      };
   }

   async componentDidMount() {
      const search = this.props.location.search;
      const saleId = search.split("=")[1];
      // console.log("Spilit", saleId);
      this.props
         .dispatch(userAction.getUserId(this.state.userdata._id))
         .then((res) => {
            this.setState({ userInfo: res.data });
         });
      // setTimeout(() => {
      //    window.print();
      // }, 4000);
      this.props.dispatch(saleActions.getSaleById(saleId)).then((res) => {
         // console.log("get Salee dataaa----", res.data);

         let rowData = res.data.filter((item) => {
            if (item.userId === this.state.userInfo._id) {
               return item;
            }
         });

         this.setState({ rowData });
      });
      this.props.dispatch(globalActions.getUpdatedMedicine()).then((res) => {
         // console.log("get Salee dataaa----", res.data);

         let updateData = res.data.filter((item) => {
            if (item.userId === this.state.userInfo._id) {
               return item;
            }
         });

         this.setState({ updateData });
      });
   }
   render() {
      let { userInfo, rowData, updateData } = this.state;
      let finalTotal = rowData && rowData.map((i) => i.grandTotal);
      let BasePrice = rowData && rowData.map((i) => i.basePrice);
      let discount = rowData && rowData.map((i) => i.discount);

      return (
         <Row>
            <Col sm="12">
               <Menu />
               <Card
                  body
                  inverse
                  style={{ backgroundColor: "#333", borderColor: "#333" }}
               >
                  <Row>
                     <Col sm="12">
                        <div className="d-flex justify-content-center">
                           <h2>
                              {userInfo && userInfo.ownerOf
                                 ? userInfo.ownerOf
                                 : "Please Wait....."}
                           </h2>
                        </div>
                     </Col>
                     <Col sm="12">
                        <div className="d-flex justify-content-center">
                           <CardText className="text-muted">
                              {userInfo && userInfo.address
                                 ? userInfo.address
                                 : "Please Wait....."}
                           </CardText>
                        </div>
                     </Col>
                  </Row>
               </Card>
               <Row>
                  <Col className="invoice-wrapper" sm="12">
                     <Card className="invoice-page">
                        <CardBody>
                           <Row>
                              <Col md="6" sm="12" className="pt-1">
                                 <Media className="d-sm-flex d-block">
                                    <Media className="mt-md-1 mt-0" left>
                                       <Media
                                          className="rounded mr-2"
                                          object
                                          src={logo}
                                          alt="Generic placeholder image"
                                          height="112"
                                          width="112"
                                       />
                                    </Media>
                                 </Media>
                              </Col>
                              <Col md="6" sm="12" className="text-right">
                                 <h1>Invoice</h1>
                                 <div className="invoice-details mt-0">
                                    <h6>INVOICE NO.</h6>
                                    <p>001/2020</p>
                                    <h6 className="mt-2">INVOICE DATE</h6>
                                    <p>
                                       {" "}
                                       {moment(this.state.date).format(
                                          "DD-MMM-YYYY"
                                       )}
                                    </p>
                                 </div>
                              </Col>
                              <Col sm={{ size: 7, offset: 3 }}>
                                 <GetSale saleData={rowData} />
                              </Col>
                           </Row>

                           <hr
                              style={{
                                 color: "#000000",
                                 //backgroundColor: "#000000",
                                 height: 0.5,
                                 borderColor: "#000000",
                              }}
                           />
                           <div className="invoice-items-table">
                              <Col sm={{ size: 10, offset: 1 }}>
                                 <UpdateSaleMedicine
                                    medicineData={updateData}
                                 />
                              </Col>
                           </div>
                           <div className="invoice-total-table">
                              <Row>
                                 <Col
                                    sm={{ size: 7, offset: 7 }}
                                    //xs={{ size: 7, offset: 5 }}
                                 >
                                    <Table responsive borderless>
                                       <tbody>
                                          <tr>
                                             <th>SUBTOTAL</th>
                                             <td>
                                                {parseFloat(
                                                   BasePrice ? BasePrice : false
                                                ).toFixed(2)}{" "}
                                                &nbsp; INR
                                             </td>
                                          </tr>
                                          <tr>
                                             <th>DISCOUNT</th>
                                             <td>
                                                {" "}
                                                {parseFloat(
                                                   discount ? discount : false
                                                ).toFixed(2)}{" "}
                                                &nbsp; %
                                             </td>
                                          </tr>
                                          <tr>
                                             <th>TOTAL</th>
                                             <td>
                                                {" "}
                                                {parseFloat(
                                                   BasePrice >= 500
                                                      ? finalTotal
                                                      : BasePrice
                                                ).toFixed(2)}{" "}
                                                &nbsp; INR
                                             </td>
                                          </tr>
                                       </tbody>
                                    </Table>
                                 </Col>
                              </Row>
                           </div>
                           <hr
                              style={{
                                 color: "#000000",
                                 backgroundColor: "#000000",
                                 height: 0.5,
                                 borderColor: "#000000",
                              }}
                           />
                           <div className="invoice-items-table">
                              <Row>
                                 <Col
                                    className="d-flex justify-content-between flex-wrap mt-2 text-center"
                                    sm="12"
                                 >
                                    <span>
                                       "We hereby certify that my/our
                                       registaration certificate under the
                                       Gujarat value added Tax is in force on
                                       the data <br />
                                       which the sale of goods spcecified in
                                       this Tax Invoice has been made by me/in
                                       and the transation of sale covered <br />{" "}
                                       by this tax invoice has been effected by
                                       me/in and it shell be accounted for in
                                       the turnover of sales while filling of{" "}
                                       <br />
                                       return and the due tax, if any payable on
                                       the sale has been paid or shell be paid"
                                    </span>
                                    <strong className="text-left">
                                       Authorized Signature
                                    </strong>
                                 </Col>
                              </Row>
                           </div>
                        </CardBody>
                     </Card>
                  </Col>
               </Row>
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
export default connect(mapStateToProps)(PrintSale);
