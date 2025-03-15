import React, { useState, useEffect } from "react";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState("");

  useEffect(() => {
    const user = auth.currentUser;
    if (user) setIsLoggedIn(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, formData.email, formData.password);
      } else {
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      }
      setIsLoggedIn(true);
    } catch (error) {
      setErrors(error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
          <p onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Go to Sign Up" : "Go to Login"}</p>
        </form>
      )}
    </div>
  );
};

export default AuthPage;
