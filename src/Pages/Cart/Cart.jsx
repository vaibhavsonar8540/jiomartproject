// import React, { useState, useEffect } from 'react';
// import './Cart.css';
// import axios from 'axios';
// import NavbarUp from '../../Components/NavBar/NavbarUp';

// const Cart = () => {
//   const [data, setData] = useState([]);
//   const [quantities, setQuantities] = useState({});

//   useEffect(() => {
//     axios.get("http://localhost:3000/cart")
//       .then(res => {
//         setData(res.data);

//         const initialQuantities = {};
//         res.data.forEach(item => {
//           initialQuantities[item.id] = item.quantity || 1;
//         });
//         setQuantities(initialQuantities);
//       })
//       .catch(err => console.error(err));
//   }, []);

//   const parsePrice = (value) => {
//     if (!value) return 0;
//     const clean = value.toString().replace(/,/g, '').trim();
//     const num = parseFloat(clean);
//     return isNaN(num) ? 0 : num;
//   };

//   const handleIncrease = (id) => {
//     setQuantities(prev => ({
//       ...prev,
//       [id]: prev[id] + 1
//     }));
//   };

//   const handleDecrease = (id) => {
//     if (quantities[id] > 1) {
//       setQuantities(prev => ({
//         ...prev,
//         [id]: prev[id] - 1
//       }));
//     }
//   };

//   const handleDelete = (id) => {
//     axios.delete(`http://localhost:3000/cart/${id}`)
//       .then(() => {
//         setData(prev => prev.filter(item => item.id !== id));
//         setQuantities(prev => {
//           const updated = { ...prev };
//           delete updated[id];
//           return updated;
//         });
//       })
//       .catch(err => console.error("Error deleting item:", err));
//   };

//   const calculateTotal = () => {
//     return data.reduce((acc, item) => {
//       const qty = quantities[item.id] || 1;
//       const price = parsePrice(item.price);
//       return acc + price * qty;
//     }, 0);
//   };

//   const calculateSavings = () => {
//     return data.reduce((acc, item) => {
//       const qty = quantities[item.id] || 1;
//       const price = parsePrice(item.price);
//       const originalPrice = parsePrice(item.original_price);
//       return acc + (originalPrice - price) * qty;
//     }, 0);
//   };

//   return (
//     <div>
//       <NavbarUp />
//       <div className="cart-container">
//         <h2 className="cart-title">My Cart</h2>
//         <div className="cart-content" style={{ display: 'flex', gap: '20px' }}>

//           <div className="cart-items" style={{ width: '65%' }}>
//             <h3 className="basket-title">Scheduled Basket ({data.length} items)</h3>
//             {data.length === 0 ? (
//               <p className="empty-cart-message">Your cart is empty.</p>
//             ) : (
//               data.map(item => {
//                 const price = parsePrice(item.price);
//                 const originalPrice = parsePrice(item.original_price);
//                 const saving = originalPrice - price;

//                 return (
//                   <div key={item.id} className="item-card">
//                     <img src={item.image} alt={item.title} className="item-image" />
//                     <div className="item-details">
//                       <p className="item-name">{item.title || item.name}</p>
//                       <div className="price-section">
//                         <span className="current-price">₹{price}</span>
//                         <span className="original-price">₹{originalPrice}</span>
//                       </div>
//                       <p className="discount" style={{width:"auto"}}>
//                         You Save ₹{saving}
//                       </p>
//                     </div>
//                     <div className="item-actions">
//                     <div className="quantity-control">
//                       <button className="quantity-btn" onClick={() => handleDecrease(item.id)}>-</button>
//                       <span>{quantities[item.id]}</span>
//                       <button className="quantity-btn" onClick={() => handleIncrease(item.id)}>+</button>
//                     </div>
//                     <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
//                   </div>

//                   </div>
//                 );
//               })
//             )}
//           </div>

//           {data.length > 0 && (
//             <div className="cart-summary" style={{ width: '35%' }}>
//               <div className="payment-details">
//                 <h3>Payment Details</h3>
//                 <div className="payment-row">
//                   <span>MRP Total</span>
//                   <span>₹{calculateTotal()}</span>
//                 </div>
//                 <div className="payment-row">
//                   <span>Product Discount</span>
//                   <span className="discount">- ₹{calculateSavings()}</span>
//                 </div>
//                 <div className="payment-row">
//                   <span>Delivery Fee</span>
//                   <span className="free">FREE</span>
//                 </div>
//                 <div className="total-row">
//                   <span>Total</span>
//                   <span>₹{calculateTotal()}</span>
//                 </div>
//                 <p className="total-saved">You Saved ₹{calculateSavings()}</p>
//               </div>
//               <button className="place-order">Place Order</button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useState, useEffect } from 'react';
import './Cart.css';
import axios from 'axios';
import NavbarUp from '../../Components/NavBar/NavbarUp';

