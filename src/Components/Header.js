
import {onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import {useDispatch } from "react-redux";
import { addUser , removeUser } from "../Utils/userSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../Utils/constant";


const Header = () => {

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

  return (
    <div className="absolute px-14 py-2 z-50">
      <img className="w-40 h-24 " src={LOGO} alt="netflix logo" />
    </div>
  )
}

export default Header