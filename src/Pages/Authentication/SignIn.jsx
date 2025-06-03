import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RxCross2 } from "react-icons/rx";
import "./Auth.css";
import { auth } from '../../Service';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successfully")
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form  onSubmit={handleLogin} className='signin-main'>
        <Link to={'/'}> <RxCross2 /> </Link>
        <div style={{display:"flex",width:"100%"}}>
            <div style={{width:"50%"}}>
                <h1>Sign In</h1>
                <p>Varify your Email to access your <b>Jio Mart</b> account</p>
            </div >
            <div style={{width:"40%"}} className='signin-logo'>
                <img src="https://jep-asset.akamaized.net/JioMart/Common/Jiomart_LOGO_Icon.png" alt="" />
            </div>
        </div>

        <input type="text" placeholder='Enter Email here' value={email}
          onChange={(e) => setEmail(e.target.value)} required /> <br />
        <input type="password" placeholder='Enter password here' value={password}
          onChange={(e) => setPassword(e.target.value)} required/> <br />

        <input type="submit" value={"Sign In"}/>
       <button style={{padding:"5px 10px",backgroundColor:"white",borderRadius:"20px",border:"none",marginLeft:"20px"}}> <Link to={'/signup'} style={{position:"relative",fontSize:"15px"}}>Don't have an account</Link></button>
        <p style={{fontSize:"12px",fontFamily:"sans-serif"}}>By sign in , you agree to our <span style={{color:"#0A51B8"}}>Terms & conditions of Use, Privacy Policy and Retail Account Privacy Policy </span> </p>

       
    </form>
  )
}

export default SignIn