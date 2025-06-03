import React, { useEffect, useState } from "react";
import NavbarUp from "../../Components/NavBar/NavbarUp";
import FooterMain from "../../Components/Footer/Footer";
import "./GlobalStore.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { Navigation } from "swiper/modules";
import { CiHeart } from "react-icons/ci";
import "swiper/css";
import "swiper/css/navigation";

const GlobalStore = () => {
  const [dealData, setdealData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/bestdeal")
      .then((res) => setdealData(res.data))
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);

   const [launchData, setlaunchData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/newLaunch")
      .then((res) => setlaunchData(res.data))
      .catch((err) => console.error("Failed to fetch data:", err));
  }, []);
  //favourite
  const handleFav = async (item) => {
    try {
      const res = await axios.get(
        `http://localhost:3000/favourite?id=${item.id}`
      );
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

  //add to cart
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

  return (
    <div>
      <NavbarUp />
      <div className="global-main">
        <span style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "sans-serif", fontWeight: "lighter" ,fontSize:"52px"}}>
            SHOP BY
          </h1>
          <br />
          <h1
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              marginTop: "-40px",
                fontSize:"52px"
            }}
          >
            CATEGORY
          </h1>
        </span>

        {/* category */}
        <div className="global-category">
          <div className="sub-category">
            <Link to={'/haircare'}>
              <img
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715776849_Hair_Care.jpg?im=Resize=(368,538)"
                alt=""
              />
            </Link>
          </div>
          <div className="sub-category">
            <Link>
              <img
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715777125_Face_Care.jpg?im=Resize=(368,538)"
                alt=""
              />
            </Link>
          </div>
          <div className="sub-category">
            <Link>
              <img
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715777162_Body_Care.jpg?im=Resize=(368,538)"
                alt=""
              />
            </Link>
          </div>
          <div className="sub-category">
            <Link>
              <img
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715777233_Perfume.jpg?im=Resize=(368,538)"
                alt=""
              />
            </Link>
          </div>
          <div className="sub-category">
            <Link>
              <img
                src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715777333_Home_Care.jpg?im=Resize=(368,538)"
                alt=""
              />
            </Link>
          </div>
        </div>

        {/* bestdeal */}
        <div className="bestdealmain">
          <div className="bestdealsub">
            <h2 style={{ fontFamily: "sans-serif" }}>
              <b>Internatinal Best Deals</b>
            </h2>

            <Swiper
              modules={[Navigation]}
              navigation
              loop={dealData.length > 6} // Loop only if enough slides
              grabCursor={true}
              spaceBetween={20}
              slidesPerView={6}
              slidesPerGroup={1} // Change to 1 for smoother navigation
              breakpoints={{
                0: { slidesPerView: 2, slidesPerGroup: 1 },
                768: { slidesPerView: 4, slidesPerGroup: 1 },
                1024: { slidesPerView: 6, slidesPerGroup: 1 },
              }}
            >
              {dealData.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="dealCard">
                    <button className="btnfvt">
                      <CiHeart
                        style={{ fontSize: "20px" }}
                        className="btnFavt"
                        onClick={() => handleFav(el)}
                      />
                    </button>
                    <Link to={`/product/bestdeal/${el.id}`}>
                      <img src={el.image} alt={el.title} className="dealImg" />
                    </Link>
                    <h5>{el.title}</h5>
                    {el.title?.length > 30
                      ? `${el.title.slice(0, 30)}...`
                      : el.title}
                    <h4 style={{ position: "relative", top: "-10px" }}>
                      {el.price}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        top: "-50px",
                      }}
                    >
                      <h4
                        style={{
                          color: "gray",
                          textDecoration: "line-through",
                          margin: 0,
                        }}
                      >
                        {el.original_price || "NaN"}
                      </h4>
                      <h5
                        style={{
                          color: "green",
                          backgroundColor: "#E5F7EE",
                          padding: "3px 5px",
                          fontFamily: "sans-serif",
                          marginLeft: "7px",
                        }}
                      >
                        {el.discount || "NaN"}
                      </h5>
                    </div>
                    <button
                      className="btnAdd"
                      onClick={() => handleAddToCart(el)}
                    >
                      Add
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* logo */}
        <div className="logomain">
            <div className="sublogo"><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715839810_Slim_Banner_02_DT.jpg?im=Resize=(2368,400)" alt="" /></div>
        </div>

        {/* best brand */}
        <div>
            <span>
                <h1 style={{fontFamily:"sans-serif",fontWeight:"lighter",fontSize:"52px",marginLeft:"300px"}}>BEST BRANDS</h1><br />
                <h1 style={{fontWeight:"bold",fontSize:"52px",marginLeft:"420px",marginTop:"-50px"}}>ACROSS THE WORLD</h1>
            </span>
        <div className="brandmain">
            <div className="subbrand">
                <Link to={'/cleaner'}><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715838163_Range_Of_International_Cleaner.jpg?im=Resize=(768,448)" alt="" /></Link>
            </div>
            <div className="subbrand">
                <Link><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715838188_Top_Korean_Beauty_Products.jpg?im=Resize=(768,448)" alt="" /></Link>
            </div>
            <div className="subbrand"></div>
        </div>
        </div>

        {/* new launch */}
         <div className="launchmain">
          <div className="launchsub">
            <h2 style={{ fontFamily: "sans-serif" }}>
              <b>Internatinal New Launches</b>
            </h2>

            <Swiper
              modules={[Navigation]}
              navigation
              loop={launchData.length > 6} // Loop only if enough slides
              grabCursor={true}
              spaceBetween={20}
              slidesPerView={6}
              slidesPerGroup={1} // Change to 1 for smoother navigation
              breakpoints={{
                0: { slidesPerView: 2, slidesPerGroup: 1 },
                768: { slidesPerView: 4, slidesPerGroup: 1 },
                1024: { slidesPerView: 6, slidesPerGroup: 1 },
              }}
            >
              {launchData.map((el, index) => (
                <SwiperSlide key={index}>
                  <div className="launchCard">
                    <button className="btnfvt">
                      <CiHeart
                        style={{ fontSize: "20px" }}
                        className="btnFavt"
                        onClick={() => handleFav(el)}
                      />
                    </button>
                    <Link to={`/product/newLaunch/${el.id}`}>
                      <img src={el.image} alt={el.title} className="launchImg" />
                    </Link>
                    <h5>{el.title}</h5>
                    {el.title?.length > 30
                      ? `${el.title.slice(0, 30)}...`
                      : el.title}
                    <h4 style={{ position: "relative", top: "-10px" }}>
                      {el.price}
                    </h4>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        top: "-50px",
                      }}
                    >
                      <h4
                        style={{
                          color: "gray",
                          textDecoration: "line-through",
                          margin: 0,
                        }}
                      >
                        {el.original_price || "NaN"}
                      </h4>
                      <h5
                        style={{
                          color: "green",
                          backgroundColor: "#E5F7EE",
                          padding: "3px 5px",
                          fontFamily: "sans-serif",
                          marginLeft: "7px",
                        }}
                      >
                        {el.discount || "NaN"}
                      </h5>
                    </div>
                    <button
                      className="btnAdd"
                      onClick={() => handleAddToCart(el)}
                    >
                      Add
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <h1 style={{fontSize:"52px" , textAlign:"center",marginTop:"50px" , fontFamily:"sans-serif"}}>Continue Shopping</h1>
      </div>
      <FooterMain />
    </div>
  );
};

export default GlobalStore;
