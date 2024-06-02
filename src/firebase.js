import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, 
        getAuth,
        signInWithEmailAndPassword,
        signOut
        }
        from "firebase/auth";
import { 
        addDoc,
        collection,
        getFirestore 
      } 
    from "firebase/firestore"; 
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBbTbouxcxFaOBSuPQ51GFKitE_NHIfQ5E",
  authDomain: "hitflix-clone.firebaseapp.com",
  projectId: "hitflix-clone",
  storageBucket: "hitflix-clone.appspot.com",
  messagingSenderId: "359159699575",
  appId: "1:359159699575:web:0059db943335aabcb18e72"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); 
const db = getFirestore(app); 

const signup = async(name,email,password)=>{
    try{
        const res=await createUserWithEmailAndPassword(auth,email,password);
        const user=res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,

        });
    }catch(error){
          console.log(error);
          toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}
const login=async(email,password)=>{
    try{
       await signInWithEmailAndPassword(auth,email,password);
       
    }catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }  
}
const logout = async()=>{
    signOut(auth);
}

export { 
    auth,
    db,
    login,
    signup,
    logout
 }; 

