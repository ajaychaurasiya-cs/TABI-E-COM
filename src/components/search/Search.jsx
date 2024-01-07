import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./search.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";



const Search = ({ setShowSearch }) => {

  const navigate = useNavigate()

  const [apiData, setApiData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')    
      .then(response => {
        setApiData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

    // Filter the data based on the search query
    const filteredData = apiData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );


  const Search = () =>{
    return(<>
    
    <center className="search-data">
          {filteredData.slice(0, 10)?.map((product, id) => {
            return (
              <div id={product.id} className="box" key={product.id}>

                <div className="search-card" onClick={()=>{

                  navigate('/singleproduct/' + product.id)
                  
                  setShowSearch(false)
                 }} >

                  <div className="card2">
                    <div className="search-image">
                      <img className="search-img" src={product.image} alt="search-img" />
                      
                    </div>

                    <span className="heading">{product.title.substring(0, 15)}... </span>

                    <div className="category">
                      {/* {product.description.substring(0, 20)}... */}
                      <div className="author">$ {product.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </center>
    
    </>)
  }


  const Not = () => {
    return (  
      <>
      </>
    );
  }
   
  


  return (
    <>
      <div className="search-container">
        <div className="search-form">
          <input
            className="search-input"
            type="text"
            autoFocus
            placeholder="Search for products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-close"><MdClose
            onClick={() => setShowSearch(false)}
          /></span>
          
        </div>
        
        { searchQuery? <Search /> : <Not />  }

      </div>

    </>
  );
};

export default Search;
