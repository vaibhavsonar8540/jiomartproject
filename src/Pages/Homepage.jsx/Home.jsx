import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link, useSearchParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "./Home.css";
import axios from "axios";
import { CiHeart } from "react-icons/ci";
import NavbarUp from "../../Components/NavBar/NavbarUp";
import FooterMain from "../../Components/Footer/Footer";




const images = [
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1744469612_grocery_super_saver.jpg?im=Resize=(768,448)",
    link: "/grocerydis",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692182_1.jpg?im=Resize=(768,448)",
    link: "/electronics?category=mobile",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767036_22.jpg?im=Resize=(768,448)",
    link: "/electronics?category=computer",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767177_HPMC_1.jpg?im=Resize=(768,448)",
    link: "/life?category=kitchenware",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692252_HPMC_2.jpg?im=Resize=(768,448)",
    link: "/fashion?category=crafts",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767225_HPMC_3.jpg?im=Resize=(768,448)",
    link: "/life?category=home+furnishing",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692448_HPMC_4.jpg?im=Resize=(768,448)",
    link: "/product/supplies/74",
  },
];

const secslider = [
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1740384914_SBI_Cards_632_x_160.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735537779_632x160__copy.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1735538404_632x160__copy_2.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745083605_Federal-CC--632-x-160.jpg?im=Resize=(768,200)",
    link: "#",
  },
  ,
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1745083686_Federal.jpg?im=Resize=(768,200)",
    link: "#",
  },
  {
    src: "https://www.jiomart.com/images/cms/aw_rbslider/slides/1743407821_PhonePe_632x160.jpg?im=Resize=(768,200)",
    link: "#",
  },
];



