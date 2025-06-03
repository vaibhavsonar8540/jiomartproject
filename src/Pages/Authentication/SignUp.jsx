import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RxCross2 } from "react-icons/rx";
import './Auth.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Service';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Important!
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully");
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form className="signup-container" onSubmit={handleRegister}>
      <Link to={'/signin'} className="close-btn">
        <RxCross2 />
      </Link>
      <div className="signup-header" style={{marginTop:"30px"}}>
        <div className="signup-title">
          <h1>Sign Up</h1>
        </div>
        <div className="signup-logo">
          <img src="https://jep-asset.akamaized.net/JioMart/Common/Jiomart_LOGO_Icon.png" alt="JioMart Logo" />
        </div>
      </div>
      <input
        type="email"
        placeholder="Enter Email here"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Enter password here"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
