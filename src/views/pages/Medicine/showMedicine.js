import React from "react";
import { Card, CardBody, CardHeader, CardTitle, Input } from "reactstrap";

import DataTable from "react-data-table-component";
import { Star, Edit, Trash2, Search, Plus } from "react-feather";
//import * as globalActions from "../../redux/actions/posts/index";
import { connect } from "react-redux";
import moment from "moment";
//import { history } from "../../history";
import { toast } from "react-toastify";
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
class ShowMedicine extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         rowData: [],
         count: 0,

         columns: [
            {
               name: "Number",
               selector: "count",
               maxWidth: "150px",
            },
            {
               name: "Title",
               selector: "title",
               sortable: true,
               maxWidth: "200px",
            },
            {
               name: "Description",
               selector: "description",
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
            {
               name: "Edit",
               selector: "transactions",
               sortable: true,
               maxWidth: "200px",
               cell: (rowData) => {
                  return (
                     <div className="actions cursor-pointer">
                        <Edit
                           className="mr-50"
                           size={15}
                           //   onClick={() =>
                           //     history.push({
                           //       pathname: "/edit/post",
                           //       state: { postId: rowData ? rowData._id : "" },
                           //     })
                           //   }
                        />
                        {/* {console.log('---lead ID',rowData)} */}
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
   async componentDidMount() {
      // console.log('props',this.props)
      // this.props.dispatch(globalActions.getPost()).then((res) => {
      //   // console.log('get POST----',res)
      //   let rowData = res.data;
      //   rowData.map((item, index) => {
      //     //console.log(item,index)
      //     item.count = index + 1;
      //   });
      //   this.setState({ rowData });
      // });
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
      let { columns, value, filteredData } = this.state;
      return (
         <Card>
            <CardHeader>
               <CardTitle>Stock Report- All Products</CardTitle>
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
                  noHeader
                  //pagination
                  subHeader
                  // subHeaderComponent={
                  //   <CustomHeader value={value} handleFilter={this.handleFilter} />
                  // }
               />
            </CardBody>
         </Card>
      );
   }
}
const mapStateToProps = (state) => {
   return {};
};
export default connect(mapStateToProps)(ShowMedicine);
