import { useState } from "react";
import { useLocation } from "react-router-dom"; 
import Magnify from "../assets/images/Magnify.png";
import Hamburger from "../assets/images/hamburger.png";
import Closebtn from "../assets/images/CloseIcon.png";

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation(); 
  const { pathname } = location;

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  const isActive = (path: string) =>
    pathname === path ? "border-b-2 border-gray-500" : ""; 

  return (
    <div>
      <div className="bg-white w-full flex justify-between items-center px-5 py-3 md:py-4 md:px-16 relative">
        <div
          className={`fixed inset-0 bg-[#00000080] z-10 ${
            isNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsNavOpen(false)}
        ></div>

        <div className="flex  gap-4 items-center w-full md:w-auto">
          <img
            src={Hamburger}
            className="w-10 block md:hidden h-10 cursor-pointer"
            onClick={toggleNavbar}
          />

          <h1 className="font-bold text-2xl">Exclusive</h1>
        </div>

        <div className="hidden md:flex justify-between gap-7">
          <p
            className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
              "/home"
            )}`}
          >
            Home
          </p>
          <p
            className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </p>
          <p
            className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
              "/about"
            )}`}
          >
            About
          </p>
          <p
            className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
              "/signup"
            )}`}
          >
            SignUp
          </p>
        </div>

        <div className="relative hidden md:inline-block">
          <input
            type="text"
            className="border active:border-gray-200 w-[248px] h-[38px] font-thin px-3 rounded-md text-sm bg-[#F5F5F5] pr-10"
            placeholder="What are you looking for?"
          />
          <img
            src={Magnify}
            alt="magnify"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        {/* Navbar for small screens */}
        <div
          className={`fixed top-0 left-0 h-full p-8 bg-black z-20 w-[70%] transform transition-transform ${
            isNavOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between">
            <h1 className="font-bold text-white text-2xl">Exclusive</h1>
            <img
              src={Closebtn}
              alt="l"
              className="w-6 h-6"
              onClick={() => setIsNavOpen(false)}
            />
          </div>
          <div className="flex flex-col mt-6 h-full">
            <p
              className={`text-white text-lg py-2 ${isActive("/home")}`}
            >
              Home
            </p>
            <p
              className={`text-white text-lg py-2 ${isActive("/contact")}`}
            >
              Contact
            </p>
            <p
              className={`text-white text-lg py-2 ${isActive("/about")}`}
            >
              About
            </p>
            <p
              className={`text-white text-lg py-2 ${isActive("/signup")}`}
            >
              SignUp
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full border-1 border-gray-200" />
    </div>
  );
};
