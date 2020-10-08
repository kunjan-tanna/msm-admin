import axios from "../../../configs/axiosConfig";

//Create Add Sale
export const addSale = (data) => async (dispatch) => {
   // console.log("ADD LEAD",data)
   const res = await axios.post("create/sale", data);
   if (res) {
      dispatch({ type: "ADD_SALE", payload: res.data });
   }
   // console.log('Res',res)
   return res;
};

//Get Medicine
export const getSale = () => async (dispatch) => {
   const res = await axios.get("/sale");
   // console.log('Get Leads',res)
   if (res) {
      dispatch({ type: "GET_SALE", payload: res.data });
   }
   // console.log('Response',res)
   return res;
};
//Get Category By ID
export const getSaleById = (id) => async (dispatch) => {
   //console.log("LEADContact ID1",id)
   const res = await axios.get(`/get/sale/${id}`);
   // console.log("--RES",res)
   return res;
};
// //Update Medicine
// export const updateMedicine = (id, data) => async (dispatch) => {
//    // console.log("ADD LEAD",data)
//    let obj = {
//       medicineId: data._id,
//       totalNoOfItem: data.totalNoOfItem,
//       totalNoOfQuantity: data.totalNoOfQuantity,
//    };
//    const res = await axios.put(`edit/medicine/${id}`, obj);
//    // console.log('Res',res)
//    return res;
// };
// //Delete the Category
// export const deleteCategory = (id) => async (dispatch) => {
//   // console.log('DELCONTACT ID',id)
//   const res = await axios.delete(`/delete/category/${id}`);
//   // console.log('RESPONSE',res)
//   return res;
// };
