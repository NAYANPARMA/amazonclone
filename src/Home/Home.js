import React, {useEffect} from 'react'
import Product from '../Product/Product'
import './Home.css'
import {Carousel} from "react-bootstrap";

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/skillsstore/2020/August/Medh_Alexa_GW_3000x1200._CB405585145_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg",
];

function Home() {
    return (
      <div className="home">
        <div className="home__container">
          <Carousel indicators={false} controls={false}>
            {images.map((image) => (
              <Carousel.Item interval={1000}>
                <img className="home__image" src={image} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="home__row">
            <Product
              id="123123123"
              title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses "
              price={290.99}
              image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
              rating={5}
            />
            <Product
              id="123123124"
              title="Samsung 6.5 kg Fully-Automatic Top Loading Washing Machine (WA65A4002VS/TL, IMPERIAL SILVER, Center Jet Technology)"
              price={19999.99}
              image="https://www.lg.com/in/images/washing-machines/md06182036/gallery/D01.jpg"
              rating={3}
            />
          </div>

          <div className="home__row">
            <Product
              id="123123125"
              title="Apple MacBook Air (13-inch, 8GB RAM, 128GB Storage, 1.8GHz Intel Core i5) - Silver"
              price={99999.99}
              image="https://cdn.vox-cdn.com/thumbor/3SDag4_szhZrsfE86H7OGXcesxs=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19395168/vpavic_191118_3800_0122.jpg"
              rating={5}
            />
            <Product
              id="4903850"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
              price={49999.99}
              rating={3}
              image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={9999.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
              id="3254354345"
              title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
              price={29999.99}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>

          <div className="home__row">
            <Product
              id="49538094"
              title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
              price={16000.0}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
            <Product
              id="90829332"
              title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
              price={49999.98}
              rating={4}
              image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
        </div>
      </div>
    );
}

export default Home
