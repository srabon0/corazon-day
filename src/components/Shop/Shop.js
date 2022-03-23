import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data => setProducts(data))
    },[])
    const [cart,setCart] = useState([]);

    const handleAddtoCart =(product)=>{
        console.log('added ',product);
        const newCart = [...cart, product];
        setCart(newCart);
        
    }

    return (
        <div className='shop'>
            <div className="product-container">
            {products.map(product =><Product 
            product={product} 
            key={product.id}
            handleAddtoCart = {handleAddtoCart}
            ></Product>)}
            </div>
            <div className="cart-container">
                <p>Selected items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;