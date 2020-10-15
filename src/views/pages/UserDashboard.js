import React from "react";
import Menu from "../../navbar/menu";
//import img from "../../assets/imgs/dashboard.jpg";
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap"
import Swiper from "react-id-swiper"
import "swiper/css/swiper.css"
//import "../../assets/scss/plugins/extensions/swiper.scss"
import img1 from "../../assets/imgs/istockphoto-897885148-1024x1024.jpg"
import img2 from "../../assets/imgs/istockphoto-1166426145-1024x1024.jpg"
import img3 from "../../assets/imgs/istockphoto-1059959984-1024x1024.jpg"
import img4 from "../../assets/imgs/istockphoto-1165053751-1024x1024.jpg"

const params = {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: true
   },
   // pagination: {
   //    el: ".swiper-pagination",
   //    clickable: true
   // },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
   }
}

class UserDashboard extends React.Component {
   render() {
      return (
         <Card>
            <Menu />

            <CardBody>
               <Swiper {...params}>
                  <div>
                     <img src={img1} alt="swiper 1" className="img-fluid" width="100%" />
                  </div>
                  <div>
                     <img src={img2} alt="swiper 2" className="img-fluid" width="100%" />
                  </div>
                  <div>
                     <img src={img3} alt="swiper 3" className="img-fluid" width="100%" />
                  </div>
                  <div>
                     <img src={img4} alt="swiper 4" className="img-fluid" width="100%" />
                  </div>

               </Swiper>
            </CardBody>
         </Card>
      )
   }
}
export default UserDashboard
