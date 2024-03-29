// import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider'
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';


function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    // const [{ basket, user }, dispatch] = useStateValue();


    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('The secret is  -> ', clientSecret);

    const handleSubmit = async (event) => {
        //do all stripe stuff
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            // db
            //   .collection('users')
            //   .doc(user?.uid)
            //   .collection('orders')
            //   .doc(paymentIntent.id)
            //   .set({
            //       basket: basket,
            //       amount: paymentIntent.amount,
            //       created: paymentIntent.created
            //   })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })


            // navigate.replace('/orders')
            this.props.first.navigation.reset({
                index: 0,
                routes: [{ name: 'orders' }]
            })



        })


    }

    // const myFunction  = e => {
    //     e.alert("Successful !!!");
    // }
    // <div>
    //     <button onclick={myFunction}>Upload</button>
    // </div>
    const handleChange = event => {
        //listen for changes in the cardElement
        //and dispaly any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }
    const handlePayment = event => {
        alert("Your Order has been received, Please wait for payment confirmation");
        // navigate.replace('./confirm');
    }

    const handlebutton = e => {
        dispatch({
            type: 'EMPTY_BASKET'
        })

    }

    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )

                </h1>

                {/* Payment section -> delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>86 Lake Terrace Road</p>
                        <p>Ballygunj Kolkata</p>
                    </div>
                </div>


                {/* Payment section -> review items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                {/* Payment section -> Payment method */}
                <div className='payment__section'>

                    <div className='payment__title'>
                        <h3>Payment Method</h3>
                    </div>

                    <div className='payment__details'>

                        {/* Stripe portion */}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                {/* <button className='payment__button' onClick={e=> navigate('/confirm')}>Proceed to Buy({basket?.length} */}
                                {/* <button disabled={processing || disabled || succeeded} onClick={handlePayment,e=> navigate('/confirm')}> */}


                                {/* <button className='final__button' disabled={processing || disabled || succeeded} onClick={handlePayment}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button> */}

                                <button className='final__button' disabled={processing || disabled || succeeded} onClick={handlebutton}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>

                                {/* <button className='final__button' disabled={processing || disabled} onClick={e => navigate('/confirm')}>
                                    <span>{processing ? <p>Processing</p> : "Preceed to Confirmation Page"}</span>
                                </button> */}

                                <button className='final__button' disabled={disabled} onClick={handlePayment}>
                                    <span>Click to Confirm</span>
                                </button>

                                <button className='final__button' disabled={disabled | succeeded} onClick={ e => navigate('/confirm')}>
                                    <span>Proceed to Confirmation Page</span>
                                </button>
                            </div>

                            {/* Errors */}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Payment