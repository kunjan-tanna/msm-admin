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

class TempShowMedicine extends React.Component {
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
               maxWidth: "20px",
            },
            {
               name: "Product Name",
               selector: "productName",
               sortable: true,
               minWidth: "100px",
            },
            {
               name: "Category",
               selector: "categoryId.categotyName",
               sortable: true,
               minWidth: "100px",
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
               minWidth: "100px",
            },
            {
               name: "Unit",
               selector: "packageId.packageName",
               sortable: true,
               minWidth: "100px",
               cell: (rowData) => {
                  return rowData && rowData.packageId
                     ? rowData.packageId.packageName
                     : "";
               },
            },

            {
               name: "Stripe Quantity",
               selector: "totalNoOfItem",
               sortable: true,
               maxWidth: "100px",
            },
            {
               name: "Stripe Price",
               selector: "itemUnitCost",
               sortable: true,
               maxWidth: "100px",
            },

            {
               name: "Sale Rate",
               selector: "saleRate",
               sortable: true,
               minWidth: "100px",
            },
            {
               name: "Sale Quantity",
               selector: "saleQuantity",
               sortable: true,
               minWidth: "100px",
            },
            {
               name: "Price",
               selector: "price",
               sortable: true,
               minWidth: "100px",
            },

            {
               name: "Edit",
               selector: "transactions",
               sortable: true,
               minWidth: "100px",
               cell: (rowData) => {
                  return (
                     <div className="actions cursor-pointer">
                        <Edit
                           className="mr-50"
                           size={15}
                           onClick={() => this.props.handleTemp(rowData._id)}
                        />
                        {/* {console.log("---lead ID", rowData)} */}
                     </div>
                  );
               },
            },
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

   async componentWillReceiveProps(nextProps) {
      let rowData = nextProps.tempData;
      rowData.map((item, index) => {
         //console.log(item,index)
         item.count = index + 1;
      });
      this.setState({ rowData });
   }
   //
   //   this.props
   //      .dispatch(userAction.getUserId(this.state.userdata._id))
   //      .then((res) => {
   //         this.setState({ userInfo: res.data });
   //      });

   //   this.props.dispatch(globalActions.getMedicine()).then((res) => {
   //      console.log("get POST----", res);

   //      let rowData = res.data.filter((item) => {
   //         if (item.userId === this.state.userInfo._id) {
   //            return item;
   //         }
   //      });
   //      rowData.map((item, index) => {
   //         //console.log(item,index)
   //         item.count = index + 1;
   //      });
   //      this.setState({ rowData });
   //   });

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
      let { columns, userInfo } = this.state;
      return (
         <Row>
            <Col sm="12">
               <Card>
                  <CardHeader>
                     <CardTitle>
                        <strong>Stock Report- All Products</strong>
                     </CardTitle>
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
                        fixedHeaderScrollHeight="200px"
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
export default connect(mapStateToProps)(TempShowMedicine);
