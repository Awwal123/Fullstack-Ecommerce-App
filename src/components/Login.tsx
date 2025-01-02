import AuthBG from "../assets/images/SideImage.png";
import BtnImg from "../assets/images/Google.png";
import { Navbar } from "./Navbar";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { auth, googleProvider } from "./config/firebase";
import { db } from "./config/firebase"; // Firestore configuration
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import { useState } from "react";


  interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imgUrl: string;
  }
  
  export const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { setCartItems } = useCart(); // Update cart state
    const navigate = useNavigate();
  
    // Save user data to local storage
    const saveToLocalStorage = (user: User) => {
      localStorage.setItem("userUID", user.uid);
      localStorage.setItem("userEmail", user.email || "");
      localStorage.setItem("userName", user.displayName || "User");
    };
  
    // Fetch cart items from Firestore
    const fetchUserCartFromFirestore = async (userUID: string) => {
      try {
        const cartCollection = collection(db, "carts");
        const userCartQuery = query(cartCollection, where("userId", "==", userUID));
        const querySnapshot = await getDocs(userCartQuery);
  
        const cartItems: CartItem[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: data.id,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            imgUrl: data.imgUrl,
          } as CartItem;
        });
  
        setCartItems(cartItems); // Update cart context
      } catch (err) {
        console.error("Error fetching cart from Firestore:", err);
        toast.error("Failed to fetch cart data. Please try again later.");
      }
    };
  
    // Fetch user data from Firestore
    const fetchUserDataFromFirestore = async (userUID: string) => {
      try {
        const userDocRef = collection(db, "users");
        const userQuery = query(userDocRef, where("uid", "==", userUID));
        const querySnapshot = await getDocs(userQuery);
  
        const userData = querySnapshot.docs.map((doc) => doc.data())[0];
        if (userData) {
          console.log("User data fetched:", userData);
          return userData;
        } else {
          throw new Error("User data not found.");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        toast.error("Failed to fetch user data. Please try again later.");
      }
    };
  
    // Handle login with email and password
    const handleLogin = async () => {
      if (!email || !password) {
        toast.error("Please enter both email and password.");
        return;
      }
  
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        console.log("Logged in user:", user);
        saveToLocalStorage(user);
        await fetchUserCartFromFirestore(user.uid);
        await fetchUserDataFromFirestore(user.uid);
  
        toast.success("Login successful! Redirecting...");
        navigate("/home");
      } catch (err) {
        if (err instanceof FirebaseError) {
          switch (err.code) {
            case "auth/user-not-found":
              toast.error("No account found with this email.");
              break;
            case "auth/wrong-password":
              toast.error("Incorrect password.");
              break;
            default:
              toast.error("An error occurred. Please try again.");
          }
        } else {
          toast.error("An unexpected error occurred.");
        }
      }
    };
  
    // Handle Google login
    const handleGoogleLogin = async () => {
      try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
  
        console.log("User signed in with Google:", user);
        saveToLocalStorage(user);
        await fetchUserCartFromFirestore(user.uid);
        await fetchUserDataFromFirestore(user.uid);
  
        toast.success("Login successful! Redirecting...");
        navigate("/home");
      } catch (err) {
        if (err instanceof FirebaseError) {
          console.error(err.message);
        } else {
          toast.error("An unexpected error occurred. Please try again.");
        }
        console.error(err);
      }
    };
  
  return (
    <>
      <Navbar />
      <Fade direction="up" duration={2000} triggerOnce>
        <div className="w-full  mb-3 h-screen  md:pl-0   flex justify-between flex-col  md:flex-row  md:py-10 md:pr-16">
          <div className="flex flex-col md:flex-row justify-between w-full">
            <div className="w-full mt-7  md:mt-0   md:w-1/2 ">
              <img src={AuthBG} alt="auth-bg" className="w-full h-[95%]" />
            </div>

            <div className=" flex  flex-col items-center  px-11 py-8 h-2/3 ">
              <div className="flex  flex-col md:gap-6">
                <h2 className="font-medium text-2xl md:text-4xl  md:tracking-widest">
                  Log in to Exclusive
                </h2>
                <p>Enter your details below</p>
              </div>
              <div className="mt-5 flex flex-col gap-10">
                <form className="mt-5 flex flex-col gap-10" action="">
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300  "
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300 focus:border-"
                  />
                </form>

                <div className="flex flex-row items-center justify-between gap-4">
                  <button
                    className="border-none rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer w-1/3 md:w-[148px] h-[56px]"
                    onClick={handleLogin}
                  >
                    Log In
                  </button>
                  <p className="text-red-600 cursor-pointer hover:text-red-400">
                    Forget Password?
                  </p>
                </div>
                <div
                  className="flex w-[90vw]  gap-5 justify-center items-center border-2 hover:bg-gray-100 hover:text-gray-400 border-black  rounded-md bg-white  text-center cursor-pointer  md:w-[371px] h-[56px]"
                  onClick={handleGoogleLogin}
                >
                  <img src={BtnImg} alt="" />
                  <p>Sign in with Google</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-gray-400 text-base">
                    Don't have an account?
                  </p>
                  <p className="font-medium text-base border-b pb-1 cursor-pointer hover:text-gray-400 border-b-gray-400 ">
                    <Link to={"/signup"}> SignUp</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
   );
}
