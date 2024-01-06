import React,{ useEffect } from 'react';
import './cart.css'
import '../product/product.css'
// import "../search/search.css";
import { MdClose } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../store/slices/cartSlice';
import { selectAllCartItems } from '../../store/slices/cartSlice';

const Cart = ({setShowCart}) => {


    const cartItems = useSelector(selectAllCartItems);
    const dispatch = useDispatch();
  
    const handleRemoveFromCart = (itemId) => {
      dispatch(removeFromCart(itemId));
    };
  
    const handleUpdateQuantity = (itemId, quantity) => {
      dispatch(updateQuantity({ id: itemId, quantity }));
    };



    
    const cartQuantity = cartItems.length;
    
    const shipping = cartQuantity? 15 : 0;

    const cartTotal = cartItems.map(item =>item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);



    return (  <>
    
    

    <div className="cart-container">
        <div className="cart-header">
            <h1>Shoping Cart<small>({cartQuantity})</small></h1>

         <span className='cart-close' onClick={() => setShowCart(false)}>
            <MdClose  />
        </span>
        </div>

        <div className="cart-body">

            <div className='item-body'>

                <div className='list-item'>
                    <h4 className='list-name'>PRODUCTS LIST</h4>
                    {cartItems.map((item) => {
                        const {id, title, image, price} =item
                        return(
                        <div key={id}>
                            
                            <div >

                                <div className='list-item-detail'>
                                    <img className='list-img' src={image} alt="title" />

                                    <span className="list-title">
                                        <strong>{title.substring(0, 20)}... </strong>
                                    </span>
                                    
                                    <strong className='price'> ${price} </strong>
                                    <input className='list-input'
                                    type="number"
                                    min="0"
                                    autoFocus
                                    value={item.quantity}
                                    onChange={(e) =>{

                                        handleUpdateQuantity(item.id, parseInt(e.target.value, 10))
                                    } }
                                    />
                                    {/* ---------------- floating number {.toFixed(2)} show .00 number ------------------ */}
                                    <strong className='price'>{item.quantity} X ${(item.price*item.quantity).toFixed(2)}</strong>


                                    <span className='product-btn'> 
                                        <span className='product-buy-btn' onClick={() => handleRemoveFromCart(item.id)}>Remove</span>
                                    </span>
                                
                                </div>
                        
                             </div>
                    
                        </div>
                    )})}
            </div>

         </div>

            <div className="total">
                <div className="list-item">
                    <h4 className='list-name'>Order Summary</h4>
                    <div className="list-item-detail">
                        <span>Product ({cartQuantity})</span>
                        <strong className='price'>${cartTotal.toFixed(2)}</strong>
                    </div>

                    <div className="list-item-detail">
                        <h5>Shipping </h5>
                        <strong className='price'>${shipping}</strong>
                    </div>
                    
                    <span className="list-item-detail">
                    <span> Total amount</span>
                    <strong className='price'> ${(cartTotal + shipping).toFixed(2)} </strong>
                    </span>
                    
                    <div className='product-btn'>
                        <span className='product-buy-btn'>Go To Checkout</span>
                    </div>
                    
                </div>
            </div>

        </div>
       
    </div>
    
    </>);
}
 
export default Cart;