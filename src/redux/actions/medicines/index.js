import axios from "../../../configs/axiosConfig";

//Create Add Medicine
export const addMedicine = (data) => async (dispatch) => {
   // console.log("ADD LEAD",data)
   const res = await axios.post("create/medicine", data);
   // console.log('Res',res)
   return res;
};

//Get Medicine
export const getMedicine = () => async (dispatch) => {
   const res = await axios.get("/medicine");
   // console.log('Get Leads',res)
   if (res) {
      dispatch({ type: "GET_MEDICINE", payload: res.data });
   }
   // console.log('Response',res)
   return res;
};
//Get Updated Medicine
export const getUpdatedMedicine = () => async (dispatch) => {
   const res = await axios.get("/test/data");
   // console.log('Get Leads',res)
   // console.log('Response',res)
   return res;
};
//Get Category By ID
export const getMedicineById = (id) => async (dispatch) => {
   //console.log("LEADContact ID1",id)
   const res = await axios.get(`/get/medicine/${id}`);
   // console.log("--RES",res)
   return res;
};
//Update Medicine
export const updateMedicine = (id, data) => async (dispatch) => {
   // console.log("ADD LEAD", data);
   let obj = {
      medicineId: data._id,
      saleQuantity: data.saleQuantity,
      quantity: data.quantity,

      totalNoOfItem: data.totalNoOfItem,
      price: data.price,
   };
   // console.log("DATA", obj);
   const res = await axios.put(`edit/medicine/${id}`, obj);
   // console.log('Res',res)
   return res;
};
