import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./utils/fireBase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { Logo, SUPPORTED_LANGUAGES } from "./utils/Constants";
import { ToggleGptSearchView } from "./utils/gptSlice";
import { changeLanguage } from "./utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.Gpt.showGptSearch);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
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
        navigate("/Browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unSubscribe();
  }, []);

  const HandleGptSearch = () => {
    dispatch(ToggleGptSearchView());
  };

  const HandleChangelanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10  md:flex justify-between ">
        <img className="w-48 mx-auto md:mx-0 " src={Logo} alt="Logo" />

        {user && (
          <div className="flex justify-between md:p-2">
            {showGptSearch && (
              <select
                className=" p-1 m-2 md:p-2 md:m-2  rounded-lg bg-gray-900 text-white"
                onChange={HandleChangelanguage}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifer} value={lang.identifer}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              onClick={HandleGptSearch}
              className="bg-purple-800 text-white px-1 m-2 md:py-2 md:px-3 md:mx-2 md:my-2 rounded-lg"
            >
              {showGptSearch ? "Homepage" : " GPT Search"}
            </button>
            <img
              alt="img"
              className=" hidden   md:inline-block m-4 h-10"
              src={user?.photoURL}
            />
            <button
              onClick={handleLogOut}
              className=" text-black  bg-red-500 w-38 m-2 p-3 rounded-xl"
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
