import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";

import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    // .then((res) => {
    //   setLoading(true);
    //   console.log(res.user);
    //   setUser(res.user);
    // })
    // .catch((err) => console.log(err));
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    // .then((res) => {
    //   setLoading(true);
    //   console.log(res.user);
    //   setUser(res.user);
    // })
    // .catch((err) => console.log(err));
  };
  const registerWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
    // .then((res) => {
    //   setLoading(true);
    //   console.log(res.user);
    //   setUser(res.user);
    // })
    // .catch((err) => console.log(err));
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
    // .then(() => {
    //   setLogOutInfo("User logged out Successfully");
    // })
    // .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const unsubscribe = () => {
      onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        // ...

        console.log("current user", currentUser.email);
      });
    };
    return unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signInUser,
    registerWithGoogle,
    logOut,
    loading,

    // logOutInfo,
    user,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  user: PropTypes.object.isRequired,
  children: PropTypes.array.isRequired,
};

export default AuthProvider;
