import React from "react";
import {
   Card,
   CardBody,
   CardText,
   CardHeader,
   CardTitle,
   Input,
   Row,
   Col,
} from "reactstrap";
import Menu from "../../../navbar/menu";
import DataTable from "react-data-table-component";
import { Star, Edit, Trash2, Search, Plus } from "react-feather";
import * as globalActions from "../../../redux/actions/medicines/index";
import { connect } from "react-redux";
import moment from "moment";
//import { history } from "../../history";
import { toast } from "react-toastify";
import * as userAction from "../../../redux/actions/auth/registerActions";
import "react-toastify/dist/ReactToastify.css";

const CustomHeader = (props) => {
   return (
      <div className="position-relative has-icon-left mb-1">
         <Input value={props.value} onChange={(e) => props.handleFilter(e)} />
         <div className="form-control-position">
            <Search size="15" />
         </div>
      </div>
   );
};
const customStyles = {
   headCells: {
      style: {
         color: "red", // override the row height
      },
   },
};
class ShowMedicine extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowData: [],
         userInfo: [],
         userdata: this.props.userInfo,
         count: 0,

         columns: [
            {
               name: "Number",
               selector: "count",
               maxWidth: "10px",
            },
            {
               name: "Product Name",
               selector: "productName",
               sortable: true,
               maxWidth: "250px",
            },
            {
               name: "Category",
               selector: "categoryId.categotyName",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  return rowData && rowData.categoryId
                     ? rowData.categoryId.categotyName
                     : "";
               },
            },
            {
               name: "Quantity",
               selector: "quantity",
               sortable: true,
               maxWidth: "200px",
            },
            {
               name: "Unit",
               selector: "packageId.packageName",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  return rowData && rowData.packageId
                     ? rowData.packageId.packageName
                     : "";
               },
            },
            {
               name: "Items",
               selector: "totalNoOfItem",
               sortable: true,
               maxWidth: "200px",
            },
            {
               name: "Unit",
               selector: "packageTypeId.packageTypeName",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  return rowData && rowData.packageTypeId
                     ? rowData.packageTypeId.packageTypeName
                     : "";
               },
            },
            {
               name: "SubItems",
               selector: "totalNoOfQuantity",
               sortable: true,
               maxWidth: "200px",
            },
            {
               name: "MRP Rate",
               selector: "MRPRate",
               sortable: true,
               maxWidth: "200px",
            },
            {
               name: "Purchase Rate",
               selector: "purchaseRate",
               sortable: true,
               maxWidth: "200px",
            },
            {
               name: "Sale Rate",
               selector: "saleRate",
               sortable: true,
               maxWidth: "200px",
            },
            // {
            //   name: "Category",
            //   selector: "categoryId",
            //   sortable: true,
            //   minWidth: "200px",
            //   // cell : rowData =>{
            //   //   return rowData && rowData.categoryId
            //   //   ?`${rowData.categoryName}`
            //   //   :''
            //   // }
            // },
            {
               name: "Date Created",
               selector: "createdAt",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  // console.log('ksdjflksnf',rowData)
                  return rowData
                     ? `${moment(rowData.createdAt).format("MM-DD-YYYY")}`
                     : "";
               },
            },
            // {
            //    name: "Edit",
            //    selector: "transactions",
            //    sortable: true,
            //    maxWidth: "200px",
            //    cell: (rowData) => {
            //       return (
            //          <div className="actions cursor-pointer">
            //             <Edit
            //                className="mr-50"
            //                size={15}
            //                //   onClick={() =>
            //                //     history.push({
            //                //       pathname: "/edit/post",
            //                //       state: { postId: rowData ? rowData._id : "" },
            //                //     })
            //                //   }
            //             />
            //             {/* {console.log('---lead ID',rowData)} */}
            //          </div>
            //       );
            //    },
            // },
            // {
            //   name: "Delete",
            //   selector: "transactions",
            //   sortable: true,
            //   cell: rowData => {
            //     return (
            //       <div className="actions cursor-pointer">
            //         <Trash2
            //             size={15}
            //             onClick={()=>{
            //               this.onChange(rowData._id)
            //             }}
            //           />
            //         </div>
            //     )
            //   }
            // },
         ],

         filteredData: [],
         value: "",
      };
   }
   async componentDidMount() {
      this.props
         .dispatch(userAction.getUserId(this.state.userdata._id))
         .then((res) => {
            this.setState({ userInfo: res.data });
         });

      this.props.dispatch(globalActions.getMedicine()).then((res) => {
         let rowData = res.data.filter((item) => {
            if (item.userId === this.state.userInfo._id) {
               return item;
            }
         });
         rowData.map((item, index) => {
            //console.log(item,index)
            item.count = index + 1;
         });
         this.setState({ rowData });
      });
   }
   // //delete data
   // onChange=(id)=>{
   //   // console.log('LEADID',id)
   //   this.props.dispatch(globalActions.deletePost(id)).then((res)=>{
   //     console.log('RESPONSE-----',res)
   //     let rowData = res.data
   //     rowData.map((item,index)=>{
   //       // console.log(item,index)
   //       item.count=index+1
   //     })
   //   this.setState({ rowData })
   //   })
   // }

   handleFilter = (e) => {
      let value = e.target.value;
      let data = this.state.rowData;

      let filteredData = this.state.filteredData;
      this.setState({ value });

      if (value.length) {
         filteredData = data.filter((item) => {
            let startsWithCondition = item.rowData
               .toLowerCase()
               .startsWith(value.toLowerCase());
            let includesCondition = item.rowData
               .toLowerCase()
               .includes(value.toLowerCase());
            if (startsWithCondition) {
               return startsWithCondition;
            } else if (!startsWithCondition && includesCondition) {
               return includesCondition;
            } else return null;
         });
         this.setState({ filteredData });
      }
   };
   render() {
      let { columns, userInfo } = this.state;
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
               <Card>
                  <CardHeader>
                     <CardTitle>
                        <strong>Stock Report- All Products</strong>
                     </CardTitle>
                     {/* <div className="d-flex flex-wrap flot-right">
           <Button.Ripple
             color="primary"
             outline
             onClick={() => this.props.history.push("/add/post")}
           >
             Add Post
           </Button.Ripple>
         </div> */}
                  </CardHeader>
                  <CardBody className="rdt_Wrapper">
                     <DataTable
                        className="dataTable-custom"
                        //data={value.length ? filteredData : data}
                        data={this.state.rowData}
                        columns={columns}
                        customStyles={customStyles}
                        noHeader
                        fixedHeader
                        fixedHeaderScrollHeight="300px"
                        // subHeaderComponent={
                        //    <CustomHeader
                        //       value={value}
                        //       handleFilter={this.handleFilter}
                        //    />
                        // }
                     />
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
export default connect(mapStateToProps)(ShowMedicine);
