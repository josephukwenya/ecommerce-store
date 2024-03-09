import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCM67Zfhuo0-0Kd5NqVhIiEay1XLed0iQw",
  authDomain: "crwn-clothing-db-649c5.firebaseapp.com",
  projectId: "crwn-clothing-db-649c5",
  storageBucket: "crwn-clothing-db-649c5.appspot.com",
  messagingSenderId: "510616012275",
  appId: "1:510616012275:web:9beff592882604402b7e86",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = new getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshop = await getDoc(userDocRef);

  if (!userSnapshop.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("Error creating the user", error.messages);
    }
  }
};
