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
