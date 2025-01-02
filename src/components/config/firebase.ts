import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmWVT1DdmYfsnHbyTM4NZF5Rn9QI-OXfM",
  authDomain: "my-ecommerce-app-89d74.firebaseapp.com",
  projectId: "my-ecommerce-app-89d74",
  storageBucket: "my-ecommerce-app-89d74.firebasestorage.app",
  messagingSenderId: "500604663590",
  appId: "1:500604663590:web:f7b6a13f0ea8e89e5333e7",
  measurementId: "G-JCP1CPMRPG",
};

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app); 

/**
 * Utility function to initialize a user's Firestore document.
 * Ensures the structure is correct with arrays for cart, orders, and wishList.
 * @param userId 
 * @param email 
 * @param name 
 */
export const initializeUserDocument = async (
  userId: string, 
  email: string,  
  name: string    
): Promise<void> => { 
  const userDocRef = doc(db, "users", userId);

  try {
    await setDoc(
      userDocRef,
      {
        email: email,
        name: name,
        cart: [], 
        orders: [], 
        wishList: [] 
      },
      { merge: true } // Use merge to avoid overwriting existing data
    );
    console.log("User document initialized successfully!");
  } catch (error) {
    console.error("Error initializing user document: ", error);
  }
};

/**
 * Utility function to update the user's cart.
 * @param userId - The user's unique ID.
 * @param cartItems - The cart items to save.
 */
export const updateCart = async (
  userId: string,       
  cartItems: any[]      
): Promise<void> => {    
  const userDocRef = doc(db, "users", userId);

  try {
    await setDoc(userDocRef, { cart: cartItems }, { merge: true });
    console.log("Cart updated successfully!");
  } catch (error) {
    console.error("Error updating cart: ", error);
  }
};
