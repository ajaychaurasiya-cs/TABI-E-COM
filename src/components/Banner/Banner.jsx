import "./banner.css";
import {useNavigate } from "react-router-dom";



const Banner = () => {
    const navigate = useNavigate();
  return (
    <>
      
        <div className="banner ">

          <div className="banner-text">
            <div className="banner-text-item">
                <h2 className="trending">Trending Item</h2>
                <h1 className="latest">LATEST FASHION</h1> 
                <strong className="banner-offer">Now Up To 60% Off</strong>
            </div>
          <strong  className="banner-shop-btn" onClick={() => navigate('/product')}>SHOP NOW</strong>
          </div>

          <img className="banner-img" src="./assets/banner2.png" alt="banner" />
        </div>
      
      {/* <div className='banner'> <img src="./assets/banner1.png"  alt="banner" /></div> */}
    </>
  );
};

export default Banner;
