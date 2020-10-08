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

import DataTable from "react-data-table-component";
import moment from "moment";
import * as userAction from "../../../redux/actions/auth/registerActions";
import * as saleActions from "../../../redux/actions/sale/index";
import { Star, Edit, Trash2, Search, Plus } from "react-feather";
import { connect } from "react-redux";

// const CustomHeader = (props) => {
//    return (
//       <div className="position-relative has-icon-left mb-1">
//          <Input value={props.value} onChange={(e) => props.handleFilter(e)} />
//          <div className="form-control-position">
//             <Search size="15" />
//          </div>
//       </div>
//    );
// };
const customStyles = {
   headCells: {
      style: {
         color: "red", // override the row height
      },
   },
};

class GetSale extends React.Component {
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
               maxWidth: "100px",
            },
            {
               name: "Customer Name",
               selector: "customerDetails._id",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  let abc =
                     rowData.customerDetails &&
                     rowData.customerDetails.map(
                        (i, index) => i.customerName[index]
                     );
                  // console.log("customerr", abc);
                  return rowData && abc ? abc : "";
               },
            },
            {
               name: "Sale Date",
               selector: "saleDate",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  return rowData &&
                     moment(rowData.saleDate).format("YYYY-MM-DD")
                     ? moment(rowData.saleDate).format("YYYY-MM-DD")
                     : "";
               },
            },
            {
               name: "Payment By:",
               selector: "paymentId.paymentBy",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  let abc =
                     rowData.paymentDetails &&
                     rowData.paymentDetails.map((i) => i.paymentBy);

                  return rowData && abc ? abc : "";
               },
            },

            {
               name: "Remarks",
               selector: "remarks",
               sortable: true,
               maxWidth: "200px",
            },
         ],

         filteredData: [],
         value: "",
      };
   }
   async componentWillReceiveProps(nextProps) {
      let rowData = nextProps.saleData;
      console.log("--this.props.--", rowData);
      rowData.map((item, index) => {
         //console.log(item,index)
         item.count = index + 1;
      });
      this.setState({ rowData });
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
      console.log("abc", data);
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
      console.log("rowdata", this.state.rowData);
      let { columns, userInfo } = this.state;
      return (
         <Row>
            <Col sm="12">
               <Card>
                  <CardBody className="rdt_Wrapper">
                     <DataTable
                        className="dataTable-custom"
                        //data={value.length ? filteredData : data}
                        data={this.state.rowData}
                        columns={columns}
                        customStyles={customStyles}
                        noHeader

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
   return {};
};
export default connect(mapStateToProps)(GetSale);
