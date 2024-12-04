import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "./firebase"; // Firebase auth instance

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
