import axios from "../../../configs/axiosConfig";

//get Categories
export const getCategory = () => async (dispatch) => {
   const res = await axios.get("/category");
   if (res) {
      dispatch({ type: "CATEGORY", payload: res.data });
   }
   // console.log(res)
   return res;
};
//get packages
export const getPackage = () => async (dispatch) => {
   const res = await axios.get("/package");
   if (res) {
      dispatch({ type: "PACKAGE", payload: res.data });
   }
   return res;
   //console.log("leadstatus",res)
};
//get packagesType
export const getPackageType = () => async (dispatch) => {
   const res = await axios.get("/packageType");
   if (res) {
      dispatch({ type: "PACKAGETYPE", payload: res.data });
   }
   return res;
   //console.log("leadstatus",res)
};
//Get Racks
export const getRack = () => async (dispatch) => {
   const res = await axios.get("/rack");
   if (res) {
      dispatch({ type: "RACK", payload: res.data });
   }
   return res;
};
//get Companies
export const getCompanies = () => async (dispatch) => {
   const res = await axios.get("/companies");
   if (res) {
      dispatch({ type: "COMPANIES", payload: res.data });
   }
   // console.log(res)
   return res;
};
//get payments
export const getPayments = () => async (dispatch) => {
   const res = await axios.get("/payment");
   if (res) {
      dispatch({ type: "PAYMENTS", payload: res.data });
   }
   // console.log(res)
   return res;
};
