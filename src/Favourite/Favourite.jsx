import axios from 'axios';
import { useEffect, useState } from 'react';
import './Fav.css';
import NavbarUp from '../Components/NavBar/NavbarUp';
import FooterMain from '../Components/Footer/Footer';

const Favourite = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/favourite") 
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch favourite items:", err);
      });
  }, []);

  const handleAddToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/cart?id=${item.id}`);
      if (res.data.length === 0) {
        await axios.post("http://localhost:3000/cart", {
          ...item,
          quantity: 1,
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

  const handleDelete = async (item) => {
    try {
      await axios.delete(`http://localhost:3000/favourite/${item.id}`);
      setData(prevData => prevData.filter(product => product.id !== item.id));
      alert("Item removed from favourites!");
    } catch (err) {
      console.error("Failed to remove item:", err);
      alert("Failed to remove item. Try again.");
    }
  };

  return (
    <div>
      <NavbarUp />
      <div style={{ width: '90%', margin: "auto" }}>
        <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
          {data.map((el) => (
            <div className="product-card" key={el.id}>
              <span className="smart-bazaar-badge">SMART BAZAAR</span>
                <img src={el.image} alt={el.title } className="product-image" />

              <div className="product-title">{el.title || el.name}</div>
              <div className="price-section">
                <span className="current-price">{el.price}</span>
                {el.original_price && (
                  <span className="original-price">{el.original_price || el.originalPrice}</span>
                )}
                {el.discount && (
                  <span className="discount">{el.discount}</span>
                )}
              </div>
              <div className="quantity">{el.quantity || 'N/A'}</div>
              <div className="button-group">
                <button className="add-button" onClick={() => handleAddToCart(el)}>Add</button>
                <button className="delete-btn" onClick={() => handleDelete(el)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterMain />
    </div>
  );
};

export default Favourite;
