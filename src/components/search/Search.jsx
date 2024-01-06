import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import "./search.css";
import { useNavigate } from "react-router-dom";


const Search = ({ setShowSearch }) => {

  const navigate = useNavigate()

  const [data, setData] = useState([]);

  
    
      
    const fetchData = async() => {
      try {
        
        const response = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((d) => setData(d));

      }catch (error) {
        console.log(error);
      }
    } 
      
  useEffect(() => {
    fetchData();
  }, []);

  

  const [query, setQuery] = useState("");

  const search_parameters = Object.keys(Object.assign({}, ...data));
  function search(data) {
    return data.filter((data) =>
      search_parameters.some((parameter) =>
        data[parameter].toString().toLowerCase().includes(query)
      )
    );
  }


  const Search = () =>{
    return(<>
    
    <center className="search-data">
          {search(data).slice(0, 10)?.map((product, id) => {
            return (
              <div id={product.id} className="box" key={product.id}>
                <div className="search-card" onClick={()=>{

                  navigate('/singleproduct/' + product.id)
                  
                  setShowSearch(false)
                }} >

                <div className="card2">
                  <div className="search-image">
                    <img className="search-img" src={product.image} alt="search-img" 
                    
                    />
                    
                  </div>
                  
                  <span className="category">{product.title.substring(0, 15)}... </span>

                  <div className="heading">
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
            onChange={(e) => setQuery(e.target.value)}
          />
          <span className="search-close"><MdClose
            onClick={() => setShowSearch(false)}
          /></span>
          
        </div>

        
        { query ? <Search /> : <Not />  }
        



      </div>





    </>
  );
};

export default Search;
