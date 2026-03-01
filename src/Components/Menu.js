import { signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";

import {onAuthStateChanged } from "firebase/auth";
import {useDispatch } from "react-redux";
import { addUser , removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { LOGO } from "../Utils/constant";
import { userLOGO } from "../Utils/constant";
import { toggleGptSearch } from "../Utils/gptSlice";




const Menu = () => {

    const dispatch = useDispatch();
    const navigate= useNavigate();

    
    useEffect(() =>{

      const unsubscribe = onAuthStateChanged(auth, (user) => {
    
        if (user) {
          // User is signed in, see docs for a list of available properties
          const {uid , email , displayName , photoURL} = user;
          dispatch( addUser( {uid, email, displayName , photoURL} ) );
          navigate("/browse");
    
        } else {
          // User is signed out
          dispatch( removeUser());
          navigate("/");
    
        }
      });

      return ()=> unsubscribe();
      
     },[]);


    const handleSignOut = () => {
        signOut(auth).then(() => {
          // Sign-out successful.

        }).catch((error) => {
          // An error happened.
          navigate("/error");
        });
        
    };

    const handleGptSearchClick =( )=> {
          dispatch(toggleGptSearch());
    };


    return (
      <div className="w-screen px-16 py-1  bg-black bg-opacity-50 flex justify-between  fixed z-20 top-0 right-0 ">
        <img className=" w-28  h-16 " src={LOGO} alt="netflix logo" />

       <div className=" flex">
        <button onClick={handleGptSearchClick} className=" text-white  mx-10 w-28 hover:border-b-2 hover:border-white-600">GPT Search</button>

        <img className=" w-16 h-9  px-3 my-3 rounded-lg" src={userLOGO}  alt="user logo" />
        <button onClick={handleSignOut} className=" text-white  w-16 hover:border-b-2 hover:border-white-600">Sign out</button>
       </div>
      </div>
    )
  }
  
  export default Menu