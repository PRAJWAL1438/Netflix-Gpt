import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "./utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/fireBase";
import { useDispatch } from "react-redux";
import { addUser } from "./utils/userSlice";
import { BgImg, photoURL } from "./utils/Constants";

const Login = () => {
  const [isSignInForm, getIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleIsSignForm = () => {
    getIsSignForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const message = checkValidate(
      email.current?.value,
      password.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up

      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: photoURL,
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
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}--${errorMessage}`);
        });
    } else {
      //Sign In
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}--${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen object-cover  md:w-screen"
          src={BgImg}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-full   absolute  md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-80"
      >
        <h1 className="  text-sm md:text-xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full text-white bg-gray-600"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-2 my-2 w-full text-white bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="PassWord"
          className="p-2 my-2 w-full text-white bg-gray-600"
        />
        <p className="text-red-500 text-sm font-bold">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className=" p-3 my-4 bg-red-700 w-full"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer  text-sm" onClick={toggleIsSignForm}>
          {isSignInForm
            ? "New To Netflex? Sign Up Now"
            : "Already registred? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
