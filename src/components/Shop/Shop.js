import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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

    useEffect(()=>{
        const cartData = getShoppingCart();
        const savedCart = [];
        for(const id in cartData){
            const addedInCart = products.find(product=> product.id===id)
            if(addedInCart){
                const quantity = cartData[id];
                addedInCart.quantity=quantity;
                savedCart.push(addedInCart);
            }
           
        }
       
    },[products])
    const handleAddtoCart =(selectedProduct)=>{
        let newCart = [];
        const exists=cart.find(product =>product.id===selectedProduct.id);
        if (!exists){
            selectedProduct.quantity =1;
            newCart = [...cart, selectedProduct];
        }else{
            const rest = cart.filter(product=> product.id!==selectedProduct);
            exists.quantity = exists.quantity +1;
            newCart = [...rest,exists]
            
        }
        addToDb(selectedProduct.id);
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
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;