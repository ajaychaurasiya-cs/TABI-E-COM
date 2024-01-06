import React from 'react';
import './home.css'
import Banner from '../../components/Banner/Banner';
import Products from '../products/Products';


const Home = () => {
    return (  
    <>
    
    <Banner />
    

   <div className="home-prod">
    <Products />
    
   </div>

    </>
    );
}
 
export default Home;