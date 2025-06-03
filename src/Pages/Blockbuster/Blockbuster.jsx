import axios from 'axios';
import { useEffect, useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { Link, useSearchParams } from 'react-router-dom';
import NavbarUp from '../../Components/NavBar/NavbarUp';
import FooterMain from '../../Components/Footer/Footer';
import './Blockbuster.css'

const Blockbuster = () => {
  const [data, setData] = useState([]);
   const [searchParam] = useSearchParams();
    const [order, setOrder] = useState(null);

  const paramObj = {
    category: searchParam.getAll("category"),
     _sort: "price",
    _order: order,
    q: searchParam.get("q") || "", 
  };


  useEffect(() => {
    axios.get("http://localhost:3000/Blockbuster", { params: paramObj }) 
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch lifestyle items:", err);
      });
  }, [searchParam,order]);

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

        <div className='container'>
            <div style={{marginTop:"20px",float:"right",marginRight:"150px"}}>
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
        <div className='pro-main'>
          <h1 style={{marginLeft:"30px"}}>Blockbuster Deals</h1>
          <div className="product-grid" >
            {data.map((el) => (
              <div className="product-card" key={el.id}>
                <span className="favorite-icon"><CiHeart onClick={() => handleFav(el)}/></span>
                <Link to={`/product/Blockbuster/${el.id}`}>
                  <img src={el.image} alt={el.title} className="product-image" style={{width:"180px",margin:"auto",display:"flex"}} />
                </Link>
                <div className="product-title">{el.title}</div>
                <div className="price-section">
                  <span className="current-price">{el.price}</span>
                  {el.original_price && (
                    <span className="original-price">{el.original_price}</span>
                  )}
                  {el.discount && (
                    <span className="discount">{el.discount}</span>
                  )}
                </div>
                <button className="add-button" onClick={() => handleAddToCart(el)} style={{height:"40px"}}>Add</button>
              </div>
            ))}
          </div>
        </div>
        </div>
        <FooterMain/>
      </div>
  );
};

export default Blockbuster;
