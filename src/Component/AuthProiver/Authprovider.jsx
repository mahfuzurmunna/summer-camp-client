import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
import app from "../../../firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Authprovider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // updateUserProfile
  const updateUserData = ( name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      
  };


  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (LoggedInUser) => {
      setUser(LoggedInUser);
      setLoading(false);

       if (LoggedInUser) {
         axios
           .post("https://hello-summer-server-two.vercel.app/jwt", {
             email: LoggedInUser.email,
           })
           .then((data) => {
             // console.log(data.data.token)
             localStorage.setItem("access-token", data.data.token);
             setLoading(false);
           });
       } else {
         localStorage.removeItem("access-token");
       }
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    registerUser,
    loginUser,
    logOutUser,
    googleLogin,
    setUser,
    loading,
    setLoading,
    updateUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
