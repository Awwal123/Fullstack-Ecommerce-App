import AuthBG from "../assets/images/SideImage.png";
import BtnImg from "../assets/images/Google.png";
import { Fade } from "react-awesome-reveal";
import { Link, useNavigate } from "react-router-dom";
import { auth, googleProvider, db } from "./config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HeroSection = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const saveToFirestore = async (uid: string, userData: object) => {
    try {
      const userDocRef = doc(db, "users", uid);
      const existingDoc = await getDoc(userDocRef);

      if (!existingDoc.exists()) {
        await setDoc(userDocRef, userData, { merge: true });
        console.log("User data saved to Firestore.");
      } else {
        console.log("User document already exists in Firestore.");
      }
    } catch (err) {
      console.error("Error saving user data to Firestore:", err);
      toast.error("Failed to save user data. Please try again.");
    }
  };

  const signIn = async () => {
    if (!name || !email || !password) {
      toast.error("Please fill in all the fields.");
      return;
    }

    try {
      const userCredential: UserCredential =
        await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log("User created:", user.email, "UID:", user.uid);

      // Save to Firestore with default empty arrays for cart, orders, and wishlist
      await saveToFirestore(user.uid, {
        name,
        email,
        cart: [{}],
        orders: [],
        wishlist: [],
      });

      localStorage.setItem("userUID", user.uid);
      console.log("Setting userUID in localStorage:", user.uid);

      toast.success("Account created successfully. Redirecting...");
      setTimeout(() => navigate("/home"), 2000); // Navigate after a delay
    } catch (err: any) {
      toast.error(err.message || "Failed to create account. Please try again.");
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log("Signed in with Google:", user.email, "UID:", user.uid);

      // Save Google user data to Firestore with default empty arrays
      await saveToFirestore(user.uid, {
        name: user.displayName || "Google User",
        email: user.email || "",
        cart: [],
        orders: [],
        wishlist: [],
      });

      toast.success("Signed in successfully. Redirecting...");
      setTimeout(() => navigate("/home"), 2000); 
    } catch (err: any) {
      toast.error(err.message || "Failed to sign in with Google.");
      console.error(err);
    }
  };


  return (
    <Fade direction="up" duration={2000} triggerOnce>
      <div className="w-full  mb-3 h-screen  md:pl-0   flex justify-between flex-col  md:flex-row  md:py-10 md:pr-16">
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="w-full mt-7  md:mt-0   md:w-1/2 ">
            <img src={AuthBG} alt="auth-bg" className="w-full h-[95%]" />
          </div>

          <div className=" flex  flex-col items-center  px-11 py-8 h-2/3 ">
            <div className="flex  flex-col md:gap-6">
              <h2 className="font-medium text-2xl md:text-4xl  md:tracking-widest">
                Create an account
              </h2>
              <p>Enter your details below</p>
            </div>
            <div className="mt-5 flex flex-col gap-10">
              <form className="mt-5 flex flex-col gap-10" action="">
                <input
                  type="text"
                  placeholder="Name"
                  className=" w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300  "
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Password"
                  className="w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </form>

              <div className="flex flex-col gap-5">
             <button className="border-none w-[90vw] rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  md:w-[371px] h-[56px]" onClick={signIn}>
                  Create Account
                </button>

                <div className="flex w-[90vw]  gap-5 justify-center items-center border-2 hover:bg-gray-100 hover:text-gray-400 border-black  rounded-md bg-white  text-center cursor-pointer  md:w-[371px] h-[56px]" onClick={signInWithGoogle}>
                  <img src={BtnImg} alt="" />
                  <p>Sign up with Google</p>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-gray-400 text-base">
                    Already have account?
                  </p>
                  <p className="font-medium text-base border-b pb-1 cursor-pointer hover:text-gray-400 border-b-gray-400 ">
                    <Link to={"/login"}> Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
