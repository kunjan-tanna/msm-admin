import React from "react";
import Menu from "../../navbar/menu";
import img from "../../assets/imgs/dashboard.jpg";
class UserDashboard extends React.Component {
   render() {
      return (
         <div>
            <Menu />
            <img src={img} alt="fgImg" width="100%" />
         </div>
      );
   }
}

export default UserDashboard;
