import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


export default function Slider() {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100 " style={{height:"500px"}}
        src="https://img.freepik.com/premium-photo/shopping-cart-moves-speed-light-backdrop-with-balloons-gift-boxes-all-live-futuristic-atmosphere-3d-render_172660-11.jpg?size=626&ext=jpg&ga=GA1.2.1457056407.1673958346"
        alt="First slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 " style={{height:"500px"}}
        src="https://img.freepik.com/free-vector/application-smartphone-mobile-computer-payments-online-transaction-woman-man-characters-shopping-online-process-mobile-device-vecter-cartoon-illustration-isometric-design_1150-59287.jpg?size=626&ext=jpg&ga=GA1.2.1457056407.1673958346"
        alt="Second slide"
      />

     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 " style={{height:"500px"}}
        src="https://img.freepik.com/premium-photo/omni-channel-technology-online-retail-business_31965-3010.jpg?size=626&ext=jpg&ga=GA1.2.1457056407.1673958346"
        alt="Third slide"
      />

     
    </Carousel.Item>
  </Carousel>
  )
}
