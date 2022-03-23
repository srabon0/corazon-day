import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total= 0;
    let shipping = 0;
    for(const product of cart){
        total += product.price
        shipping+=product.shipping
    }
    let tax = parseFloat((total * 0.1).toFixed(2))
    let grandTotal = total+shipping+tax;
    return (
        <div className='cart'>
           <div className='text'>
           <h2>Order summary</h2>
            <p>Selected items :  {cart.length}</p>
            <p>Total price :$ {total} </p>
            <p>Total Shipping : $ {shipping} </p>
            <p>Tax : $ {tax}</p>
            <h5>Grand Total : ${grandTotal} </h5>
           </div>
        </div>
    );
};

export default Cart;