import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import { BG_URL, userIcon } from "../utils/constants";
import { validateForm } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../ducks/userSlice";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [isError, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const message = validateForm(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    if (!isSignIn) {
      //SignUp logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: userIcon,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setError(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode);
        });
    } else {
      //SignIn logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_URL} alt="background" />
        {/*  className="h-screen object-cover" */}
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-4/12 p-12 bg-black bg-opacity-75 text-white rounded-lg left-0 right-0 mx-auto my-36"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        <p className="text-red-500 font-bold text-lg py-2 text-center">
          {isError}
        </p>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name..."
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address..."
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password..."
          className="p-4 my-4 w-full bg-gray-700"
        />
        <button
          className="p-4 my-6 w-full bg-red-700 rounded-md"
          onClick={handleLogin}
        >
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
