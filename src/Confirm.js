import React from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link, Navigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
// import { useNavigate } from 'react-router-dom';
import './Confirm.css';
import { useStateValue } from './StateProvider';

function Confirm() {
    // const navigate = useNavigate();
    const [{ user, basket }, dispatch] = useStateValue();
    return (

        <div className='confirm'>
            {/* <div className='confirm__head'>
                <Link to='/'>
                    <img
                        className="login__logo"
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Anazon_logo.svg.png'
                    />
                </Link>
                <p>Order Confirmation</p>
            </div> */}
            {/* <br/> */}
            <div className='confirm__details'>
                <h2>Hello {user?.email.split('@')[0]},</h2>
                <h2 className='confirm__h'>✓ Your Order is Confirmed!</h2>
                <h2>Thank you for shopping with us. Your order hasn't shipped yet, but We'll send you a confirmation when it does.</h2>
                <div className='details'>
            {/* {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))} */}
            </div>
                {/* <CurrencyFormat
                    renderText={(value) => (
                        <h3 className="order__total">Order Total: {value}</h3>
                    )}
                    decimalScale={2}
                    value={order.data.amount / 100}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                /> */}
                <Link to='/'>
                <button className='final_button'>Back to Home Page</button>
            </Link>
                 
                {/* <button className='final_button'>Back to Home Page</button> */}

            </div>

        </div>
    )
}

export default Confirm