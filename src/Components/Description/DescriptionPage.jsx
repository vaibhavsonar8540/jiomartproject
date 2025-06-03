import React, { useEffect, useState } from 'react';
import './Description.css';
import NavbarUp from '../NavBar/NavbarUp';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const colorOptions = {
  blue: 'https://assets.ajio.com/medias/sys_master/root/20220301/hT9D/621e47c4aeb26921af3ed8e0/-1117Wx1400H-461250993-blue-MODEL.jpg',
  pink: 'https://assets.ajio.com/medias/sys_master/root/20230613/zW9Z/64886e4feebac147fc38e9df/-1117Wx1400H-466313345-pink-MODEL.jpg',
  yellow: 'https://assets.ajio.com/medias/sys_master/root/20230613/rHZC/64886b3d42f9e729d70d2e93/-1117Wx1400H-466313345-yellow-MODEL.jpg',
};

const Description = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('blue');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

   const { category, id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${category}/${id}`);
        setProduct(response.data);
      } catch (err) {
        console.error("Failed to fetch product detail", err);
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [category, id]);

  const handleAddToCart = async (item) => {
    try {
      const res = await axios.get(`http://localhost:3000/cart?id=${item.id}`);
      if (res.data.length === 0) {
        await axios.post("http://localhost:3000/cart", { ...item, quantity: 1 });
        alert("Item added to cart!");
      } else {
        alert("Item already in cart!");
      }
    } catch (err) {
      alert("Failed to add to cart.");
    }
  };

  const handleBuyNow = async (item) => {
    await handleAddToCart(item);
    navigate('/cart');
  };

  if (loading) return <div className="p-4">Loading...</div>;
  if (error) return <div className="p-4">{error}</div>;
  if (!product) return <div className="p-4">No product found</div>;
  return (
    <div>
      <NavbarUp />
      <div className="description-container">
        <div className="left-section">
          <img
            src={product.image}
            alt="Product"
            className="product-image"
            style={{width:"250px",height:"300px"}}
          />
        </div>

        <div className="right-section">
          <h2 className="product-name">{product.title || product.name}</h2>
          <div className="rating">133 Ratings</div>
          <div className="price">
            {product.price} <span className="original-price"> {product.originalPrice ||product.original_price || "NaN"}</span>{' '}
            <span className="discount">{product.discount || "NaN"}</span>
          </div>

          <div className="color-section">
            <h4>Colour</h4>
            <div className="color-options">
              {Object.keys(colorOptions).map((color) => (
                <div
                  key={color}
                  className={`color-circle ${color} ${selectedColor === color ? 'selected' : ''}`}
                  onClick={() => handleColorClick(color)}
                />
              ))}
            </div>
          </div>

          <div className="size-section">
            <h4>Size</h4>
            <div className="size-options">
              {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                <div
                  key={size}
                  className={`size-box ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="offers">
            <h4>Offers (13)</h4>
            <ul>
              <li>Bank Offer: 10% off on ICICI Bank Cards</li>
              <li>Combo Offer: Buy 2 items, get 5% off</li>
              <li>Cashback: 5% cashback via PayTM</li>
            </ul>
          </div>

          <div className="delivery-info">
            <h4>Deliver to</h4>
            <p>400001 Mumbai • Delivery by 20th May</p>
          </div>

          <div className="seller">
            Sold by: <strong>DIVYA DEEP GARMENTS</strong>
          </div>

          <div className="buttons">
            <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <button className="buy-now-btn" onClick={() => handleBuyNow(product)}>Buy Now</button>
          </div>

          <div className="description-section">
            <h4>Description</h4>
            <p>
              Step into elegance with this rayon anarkali kurti, blending comfort and style. Featuring multicolor prints on a soft rayon base and three-quarter sleeves, it’s an ideal choice for daily wear or casual outings. Pair it with leggings or palazzos for a complete ethnic look.
            </p>
          </div>

          <div className="product-info">
            <h4>Product Information</h4>
            <p><strong>Brand:</strong> DDG</p>
            <p><strong>Manufacturer:</strong> DIVYA DEEP GARMENTS</p>
            <p><strong>Country:</strong> India</p>
            <p><strong>Manufacturer Email:</strong> hamarasamanstore@gmail.com</p>
          </div>

          <div className="return-policy">
            <h4>Return Policy</h4>
            <p>Easy returns available within 10 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
