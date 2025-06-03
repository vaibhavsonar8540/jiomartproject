import React from "react";
import { Link } from "react-router-dom";
import './Footer.css'; 

const FooterMain = () => {
  return (
    <div style={{backgroundColor:"whitesmoke",height:"540px"}}>
      <div style={{width:"80%",margin:"auto",display:"flex",height:"460px"}}>
        <div style={{ display: "flex", flexDirection: "column" ,paddingTop:"20px",width:"20%"}} >
            <h4>All Categories</h4>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Grocery</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Electronics</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Fashion</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Home & Lifestyle</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Premium Fruits</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Books</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Furniture</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,paddingTop:"20px",width:"20%"}}>
            <h4>Popular Categories</h4>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Biscuits, Drinks & Packaged Foods</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Fruits & Vegetables</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Cooking Essentials</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Dairy & Bakery</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Personal Care</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Beauty</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Home Care</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Mom & Baby Care</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">School , Office & Stationery</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,paddingTop:"20px",width:"20%"}}>
            <h4>Customer Account</h4>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">My Account</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">My Orders</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Wishlist</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Delivery Addresses</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">JioMart Wallet</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,paddingTop:"20px",width:"20%"}}>
            <h4>Help & Support</h4>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">About Us</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">FAQ</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Terms & Condition</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Privacy Policy</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">E-waste Policy</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Cancellation & Return Policy</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">Shipping & Delivery Policy</Link>
            <Link to="#" style={{ textDecoration: "none" ,padding:"7px 0px",color:"#595959",fontFamily:"sans-serif"}} className="footer">AC Installation by resQ</Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column" ,paddingTop:"20px",width:"20%"}}>
            <h3>Contact Us</h3>
            <span >WhatsApp us : <span style={{color:"#252574"}}>70003 70003</span></span>
            <span>Call us : <span style={{color:"#252574"}}>1800 890 1222</span></span>
            <span>8:00 AM to 8:00 PM , 365 days</span>

            <span style={{marginTop:"20px"}}>Should you encounter any bugs,glitches,lack of functionality , delayed diliveries, billing errors or other problems on the website</span>

            <h3>Download the app</h3>
            <div style={{display:"flex"}}>
                <img src="https://www.jiomart.com/assets/ds2web/jds-icons/google-play-icon.svg" alt="" />
                <img src="https://www.jiomart.com/assets/ds2web/jds-icons/ios_app_icon.svg" alt=""  style={{marginLeft:"10px"}}/>
            </div>
        </div>
      </div>

    <hr style={{width:"100%",color:"gray"}}/>

      <div  style={{display:"flex",justifyContent:"space-between",width:"80%",margin:"auto",height:"60px"}}>
          <div style={{display:"flex"}}>
            <img src="https://www.jiomart.com/assets/ds2web/jds-icons/jiomart-logo-icon.svg" alt="" style={{height:"40px"}}/>
            <p style={{fontSize:"12px",marginLeft:"20px"}}>© 2025 All rights reserved. Reliance Retail Ltd.</p>
          </div>
          <div>
            <p style={{fontSize:"12px"}}>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</p>
          </div>
      </div>
    </div>
  );
};

export default FooterMain;
