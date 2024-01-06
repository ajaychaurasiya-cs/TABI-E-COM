import React, { useState} from "react";
import "./header.css";

import { TbSearch } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import Search from "../search/Search";
import Cart from "../cart/Cart";

import { useSelector } from 'react-redux';
import { selectAllCartItems } from '../../store/slices/cartSlice';



const Home = () => {

  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [ fix, setFix] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const navigate = useNavigate();


  //navbar scroll and animation
  const setfixed = ()=>{
    if(window.scrollY >= 100){
      setFix(true)
    }else{
      setFix(false)
    }
  } 

  window.addEventListener("scroll", setfixed)


  // show mobiel menu button
  const handleNavToggle = () => {
		return setShowMenu((prevVAlue) => {
			return !prevVAlue;
		});
	};
  

  // show cart notify
  const cartItems = useSelector(selectAllCartItems);
  const cartQuantity = cartItems.length;




  return (
    <div className="nav-container">
      <nav className={fix ? 'navbar-fixed' : 'navbar'}>
        <div className="logo" onClick={() => navigate("/")}>
          <h1>TABI.</h1>
        </div>

        <div className={`header-btn ${showMenu ? "show__nav" : "hide__nav"}`}>
          
          <div className="header-search">
            <TbSearch onClick={() =>{

               setShowSearch(true)
               setShowMenu(false)
               }} />
          </div>

          <div className="header-home" onClick={() =>{
            
             navigate("/")
             setShowMenu(false)
            }}
            >
            {" "}
            <h3>Home</h3>
          </div>

          <div className="header-product" onClick={() =>{

             navigate("/products")
             setShowMenu(false)
            }}>
            <h3>products</h3>
          </div>

          
          
          <div className="header-cart">
            
            <FaCartShopping onClick={() => {
              setShowCart(true)
              setShowMenu(false)
            }} />
            <strong className="cart-notify"> {cartQuantity? cartQuantity+".": ''}  </strong>
                            
          </div>
         


        </div>
        <span onClick={handleNavToggle} className="mobiel-menu">
					{showMenu ? <MdOutlineClose /> : <span><MdMenu /><strong className="cart-notify"> {cartQuantity? cartQuantity+".": ''} </strong> </span>  }
        </span>

        </nav>
        
        {showSearch && <Search setShowSearch={setShowSearch} />}
        {showCart && <Cart setShowCart={setShowCart} />}
    </div>
  );
};

export default Home;
