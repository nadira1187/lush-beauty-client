/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth ,createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
export const AuthContext =createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] =useState(null);
    const[loading,setLoading] =useState(true)
    const createUser=(email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
          displayName,
          photoURL,
        })
          .then(() => {
            setUser(auth.currentUser);
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      };
    const logOut =() =>{
        setLoading(true)
        return signOut(auth)
    }
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth,createUser =>
            {console.log("user in authstate",createUser);
        setUser(createUser);
        setLoading(false)});
        return() => {
            unsubscribe();
        }
    },[]);
   
    const authinfo ={
            user,loading,
            createUser,logOut,signIn,updateUser
     }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;