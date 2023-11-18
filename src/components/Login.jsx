import React, { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background" />
        {/*  className="h-screen object-cover" */}
      </div>
      <form className="absolute w-4/12 p-12 bg-black bg-opacity-75 text-white rounded-lg left-0 right-0 mx-auto my-36">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name..."
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email address..."
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          type="password"
          placeholder="password..."
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button className="p-4 my-6 w-full bg-red-700 rounded-md">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={() => setSignIn(!isSignIn)}>
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
