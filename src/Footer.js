import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');
</style>

function Footer() {
    // const ref = useRef();
    return (
        <div className='footer'>

            <div className='first__footer'>
                {/* <h3>first</h3> */}
                <span className='first__footerSpan'>Back to top</span>
            </div>

            <div className='second__footer'>
                <div className='footer__title'>
                    <p className='footer_title_id'>Get to know us</p>
                    <ul className='footer__ul'>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Amazon Cares</li>
                        <li>Press Releases</li>
                        <li>Gift a Smile</li>
                        <li>Amazon Science</li>
                    </ul>
                </div>
                <div className='footer__title'>
                    <p className='footer_title_id'>Contact Us</p>
                    <ul className='footer__ul' >
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
                <div className='footer__title'>
                    <p className='footer_title_id'>Make money with us</p>
                    <ul className='footer__ul'>
                        <li>Sell on Amazon</li>
                        <li>Amazon Global selling</li>
                        <li>Advertise Your Product</li>
                        <li>Become an Affiliate</li>
                        <li>Fulfilment by Amazon</li>
                        <li>Amazon Pay on Merchants</li>
                    </ul>
                </div>
                <div className='footer__title'>
                    <p className='footer_title_id'>Let Us Help You</p>
                    <ul className='footer__ul'>
                        <li>Your Account</li>
                        <li>Returns center</li>
                        <li>100% Purchase Protection</li>
                        <li>Amazon App Download</li>
                        <li>Amazon Assistant Download</li>
                        <li>Help</li>
                    </ul>
                </div>
            </div>

            <div className='third__footer'>
                {/* <h3>Amazon</h3> */}
                <p className='third__footer_span'>
                <Link to='/'>
                    <img
                        className="login__logo"
                        // src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Anazon_logo.svg.png'
                        src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
                    />
                </Link>
                </p>
            </div>

        </div>
    )
}

export default Footer