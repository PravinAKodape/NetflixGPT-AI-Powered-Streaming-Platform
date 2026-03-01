import Header from "./Header";
import { useState, useRef } from "react";
import { checkValidData } from "../Utils/validate";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { auth } from "../Utils/firebase";
import {useDispatch } from "react-redux";
import { addUser} from "../Utils/userSlice";


const LogIn = () => {
  const [isSignIn, SetIsSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState();

  const dispatch = useDispatch();
 
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => { SetIsSignIn(!isSignIn) };

  const handleButtonClick = () => {
    // console.log( email);
    // console.log( password );

    const message = checkValidData(email.current.value, password.current.value);
    SetErrorMessage(message);

    if (message) return; //error message is there already

    //sign in sign up user

    if (!isSignIn) {
      //This is Sign up user

      createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {

          // Signed up
          const user = userCredential.user;
          //console.log(user);

          updateProfile(user, {
            displayName: name.current.value , photoURL: "https://occ-0-4344-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
          }).then(() => {
            // Profile updated!
             
            const {uid , email , displayName , photoURL} = auth.currentUser;
            dispatch( addUser( {uid, email, displayName , photoURL} ) );

          }).catch((error) => {
            // An error occurred
            SetErrorMessage(error.message);
          });

         

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage((errorCode &&errorMessage) ? `User can't register, Please try again`: "");
        });
    } else {
      //This is Sign in user

      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          //console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          SetErrorMessage((errorCode &&errorMessage) ? `User not found, Please sign up`: "");
        });
    }
  };

  return (
    <div>
      <Header />

      <div className=" absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="This is netflis login image"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 text-white  my-48 mx-auto right-0 left-0  p-14 bg-black bg-opacity-70"
        rounded
      >
        <h1 className=" font-bold text-3xl pb-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className=" p-3 my-4 w-full rounded  bg-black bg-opacity-20 border border-gray-400"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className=" p-3 my-4 w-full rounded  bg-black bg-opacity-20 border border-gray-400"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" p-3 my-4 w-full rounded  bg-black bg-opacity-20 border border-gray-400"
        />

        <p className=" text-red-700">{errorMessage}</p>

        <button
          className=" p-2 my-6 w-full bg-red-700 rounded"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        {isSignIn && <p className=" flex justify-center">OR</p>}

        {isSignIn && (
          <button className=" p-2 my-4 w-full bg-gray-600 rounded">
            Use a sign-in code
          </button>
        )}

        <p onClick={toggleSignIn}>
          <span className=" text-gray-500">
            {isSignIn ? "New to Netflix?" : "Already a user?"}
          </span>
          <span className=" font-bold hover:cursor-pointer hover:border-b-2 hover:border-white-600">
            {isSignIn ? "Sign up now." : "Sign in now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
