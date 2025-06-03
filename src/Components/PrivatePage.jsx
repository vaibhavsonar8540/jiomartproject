import React from "react";
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../Service";


const PrivatePage = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/signin" />;
};

export default PrivatePage;
