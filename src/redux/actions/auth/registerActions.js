import axios from "../../../configs/axiosConfig";

//Create Add User
export const RegUsers = (data) => async (dispatch) => {
   // console.log("ADD USER",data)
   let obj = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      ownerOf: data.ownerOf,
      address: data.address,
      mobile: data.mobile,
   };
   const res = await axios.post("create/users", obj);
   // console.log("ADD USER=======",res)
   return res;
};

//Get User By ID
export const getUserId = (id) => async (dispatch) => {
   //console.log("LEADContact ID1",id)
   const res = await axios.get(`/get/users/${id}`);
   // console.log("--RES",res)
   return res;
};

//Update Add User
export const UpdateUsers = (id, data) => async (dispatch) => {
   let obj = {
      userId: data._id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      ownerOf: data.ownerOf,
      address: data.address,
      mobile: data.mobile,
      status: data.status,
   };
   console.log("ADD USER", data);
   const res = await axios.put(`/edit/users/${id}`, obj);
   // console.log("ADD USER=======",res)
   return res;
};
