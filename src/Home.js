import React from 'react';
import './App.css';
import './Home.css';
import Product from './Product';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';



function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
        {/* <img className='home__image'
          src="https://m.media-amazon.com/images/I/61aUfpZteZL._SX3000_.jpg"
          alt=""
        /> */}
        <ImageSlider slides={SliderData} />;
        </div>
        <div className='home__row'>
        <Product id="19877632"
        title="Apple Watch Series 7 (GPS, 41mm) - Blue Aluminium Case with Abyss Blue Sport Band - Regular" 
        price="41,481" image="https://m.media-amazon.com/images/I/71GIYSZpW+L._SL1500_.jpg" 
        rating={5}/>
         

        <Product id="12765400"
        title="OnePlus 9 Pro 5G(Morning Mist, 12GB RAM, 256GB Storage)" 
        price="69,900" image="https://m.media-amazon.com/images/I/61LvUvbZGlL._SX569_.jpg" 
        rating={4}/>
        {/* here we see that giving 4.5 as rating will disrupt the entire code */}
        <Product id="12765987"
        title="Kindle Paperwhite (10th gen) - with Built-in Light, Waterproof, 8 GB, WiFi" 
        price="10,999" image="https://m.media-amazon.com/images/I/61Iv2mzVdZL._SL1000_.jpg" 
        rating={5}/>

       <Product id="32185987"
        title="Marshall Emberton 20 Watt Wireless Bluetooth Portable Speaker (Black and Brass)" 
        price="14,999" image="https://m.media-amazon.com/images/I/71ncBz8OFHS._SL1500_.jpg" 
        rating={4}/>

        </div>
        <div className='home__row'>
        <Product id="19087632"
        title="Fujifilm Instax Mini 90 Neo Classic Instant Film Camera" 
        price="8,898" image="https://m.media-amazon.com/images/I/71LTojwvtmL._SX466_.jpg" 
        rating={5}/>

        <Product id="19087132"
        title="Urban Born Cast Iron Metal Flower vase " 
        price="499" image="https://m.media-amazon.com/images/I/71b1xh2Dm8L._SX569_.jpg" 
        rating={4}/>

        <Product id="88087132"
        title="NEW LEAF 220 GSM All-Season Printed Super Soft Light Weight Cotton Comforter " 
        price="1,399" image="https://m.media-amazon.com/images/I/61GZfow+IMS._SL1023_.jpg" 
        rating={3}/>

        <Product id="12321341"
        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
        price="576" image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" 
        rating={5}/>

        </div>
        <div className='home__row'>
        <Product id="12329081"
        title="The Body Shop Born Lippy Pot Lip Balm, Strawberry, 10ml" 
        price="236" image="https://m.media-amazon.com/images/I/81-H4Ii7Y6L._SL1300_.jpg" 
        rating={5}/>

        <Product id="12329045"
        title="Nike Men's Jordan Zoom '92 Sneaker" 
        price="12,999" image="https://m.media-amazon.com/images/I/71kt8HW+S6L._UL1500_.jpg" 
        rating={4}/>
            
        </div>
        <div className='home__row'>
        <Product id="12129045"
        title="Fossil Nate Chronograph Grey Dial Men's Watch - JR1437" 
        price="11,295" image="https://m.media-amazon.com/images/I/61oOUoZQOnL._UL1000_.jpg" 
        rating={4}/>

        <Product id="92129045"
        title="Bose Sport Truly Wireless Bluetooth in Ear Earphone with Mic (Baltic Blue)" 
        price="17,990" image="https://m.media-amazon.com/images/I/51Q3-+Br7KS._SL1500_.jpg" 
        rating={4}/>

        <Product id="87129045"
        title="SaintG Womens Brown Woven Leather Handcrafted Heeled Ankle Boots" 
        price="5,900" image="https://m.media-amazon.com/images/I/61ajqkjzNZL._UL1024_.jpg" 
        rating={4}/>
        </div>
        <div className='home__row'>
        <Product id="87126945"
        title="Pratibha Creation Buddha Showpiece" 
        price="598" image="https://m.media-amazon.com/images/I/81Q4BlToTgL._SL1500_.jpg" 
        rating={5}/>

        <Product id="88826945"
        title="Abana Homes® Flowering Carmona Indoor Bonsai Live Plants" 
        price="1,234" image="https://m.media-amazon.com/images/I/51UKeGR1WPS.jpg" 
        rating={4}/> 

        <Product id="89026945"
        title="Lana Paws Adjustable Tuxedo Dog Bandana/Scarf" 
        price={440} image="https://m.media-amazon.com/images/I/41Hxb--bMTL._SX466_.jpg" 
        rating={3}/>

        <Product id="97026945"
        title="Handicrafts Paradise Wrought Iron Showpiece Figurine Playing Dandia" 
        price="1,625" image="https://m.media-amazon.com/images/I/71PuCuCD3-L._SL1100_.jpg" 
        rating={5}/>   
        </div>
        <div className='home__row'>
        <Product id="90026945"
        title="Good Hope - Pink Floyd Framed Poster" 
        price="350" image="https://m.media-amazon.com/images/I/71lqg4p4UkL._SL1500_.jpg" 
        rating={4}/>

        <Product id="90028005"
        title="Grab Classy Cotton Dream Catcher" 
        price={440} image="https://m.media-amazon.com/images/I/81hwc7E6BDL._SL1500_.jpg" 
        rating={3}/>

        <Product id="90198005"
        title="Neevaza Mattelic Large Balloon for Birthday/Anniversay decoration" 
        price={200} image="https://m.media-amazon.com/images/I/614lvYOtuAL._SL1084_.jpg" 
        rating={4}/>  

        <Product id="90029005"
        title="Titan Brown Coloured Wall Clock with Cream dial" 
        price="2,495" image="https://m.media-amazon.com/images/I/71PXNEq-ClL._SL1500_.jpg" 
        rating={4}/>
        </div>

        <div className='home__row'>
        <Product id="90669005"
        title="PHILIPS Brilliance 124.46 cm (49-inch) Curved SuperWide Dual QHD LCD Display" 
        price="1,10,949" image="https://m.media-amazon.com/images/I/61QsG3AkxaL._SL1181_.jpg" 
        rating={4}/>

        <Product id="99969005"
        title="RockJam RJ561 61-Keys Electronic Keyboard SuperKit (Black)" 
        price="8,479" image="https://m.media-amazon.com/images/I/71nSQ71Z-SL._SL1374_.jpg" 
        rating={4}/>

        </div>
    </div>
  )
}

export default Home