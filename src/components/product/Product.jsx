import React, {useState, useEffect} from 'react';
import './product.css'
import { useNavigate } from 'react-router-dom';

import Cart from "../cart/Cart"
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
// import { selectAllProducts } from '../features/productsSlice';


const Product = () => {

    const [showCart, setShowCart] = useState(false);

    const navigate = useNavigate()

    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    // const [loading, setLoading] = useState(false);
    let componentMounted = true;


    // console.log(data,'im prod');



    useEffect(() => {
        const getProducts = async () => {

        try {
            // setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products/")
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                // setLoading(false);
            }

            return () => {
            componentMounted = false;
            };

        }catch (error) {
            console.log(error);
        }
        };

        getProducts();
    }, []);


    //fillter Products

    const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  }



    //   ADD To CART

  const [isAdded, setIsAdded] = useState(false);


    const dispatch = useDispatch();


    const handleAddToCart = (product) => {

        dispatch(addToCart(product));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };







    return (
    <>
        <div className="cat-container">
          <button className="cat-title" onClick={() => setFilter(data)}>All</button>
          <button className="cat-title" onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className="cat-title" onClick={() => filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button className="cat-title" onClick={() => filterProduct("jewelery")}>Jewelery</button>
          <button className="cat-title" onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>


        {filter?.map((product) => {
          return (
            <div id={product.id} key={product.id} className="product-container">
                <div className="product-item" key={product.id}>
                    <div className='prod-img'>
                    <img
                    className="product-img"
                    src={product.image}
                    alt="Card" />
                    </div>
                </div>

                <div className="detail">
                    <h3 className="product-title">
                        {product.title.substring(0, 20)}...
                    </h3>
                    <p className="des">
                        {product.description.substring(0, 40)}...
                    </p>
                    <ul className="price-cont">
                        <li className="price">$ {product.price}</li>
                    </ul>
                </div>

                <div className="product-btn">
                    <span onClick={() => navigate('/singleproduct/' + product.id)}  className="product-buy-btn">
                     Buy Now
                    </span>
                    <span className={`product-buy-btn ${isAdded ? 'product-buy-btn' : ''}`} onClick={() => handleAddToCart(product)}> 
                    
                        {isAdded ? 'Added' : 'Add to cart'}
                    </span>
                    {showCart && <Cart setShowCart={setShowCart} />}
                </div>

                
            </div>

          );
        })}

    </> );
}
 
export default Product;



