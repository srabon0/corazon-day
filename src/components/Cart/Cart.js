import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div className='cart'>
            <h2>Selected items{cart.length}</h2>
        </div>
    );
};

export default Cart;