import AuthBG from "../assets/images/SideImage.png";
import BtnImg from "../assets/images/Google.png";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <>
      <Header />
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
                    className="w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300  "
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-[90vw] md:w-[370px] md:h-[32px] p-2 border-b border-b-gray-300 focus:border-"
                  />
                </form>

                <div className="flex flex-row items-center justify-between gap-4">
                  <button className="border-none rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer w-1/3 md:w-[148px] h-[56px]">
                    Log In
                  </button>
                  <p className="text-red-600 cursor-pointer hover:text-red-400">
                    Forget Password?
                  </p>
                </div>
                <div className="flex w-[90vw]  gap-5 justify-center items-center border-2 hover:bg-gray-100 hover:text-gray-400 border-black  rounded-md bg-white  text-center cursor-pointer  md:w-[371px] h-[56px]">
                  <img src={BtnImg} alt="" />
                  <p>Sign up with Google</p>
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
};
