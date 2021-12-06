import initializeFirebase from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";


initializeFirebase();
const useFirebase=()=>{
    const [user,setUser]=useState({})
    const [isloading,setIsloading ]=useState(true);
    const [autherror,setAutherror]=useState('');


    const auth=getAuth();
    const resgisterUser=(email,password,history,location)=>{
      setIsloading(true)
      console.log(email,password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination=location?.state?.from ||'/';
          history.replace(destination);
            setAutherror('')
            
          })
          .catch((error) => {
            setAutherror(error.message);
            
          })
          .finally(()=>setIsloading(false));

    }



    //obserbe user state
    useEffect(() => {
       const unsubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
             setUser({})
            }
            setIsloading(false)
          });
          return()=>unsubscribe;
    }, [])


    //login user 
    const loginUser=(email,password)=>{
      setIsloading(true)
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAutherror('');

      })
      .catch((error) => {
        setAutherror(error.message);
      })
      .finally(()=>setIsloading(false));
    
    }


    //logOut user
    const logout=()=>{ 
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>setIsloading(false));
    }



return {
    user,
    resgisterUser,
    logout,
    loginUser,
    isloading,
    autherror
}
}
export default useFirebase;