
import React, { useEffect, useState } from "react";
import './SingleProduct.css'
import {useParams, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";


import { FaStarHalfAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import Cart from "../../components/cart/Cart";





//singleProduct page

const SingelProduct = () => {

  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [showCart, setShowCart] = useState(false);


  const navigate = useNavigate();


  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
      const response2 = await fetch(
        `https://fakestoreapi.com/products/category/${data.category}`
      );
      const data2 = await response2.json();
      setRelatedProduct(data2);
    };
    getProduct();
  }, [id]);


   //   ADD To CART

   const [isAdded, setIsAdded] = useState(false);


   const dispatch = useDispatch();


   const handleAddToCart = (product) => {

      dispatch(addToCart(product));

      setIsAdded(true);

      setTimeout(() => {
          setIsAdded(false);
      }, 2000);
    };

    // related card

    const [isAdded2, setIsAdded2] = useState(false);

   const handleAddToCart2 = (item) => {

      dispatch(addToCart(item));

      setIsAdded2(true);

      setTimeout(() => {
          setIsAdded2(false);
      }, 2000);
    };

    return (  <>
      
        <div className="single-container">
          <div className="row">
            <div className="single-item">
              <img
                className="single-img"
                src={product.image}
                alt={product.title}
              />
              <div className="single-detail">

                <h4 className="single-category">{product.category}</h4>

                <h3 className="single-title">{product.title}</h3>

                <p className="single-rate">
                  <i className="fa fa-star"><FaStarHalfAlt /></i>
                  {product.rating && product.rating.rate}{" "}
                </p>

                <h3 className="single-price">$ {product.price}</h3>

                <p className="single-des">{product.description}</p>

                <div className="single-button">
                  <span className={`single-btn ${isAdded ? 'single-btn' : ''}`} onClick={() => handleAddToCart(product)}>
                    
                    {isAdded ? 'Added' : 'Add to cart'}
                  </span>

                  <span className="single-btn" onClick={() => setShowCart(true)}>
                    Go to Cart
                  </span>
                 
                </div>
                 {showCart && <Cart setShowCart={setShowCart}/>}
              </div>

            </div>
            
          </div>

          {/* -------------------- related product ------------------- */}

            <span className="related-head-line">
              RELATED PRODUCTS
              
            </span>
          <Marquee
              pauseOnHover={true}
              pauseOnClick={true}
              speed={50}

              className="marquee"
            >
             
            {relatedProduct?.map((item) => {
                    return (
                <div key={item.id} className="related-container">

                  <div className="related-item">

                    <div className="related-image">

                      <img
                      className="related-img"
                      src={item.image}
                      alt="Card"
                    />
                    </div>

                    <div className="related-detail">
                      <h5 className="related-title">
                        {item.title.substring(0, 20)}...
                      </h5>

                      <div className="related-button">

                        <span
                          onClick={() => navigate("/singleproduct/" + item.id)}
                          className="related-btn"
                        >
                          Buy Now
                        </span>

                        <span className={`related-btn ${isAdded2 ? 'related-btn' : ''}`} onClick={() => handleAddToCart2(item)}>

                          {isAdded2 ? 'Added' : 'Add to cart'}
                        </span>

                      </div>

                    </div>

                    
                  </div>
                  
                  
                </div>
              );
            })}


          </Marquee>


        </div>

</>);
}
 
export default SingelProduct;