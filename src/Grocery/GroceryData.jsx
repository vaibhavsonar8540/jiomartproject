import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Main.css';
import { CiHeart } from "react-icons/ci";
import { Link, useSearchParams } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import NavbarUp from '../Components/NavBar/NavbarUp';

const GroceryData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState(null);

  const [searchParam] = useSearchParams();

  const paramObj = {
    category: searchParam.getAll("category"),
    _sort: "price",
    _order: order,
    q: searchParam.get("q") || "", 
  };

  useEffect(() => {
    axios.get("http://localhost:3000/grocery", { params: paramObj })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch grocery items:", err);
        setError("Failed to load grocery items. Please try again later.");
        setLoading(false);
      });
  }, [searchParam, order]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;


  //cart
  const handleAddToCart = async (item) => {
    try {
      // First check if item already exists in cart
      const res = await axios.get(`http://localhost:3000/cart?id=${item.id}`);
      if (res.data.length === 0) {
        await axios.post("http://localhost:3000/cart", {
          ...item,
          quantity: 1
        });
        alert("Item added to cart!");
      } else {
        alert("Item already in cart!");
      }
    } catch (err) {
      console.error("Failed to add item to cart:", err);
      alert("Failed to add to cart. Try again.");
    }
  };

    //favourite
  const handleFav = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/favourite?id=${item.id}`);
      if (res.data.length === 0) {
        await axios.post("http://localhost:3000/favourite", item);
        alert("Item added to Favourite!");
      } else {
        alert("Item already in Favourite!");
      }
    } catch (err) {
      console.error("Failed to add item to Favourite:", err);
      alert("Failed to add to Favourite. Try again.");
    }
  };


  return (
    <div>
      <NavbarUp />
      <div style={{marginTop:"20px",position:"relative",left:"1150px"}}>
      <select onChange={(e) => {
  const value = e.target.value;
  if (value === "desc") setOrder("desc");
  else if (value === "asc") setOrder("asc");
  else setOrder(null); 
}} style={{padding:"5px 10px",borderRadius:'5px'}}>
  <option value="">Select sort option</option>
  <option value="desc">High to Low</option>
  <option value="asc">Low to High</option>
</select>
      </div>

      <div style={{ display: 'flex', width: '80%', margin: 'auto', marginTop: '20px' }}>
        
        {/* Sidebar */}
        <div style={{ width: '20%', paddingRight: '20px' ,marginTop:"20px"}}>
          <Sidebar />
        </div>

        {/* Product Grid */}
        <div style={{ width: '80%' }}>
          <div className="product-grid">
            {data.map((el) => (
              <div className="product-card" key={el.id}>
                <span className="smart-bazaar-badge">SMART BAZAAR</span>
                <span className="favorite-icon"><CiHeart onClick={() => handleFav(el)}/></span>
                <Link to={`/product/grocery/${el.id}`}><img src={el.image} alt={el.title} className="product-image" /></Link>
                <div className="product-title">{el.title}</div>
                <div className="price-section">
                  <span className="current-price">₹{el.price}</span>
                  <span className="original-price">₹{el.original_price}</span>
                  <span className="discount">{el.discount}</span>
                </div>
                <div className="quantity">{el.quantity || 'N/A'}</div>
                <button className="add-button" onClick={() => handleAddToCart(el)}>Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroceryData;
