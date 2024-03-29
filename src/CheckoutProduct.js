import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from './StateProvider';

export default function CheckoutProduct({id, image, title, price, rating}) {
    const[{basket}, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,

        })

    }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image}/>
        <div className='chekoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                   .fill()
                //the underscore here is just a basic tool used to not care about it
                   .map((_, i) => (
                       <p>⭐</p>
                ))}
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>

        </div>
    </div>
  )
}
