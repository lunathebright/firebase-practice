import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";

import { authService } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState();

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newAccount) {
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      } else {
        const data = await createUserWithEmailAndPassword(
          authService,
          email,
          password
        );
      }
    } catch (error) {
      setError(error);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    const data = await signInWithPopup(authService, provider);
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input type="submit" value={newAccount ? "Create Acoount" : "LogIn"} />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button name="google" onClick={onGoogleClick}>
          continue with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