const Home = () => {
  // icecream part
  const [products, setProducts] = useState([]);
    
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/icecream") 
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch ice cream data:", err));
  }, []);

  // electric sec
  const [eProduct , seteProduct] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/electronics") 
      .then((res) => seteProduct(res.data))
      .catch((err) => console.error("Failed to fetch ice cream data:", err));
  }, []);

  // home section
  const [homeProduct , sethomeProduct] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/home") 
      .then((res) => sethomeProduct(res.data))
      .catch((err) => console.error("Failed to fetch ice cream data:", err));
  }, []);


  // fashion data 
  const [fashionData , setfashionData] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/fashion") 
      .then((res) => setfashionData(res.data))
      .catch((err) => console.error("Failed to fetch ice cream data:", err));
  }, []);


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
    <NavbarUp/>
    <div style={{ margin: "auto" }}>
      
      <div className="slider-main">
        {/* slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map(({ src, link }, index) => (
            <SwiperSlide key={index}>
              <Link to={link}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="slide-img"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* poster */}
        <div className="poster">
          <Link to={'/loot'}>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1746036953_2368-x-400.jpg?im=Resize=(2368,400)"
              alt=""
            />
          </Link>
        </div>

        {/* second slider */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {secslider.map(({ src, link }, index) => (
            <SwiperSlide key={index}>
              <Link to={link}>
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="slide-img"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* blockbuster */}
        <div className="blockbuster-sec">
          <Link to={"/blockbuster"}>
            <img src="/banner.png" alt="" />
          </Link>
        </div>

        {/* trending deals */}
        <div className="trendingDealsSec">
          <h2 style={{ fontFamily: "sans-serif" }}>Trending Deals</h2>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div className="subTrend">
              <Link to={'/smartphone'}>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745428622_smartphones.jpg?im=Resize=(368,452)"
                  alt=""
                />
              </Link>
            </div>
            <div className="subTrend">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745428660_kids.jpg?im=Resize=(368,452)"
                  alt=""
                />
              </Link>
            </div>
            <div className="subTrend">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745428714_kitchen.jpg?im=Resize=(368,452)"
                  alt=""
                />
              </Link>
            </div>
            <div className="subTrend">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745704555_Square-Tile-Carousel--2-.jpg?im=Resize=(368,452)"
                  alt=""
                />
              </Link>
            </div>
            <div className="subTrend">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907473_Square-Tile-Carousel-1.jpg?im=Resize=(368,452)"
                  alt=""
                />
              </Link>
            </div>
            <div className="subTrend">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744907594_Homechair.jpg?im=Resize=(368,452)"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        {/* top category */}
        <div className="topCategory">
          <div className="SubTopCategory">
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1743420471_Shop_Top_2368x400.jpg?im=Resize=(2368,400)"
              alt=""
            />
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div className="categorySec">
              <Link to={'/kitHome'}>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745429148_Shop-Top--1-.jpg?im=Resize=(368,538)"
                  alt=""
                />
              </Link>
            </div>
            <div className="categorySec">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745429184_Shop-Top--3-.jpg?im=Resize=(368,538)"
                  alt=""
                />
              </Link>
            </div>
            <div className="categorySec">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745429219_Shop-Top--2-.jpg?im=Resize=(368,538)"
                  alt=""
                />
              </Link>
            </div>
            <div className="categorySec">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767425_1.jpg?im=Resize=(368,538)"
                  alt=""
                />
              </Link>
            </div>
            <div className="categorySec">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767405_2.jpg?im=Resize=(368,538)"
                  alt=""
                />
              </Link>
            </div>
            <div className="categorySec">
              <Link>
                <img
                  src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745863162_3.jpg?im=Resize=(368,538)"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>

        {/* cricket poster */}
        <div className="cricketSec">
          <Link to={'/cricket'}>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1743443394_1p_web.jpg?im=Resize=(2368,400)"
              alt=""
            />
          </Link>
        </div>
      </div>


      {/* icecream section */}

      <div className="icecreamMain">
        <div className="icecreamSub">
          <h2 style={{ color: "#AA0505", fontFamily: "sans-serif" }}>
            <b>The Love of Ice Cream</b>
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            loop={products.length > 6} // Loop only if enough slides
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
            {products.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="icecreamCard">
                  <Link to={`/product/icecream/${el.id}`}>
                    <img src={el.image} alt={el.title} className="ice-img" />
                  </Link>
                  <h5>{el.title}</h5>
                  <h4 style={{ position: "relative", top: "-10px" }}>
                    ₹{el.price}
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
                      ₹{el.originalPrice}
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
                      {el.discount}
                    </h5>
                  </div>
                  <button className="btnAdd"  onClick={() => handleAddToCart(el)}>Add</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* discount */}
      <div className="dis-main">
        <div className="dis-sub">
          <Link to={'/toys'}>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745767592_1.jpg?im=Resize=(768,200)"
              alt=""
            />
          </Link>
        </div>
        <div className="dis-sub">
          <Link>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745693205_2.jpg?im=Resize=(768,200)"
              alt=""
            />
          </Link>
        </div>
        <div className="dis-sub">
          <Link>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744909148_Slim-Banner-Carousel-2.jpg?im=Resize=(768,200)"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="brandsLove">
        <img
          src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1743420913_Featured_Spotlight_2368x400.jpg?im=Resize=(2368,400)"
          alt=""
        />
      </div>

      {/* brands */}
      <div className="brands-main">
        <div className="brands-sub" style={{marginLeft:"0px"}}>
          <Link to={'/iphone'}>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745434588_iphone.jpg?im=Resize=(368,452)"
              alt=""
            />
          </Link>
        </div>
        <div className="brands-sub">
          <Link >
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1745692978_Featured_Spotlight_1.jpg?im=Resize=(368,452)"
              alt=""
            />
          </Link>
        </div>
        <div className="brands-sub">
          <Link>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1744914424_Featured-Spotlight-1.jpg?im=Resize=(368,452)"
              alt=""
            />
          </Link>
        </div>
        <div className="brands-sub">
          <Link>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1742885496_Featured-Spotlight--1-_1.jpg?im=Resize=(368,452)"
              alt=""
            />
          </Link>
        </div>
        <div className="brands-sub">
          <Link>
            <img
              src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1742908394_Featured-Spotlight--1-11.jpg?im=Resize=(368,452)"
              alt=""
            />
          </Link>
        </div>
      </div>

      {/* electronics */}
      <div className="icecreamMain">
        <div className="icecreamSub">
          <h2 style={{ color: "#AA0505", fontFamily: "sans-serif" }}>
            <b>Electronic Zone</b>
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            loop={eProduct.length > 6} 
            grabCursor={true}
            spaceBetween={20}
            slidesPerView={6}
            slidesPerGroup={1} 
            breakpoints={{
              0: { slidesPerView: 2, slidesPerGroup: 1 },
              768: { slidesPerView: 4, slidesPerGroup: 1 },
              1024: { slidesPerView: 6, slidesPerGroup: 1 },
            }}
          >
            {eProduct.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="EleCard">
                  <button className="btnfvt"><CiHeart style={{fontSize:"20px"}} className="btnFavt" onClick={() => handleFav(el)}/></button>
                  <Link to={`/product/electronics/${el.id}`}>
                    <img src={el.image} alt={el.title}className="ele-img"  />
                  </Link>
                  <h5>{el.title.slice(0,30)}...</h5>
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
                      {el.originalPrice || el.original_price}
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
                      {el.discount}
                    </h5>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* home */}
      <div className="icecreamMain">
        <div className="icecreamSub">
          <h2 style={{ color: "#AA0505", fontFamily: "sans-serif" }}>
            <b>Home and Lifestyle Corner</b>
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            loop={homeProduct.length > 6} // Loop only if enough slides
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
            {homeProduct.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="icecreamCard">
                <button className="btnfvt"><CiHeart style={{fontSize:"20px"}} className="btnFavt" onClick={() => handleFav(el)}/></button>
                  <Link to={`/product/home/${el.id}`}>
                    <img src={el.image} alt={el.title} className="homeP-img" />
                  </Link>
                  {/* <h5>{el.name}</h5> */}
                  {el.name.length > 30 ? `${el.name.slice(0, 30)}...` : el.name}
                  <h4 style={{ position: "relative", top: "-10px" }}>
                    ₹{el.price}
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
                      ₹{el.original_price}
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
                      {el.discount}
                    </h5>
                  </div>
                  <button className="btnAdd"  onClick={() => handleAddToCart(el)}>Add</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* fashion */}
      <div className="icecreamMain">
        <div className="icecreamSub">
          <h2 style={{ color: "#AA0505", fontFamily: "sans-serif" }}>
            <b>Curted Fashion Collection</b>
          </h2>

          <Swiper
            modules={[Navigation]}
            navigation
            loop={fashionData.length > 6} // Loop only if enough slides
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
            {fashionData.map((el, index) => (
              <SwiperSlide key={index}>
                <div className="icecreamCard">
                <button className="btnfvt"><CiHeart style={{fontSize:"20px"}} className="btnFavt" onClick={() => handleFav(el)}/></button>
                  <Link to={`/product/fashion/${el.id}`}>
                    <img src={el.image} alt={el.title} className="homeP-img" />
                  </Link>
                  {/* <h5>{el.name}</h5> */}
                  {el.title?.length> 30 ? `${el.title.slice(0, 30)}...` : el.title}
                  <h4 style={{ position: "relative", top: "-10px" }}>
                    ₹{el.price}
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
                      ₹{el.original_price || 'NaN'}
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
                      {el.discount || 'NaN'}
                    </h5>
                  </div>
                  <button className="btnAdd"  onClick={() => handleAddToCart(el)}>Add</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>  

        <div className="globalSTore">
          <Link to={'/globalstore'}><img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1740740463_Global-Store--2368-x-400.jpg?im=Resize=(2368,400)" alt="" /></Link>
        </div>
        
        <div className="shopping">
         <Link to={'/shopping'}> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1742753316_Continue_Shopping_2368x400.jpg?im=Resize=(2368,400)" alt="" /></Link>
        </div>
        
        <div className="jioCare">
         <Link to={'/caution'}> <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1740738581_2368x400_JioMartCares_2.jpg?im=Resize=(2368,400)" alt="" /></Link>
        </div>

    </div>
    <FooterMain/>
    </div>
  );
};

export default Home;
