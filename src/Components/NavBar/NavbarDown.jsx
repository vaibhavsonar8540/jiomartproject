import React from 'react';
import './NavDown.css'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const NavbarDown = () => {
  return (
    <div className="navbar">
    <div className="navbar-container">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/grocery" className="ul-link">Groceries</Link>
          <ul className="navbar-submenu">
            <li className="submenu-item">
              <Link className="sub-link" to={'/drink'}>Biscuits, Drinks & Packaged Foods</Link>
              <ul className="navbar-subsubmenu1">
                <li><Link className="link-sub" to={'/icefrozen'}>Ice Cream & Frozen</Link></li>
                <li><Link className="link-sub" >Chips & Namkeens</Link></li>
                <li><Link className="link-sub">Biscuits & Cookies</Link></li>
                <li><Link className="link-sub">Chocolates & Candies</Link></li>
                <li><Link className="link-sub">Indian Sweets</Link></li>
                <li><Link className="link-sub">Drinks & Juices</Link></li>
                <li><Link className="link-sub">Breakfast Cereals</Link></li>
                <li><Link className="link-sub">Noodles, Pasta & Vermicelli</Link></li>
                <li><Link className="link-sub">Ready to Cook & Eat</Link></li>
                <li><Link className="link-sub">Spreads, Sauces & Ketchup</Link></li>
                <li><Link className="link-sub">Pickles, Chutney & Flavouring</Link></li>
                <li><Link className="link-sub">Tea & Coffee</Link></li>
              </ul>
            </li>
            <li className="submenu-item"><Link className="sub-link" to={'/fruitVege'}>Fruits & Vegetables</Link>
            <ul className="navbar-subsubmenu2">
                <li><Link className="link-sub">Fresh Fruits</Link></li>
                <li><Link className="link-sub">Basic Vegetable</Link></li>
                <li><Link className="link-sub">Roots , Herbs & Others</Link></li>
                <li><Link className="link-sub">Premium Fruits & Vegetables</Link></li>
              </ul>
            </li>
            <li className="submenu-item"><Link className="sub-link">Cooking Essentials</Link></li>
            <li className="submenu-item"><Link className="sub-link">Dairy & Bakery</Link></li>
            <li className="submenu-item"><Link className="sub-link">Personal Care</Link></li>
            <li className="submenu-item"><Link className="sub-link">Beauty</Link></li>
            <li className="submenu-item"><Link className="sub-link">Mom & Baby Care</Link></li>
            <li className="submenu-item"><Link className="sub-link">Home</Link></li>
            <li className="submenu-item"><Link className="sub-link">Kitchenware</Link></li>
            <li className="submenu-item"><Link className="sub-link">Tableware</Link></li>
            <li className="submenu-item"><Link className="sub-link">School, Office & Stationery</Link></li>
            <li className="submenu-item"><Link className="sub-link">Disposable</Link></li>
            <li className="submenu-item"><Link className="sub-link">Crafts of India</Link></li>
            <li className="submenu-item"><Link className="sub-link">Gifts and Hampers</Link></li>
            <li className="submenu-item"><Link className="sub-link">Fashion Jewellery</Link></li>
          </ul>
        </li>
        <li className="navbar-item">
          <Link to="#" className="ul-link">Home & Lifestyle</Link>
            <ul className="navbar-submenu">
              <li className="submenu-item"><Link className="sub-link" to="/life">Kitchenware</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Home Furnishing</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Sports & Fitness</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Bags & Travel Luggage</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Bathroom & Laundry Accessories</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Home Decor</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Disposable</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">  Prayer & Spiritual Needs</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Tableware</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Furniture</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Toys and Games</Link></li>
              <li className="submenu-item"><Link className="sub-link" to="/life">Garden and Outdoor</Link></li>
            </ul>
        </li>
        <li className="navbar-item">
          <Link to="#" className="ul-link">Electronics
          <ul className="navbar-submenu">
              <li className="submenu-item"><Link className="sub-link">Mobile & Tablets</Link></li>
              <li className="submenu-item"><Link className="sub-link">Computers & Accessories</Link></li>
              <li className="submenu-item"><Link className="sub-link">TV & Home ENtertainment</Link></li>
              <li className="submenu-item"><Link className="sub-link">Large Appliances</Link></li>
              <li className="submenu-item"><Link className="sub-link">Audio & Smart Home</Link></li>
              <li className="submenu-item"><Link className="sub-link">Home Appliances</Link></li>
              <li className="submenu-item"><Link className="sub-link">Kitchen Appliances</Link></li>
              <li className="submenu-item"><Link className="sub-link">Wearable & Smart Tech</Link></li>
              <li className="submenu-item"><Link className="sub-link">Personal Care & Grooming Appliances</Link></li>
              <li className="submenu-item"><Link className="sub-link">Camera & Musical Instrument</Link></li>
            </ul>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="#" className="ul-link">Fashion
          <ul className="navbar-submenu">
              <li className="submenu-item"><Link className="sub-link">Men</Link></li>
              <li className="submenu-item"><Link className="sub-link">Women</Link></li>
              <li className="submenu-item"><Link className="sub-link">Boys</Link></li>
              <li className="submenu-item"><Link className="sub-link">Girls</Link></li>
              <li className="submenu-item"><Link className="sub-link">Infants</Link></li>
              <li className="submenu-item"><Link className="sub-link">tech</Link></li>
              <li className="submenu-item"><Link className="sub-link">Crafts of India</Link></li>
            </ul>
            </Link>
        </li>
        <li className="navbar-item">
          <Link to="#" className="ul-link">Industrial & Professional Supplies
          <ul className="navbar-submenu">
              <li className="submenu-item"><Link className="sub-link">Auto Care</Link></li>
              <li className="submenu-item"><Link className="sub-link">Industrial Supplies</Link></li>
              <li className="submenu-item"><Link className="sub-link">Home & Electronic Components</Link></li>
              <li className="submenu-item"><Link className="sub-link">Building SUpplies & Tools</Link></li>
              <li className="submenu-item"><Link className="sub-link">Carpentry</Link></li>
              <li className="submenu-item"><Link className="sub-link">Security , Safety , & Automation</Link></li>
              <li className="submenu-item"><Link className="sub-link">Electrical</Link></li>
              <li className="submenu-item"><Link className="sub-link">Building Supplies & Measuring Tools</Link></li>
            </ul>

          </Link>
        </li>
        <li className="navbar-item red-background">
          <Link to="#" className="ul-link">Precious Jewellery
          <ul className="navbar-submenu">
              <li className="submenu-item"><Link className="sub-link">Fine Jewellery</Link></li>
              <li className="submenu-item"><Link className="sub-link">Jewellery</Link></li>
            </ul>
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="#" className="ul-link">Wellness
          <ul className="navbar-submenu">
              <li className="submenu-item"><Link className="sub-link">Personal Care</Link></li>
              <li className="submenu-item"><Link className="sub-link">Fitness</Link></li>
              <li className="submenu-item"><Link className="sub-link">Skin Care</Link></li>
              <li className="submenu-item"><Link className="sub-link">Ayush</Link></li>
              <li className="submenu-item"><Link className="sub-link">Mom & Baby</Link></li>
              <li className="submenu-item"><Link className="sub-link">Hair</Link></li>
              <li className="submenu-item"><Link className="sub-link">Wellness</Link></li>
              <li className="submenu-item"><Link className="sub-link">Fragnance</Link></li>
              <li className="submenu-item"><Link className="sub-link">Covid Essentials</Link></li>
              <li className="submenu-item"><Link className="sub-link">Men's Grooming</Link></li>
              <li className="submenu-item"><Link className="sub-link">Make-up</Link></li>
            </ul>
            </Link>
        </li>
        <li className="navbar-item">
          <Link to="#" className="ul-link">
            Local Shops
            <span className="new-badge">NEW</span>
          </Link>
        </li>
        <li className="navbar-item red-background">
          <Link to="#" className="ul-link">All Categories</Link>
        </li>
      </ul>
    </div>
  </div>
  );
};

export default NavbarDown;
