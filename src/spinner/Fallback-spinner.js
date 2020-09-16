import React from "react";
import logo from "../assets/imgs/logo.png";
import "../assets/css/app-loader.css";
class SpinnerComponent extends React.Component {
   render() {
      return (
         <div className="fallback-spinner vh-100">
            <img className="fallback-logo" src={logo} alt="logo" />
            <div className="loading">
               <div className="effect-1 effects"></div>
               <div className="effect-2 effects"></div>
               <div className="effect-3 effects"></div>
            </div>
         </div>
      );
   }
}

export default SpinnerComponent;