const Cart = () => {
  const [data, setData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    axios.get("http://localhost:3000/cart")
      .then(res => {
        setData(res.data);
        const initialQuantities = {};
        res.data.forEach(item => {
          initialQuantities[item.id] = item.quantity || 1;
        });
        setQuantities(initialQuantities);
      })
      .catch(err => console.error(err));
  }, []);

  const parsePrice = (value) => {
    if (!value) return 0;
    const clean = value.toString().replace(/[^0-9.]/g, '');
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
  };

  const handleIncrease = (id) => {
    setQuantities(prev => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const handleDecrease = (id) => {
    if (quantities[id] > 1) {
      setQuantities(prev => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/cart/${id}`)
      .then(() => {
        setData(prev => prev.filter(item => item.id !== id));
        setQuantities(prev => {
          const updated = { ...prev };
          delete updated[id];
          return updated;
        });
      })
      .catch(err => console.error("Error deleting item:", err));
  };

  const calculateTotal = () => {
    return data.reduce((acc, item) => {
      const qty = quantities[item.id] || 1;
      const price = parsePrice(item.price);
      return acc + price * qty;
    }, 0);
  };

  const calculateSavings = () => {
    return data.reduce((acc, item) => {
      const qty = quantities[item.id] || 1;
      const price = parsePrice(item.price);
      const originalPrice = parsePrice(item.original_price);
      return acc + (originalPrice - price) * qty;
    }, 0);
  };

  // Razorpay payment handler
  const handleRazorpayPayment = () => {
    const totalAmount = calculateTotal();

    const options = {
      key: "rzp_test_1DP5mmOlF5G5ag", // Replace with your Razorpay test key
      amount: totalAmount * 100, // Razorpay needs amount in paise
      currency: "INR",
      name: "Your Store",
      description: "Order Payment",
      image: "https://yourlogo.url/logo.png", // Optional
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
        // Optional: clear cart or show order confirmation
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999"
      },
      notes: {
        address: "Customer Address"
      },
      theme: {
        color: "#3399cc"
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <NavbarUp />
      <div className="cart-container">
        <h2 className="cart-title">My Cart</h2>
        <div className="cart-content" style={{ display: 'flex', gap: '20px' }}>

          <div className="cart-items" style={{ width: '65%' }}>
            <h3 className="basket-title">Scheduled Basket ({data.length} items)</h3>
            {data.length === 0 ? (
              <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
              data.map(item => {
                const price = parsePrice(item.price);
                const originalPrice = parsePrice(item.original_price);
                const saving = originalPrice - price;

                return (
                  <div key={item.id} className="item-card">
                    <img src={item.image} alt={item.title} className="item-image" />
                    <div className="item-details">
                      <p className="item-name">{item.title || item.name}</p>
                      <div className="price-section">
                        <span className="current-price">₹{price}</span>
                        <span className="original-price">₹{originalPrice}</span>
                      </div>
                      <p className="discount" style={{ width: "auto" }}>
                        You Save ₹{saving}
                      </p>
                    </div>
                    <div className="item-actions">
                      <div className="quantity-control">
                        <button className="quantity-btn" onClick={() => handleDecrease(item.id)}>-</button>
                        <span>{quantities[item.id]}</span>
                        <button className="quantity-btn" onClick={() => handleIncrease(item.id)}>+</button>
                      </div>
                      <button className="delete-btn" onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {data.length > 0 && (
            <div className="cart-summary" style={{ width: '35%' }}>
              <div className="payment-details">
                <h3>Payment Details</h3>
                <div className="payment-row">
                  <span>MRP Total</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <div className="payment-row">
                  <span>Product Discount</span>
                  <span className="discount">- ₹{calculateSavings()}</span>
                </div>
                <div className="payment-row">
                  <span>Delivery Fee</span>
                  <span className="free">FREE</span>
                </div>
                <div className="total-row">
                  <span>Total</span>
                  <span>₹{calculateTotal()}</span>
                </div>
                <p className="total-saved">You Saved ₹{calculateSavings()}</p>
              </div>
              <button className="place-order" onClick={handleRazorpayPayment}>Place Order</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
