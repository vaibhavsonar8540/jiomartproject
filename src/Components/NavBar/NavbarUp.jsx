import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { RiListCheck } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import NavbarDown from "./NavbarDown";
import './NavDown.css'; 
import { signOut } from "firebase/auth";
import { auth } from "../../Service";

const NavbarUp = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const params = new URLSearchParams(searchParams);
      if (searchTerm.trim()) {
        params.set("q", searchTerm);
      } else {
        params.delete("q");
      }
      navigate({ search: params.toString() });
    }
  };

  // logout
    const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/signin"); // redirect to signin page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };


  return (
    <div>
      <div className="navbar-up-container">
        <div className="navbar-up-inner">
          <Link to="/">
            <img
              src="https://www.jiomart.com/assets/ds2web/images/Jiomart-logo-ds2.0.svg?v=24"
              alt="Logo"
              height="100"
              width="100"
            />
          </Link>

          <div className="navbar-location">
            <FaLocationDot style={{ color: "white" }} />
            <p>Deliver to Mumbai 400020</p>
          </div>

          <div className="search-bar">
            <div className="search-icon">
              <IoIosSearch fontSize="27px" />
            </div>
            <input
              type="text"
              placeholder="Search Jiomart"
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleSearch}
            />
            <div className="list-icon">
              <RiListCheck fontSize="27px" />
            </div>
          </div>

          <Link to="/cart" className="icon-link">
            <FaShoppingCart color="white" fontSize="23px" />
          </Link>

          <Link to="/signin" className="signin-link">
            <IoPersonCircleOutline fontSize="26px" />
            <p>Sign In</p>
          </Link>

          <Link to="/favourite" className="icon-link">
            <CiHeart style={{ color: "white" }} />
          </Link>

          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        </div>
      </div>
      <NavbarDown />
    </div>
  );
};

export default NavbarUp;
