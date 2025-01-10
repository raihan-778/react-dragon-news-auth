import React, { useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';

const AuthProvider = () => {
    const [user,setUser]=useState(null)
    

    const auth=getAuth(app)

   const registerWithEmail=(email,password)=>{

createUserWithEmailAndPassword(auth,email,password).
    then(res=>{
        console.log(res.user)
        setUser(res.user)
    }).
    catch(err=>console.log(err))

   }





   const unsubscribe=()=>{
    onAuthStateChanged(auth, (user) => {
        if (user.uid) {
        
          setUser(user)
          // ...
        } else {
         console.error("User Not Found")
        }
      }
      
    )
    return unsubscribe()
     
        

   }
   



        


    return (
        <div>
           <h2> This is auth provider</h2>
        </div>
    );
};

export default AuthProvider;