import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";

import { auth } from "../utils/firebase";
import { LOGO, userIcon } from "../utils/constants";
import { addUser, removeUser } from "../ducks/userSlice";
import { setGptSearch } from "../ducks/gptSearchSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const { isGptSearch } = useSelector((store) => store.gptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 md:bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className="flex p-2 justify-center items-center">
          <button
            className="px-4 py-1 m-2 rounded-md text-white bg-purple-800"
            onClick={() => dispatch(setGptSearch())}
          >
            {isGptSearch ? "Browse Movie" : "GPT Search"}
          </button>
          <img
            title={user?.displayName}
            src={user.photoURL || userIcon}
            alt="userIcon"
            className="hidden md:block w-8 h-8 m-2 rounded-full"
          />
          <button onClick={handleSignOut} className="text-white font-bold">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
