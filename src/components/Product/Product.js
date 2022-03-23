import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,handleAddtoCart}) => {
    const {id, name,category,price,seller,img} = product
    return (
        <div className='product'>
            <img src={img} alt={id} />
            <div className='product-info'>
            <h3>{name}</h3>
            <h5>Price : <span>$</span> {price}</h5>
            <p>Seller : {seller} {category}</p>
            </div>
            <button onClick={ ()=>handleAddtoCart(product) } className='cart-btn' >Add to cart  <FontAwesomeIcon icon={faShoppingCart} /> </button>
        </div>
    );
};

export default Product;