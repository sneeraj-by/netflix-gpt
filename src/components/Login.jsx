import React, { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "./Header";
import { BG_URL, userIcon } from "../utils/constants";
import { validateForm } from "../utils/validateForm";
import { auth } from "../utils/firebase";
import { addUser } from "../ducks/userSlice";

const Login = () => {
  const [isSignIn, setSignIn] = useState(true);
  const [isError, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleLogin = () => {
    const message = validateForm(email.current.value, password.current.value);
    setError(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
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
            })
            .catch((error) => {
              setError(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorCode);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
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
        <img className="h-screen w-screen object-cover" src={BG_URL} alt="background" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute md:w-4/12 p-12 bg-black bg-opacity-75 text-white rounded-lg left-0 right-0 my-28 md:mx-auto mx-4"
      >
        <h1 className="font-bold text-3xl py-2">
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
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address..."
          className="p-4 my-2 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="password..."
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button
          className="p-4 my-2 w-full bg-red-700 rounded-md"
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
