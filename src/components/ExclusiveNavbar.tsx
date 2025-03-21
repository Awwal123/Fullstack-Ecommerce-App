import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Magnify from "../assets/images/Magnify.png";
import Hamburger from "../assets/images/hamburger.png";
import Closebtn from "../assets/images/CloseIcon.png";
import Cart from "../assets/images/Cart.png";
import User from "../assets/images/User.png";
import Mall from "../assets/images/mallbag.png";
import use from "../assets/images/use.png";
import logout from "../assets/images/logout.png";
import Cancel from "../assets/images/cancel.png";
import Review from "../assets/images/Reviews.png";
import { useCart } from "./CartContext";
import { auth } from './config/firebase';
import { signOut } from 'firebase/auth'; 


export const ExclusiveNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const navigate = useNavigate()
  const location = useLocation();
  const { pathname } = location;
  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleLogout = async () => {
    try {
      localStorage.removeItem('userUID'); 
      localStorage.removeItem('cartItems');
      localStorage.removeItem('wishlistItems');
      await signOut(auth);
      navigate('/login'); 
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const toggleDropDown = () => {
    setIsDropDownOpen((prevState) => !prevState);
  };
  const { cartItems } = useCart();

  const totalCartItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isActive = (path: string) =>
    pathname === path ? "border-b-2 border-gray-500" : "";

  const userActive = (path: string) =>
    pathname === path ? "bg-customRed rounded-full  w-6 h-6" : "";

  const cartActive = (path: string) => 
    pathname === path ? "opacity-0" : "";
  return (
    <div>
      <div className="bg-white w-full flex justify-between items-center px-5 py-3 md:py-4 md:px-16 relative">
        <div
          className={`fixed inset-0 bg-[#00000080] z-10 ${
            isNavOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsNavOpen(false)}
        ></div>

        <div className="flex gap-4 items-center w-full md:w-auto">
          <img
            src={Hamburger}
            className="w-10 block md:hidden h-10 cursor-pointer"
            onClick={toggleNavbar}
          />
          <h1 className="font-bold text-2xl">Exclusive</h1>
        </div>

        <div className="hidden md:flex items-center  justify-between gap-7">
          <Link to={"/home"}>
            <p
              className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
                "/home"
              )}`}
            >
              Home
            </p>
          </Link>
          <Link to={"/contact"}>
            {" "}
            <p
              className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
                "/contact"
              )}`}
            >
              Contact
            </p>
          </Link>
          <Link to={"/shop"}>
            {" "}
            <p
              className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
                "/shop"
              )}`}
            >
              Shop
            </p>
          </Link>
          <Link to={"/about-us"}>
            <p
              className={`text-base font-normal cursor-pointer hover:text-gray-400 ${isActive(
                "/about-us"
              )}`}
            >
              About
            </p>
          </Link>
        </div>

        <div className="flex gap-3 ">
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
          <div className="flex justify-center items-center gap-3">
            <Link to={"/cart"}>
              {" "}
              <div className="relative">
                <img src={Cart} alt="c" className="w-6 h-6 cursor-pointer" />
                <p className={`absolute top-0 right-0 translate-x-1/2 -translate-y-1/3 cursor-pointer w-4 h-4 text-center text-xs bg-[#DB4444] text-white rounded-full ${cartActive("/cart")}`}>
                  {totalCartItems}
                </p>
              </div>
            </Link>

            <div className="relative">
              <img
                src={User}
                alt="u"
                className={`w-6 h-6 hover:bg-[#DB4444] hover:rounded-full cursor-pointer ${userActive(
                  "/account"
                )}`}
                onClick={toggleDropDown}
              />
              {isDropDownOpen && (
                <div className="absolute top-full text-white text-sm justify-between right-2 w-[225px] h-[208px] bg-slate-500 z-50 rounded-lg flex flex-col px-2 py-1 mt-4 transition-transform duration-300">
                  <div className="flex justify-between">
                    <p></p>
                    <img
                      src={Closebtn}
                      alt=""
                      className="w-5 h-5 cursor-pointer"
                      onClick={toggleDropDown}
                    />
                  </div>
                  <Link to={"/account"}>
                    {" "}
                    <div className="flex items-center cursor-pointer gap-2 ">
                      <img src={use} alt="" className="w-7 h-7" />
                      <p>Manage My Account</p>
                    </div>
                  </Link>

                  <div className="flex items-center cursor-pointer gap-2 ">
                    <img src={Mall} alt="" className="w-5 h-5" />
                    <p>My Order</p>
                  </div>

                  <div className="flex items-center cursor-pointer gap-2 ">
                    <img src={Cancel} alt="" className="w-5 h-5" />
                    <p>My Cancellations</p>
                  </div>

                  <div className="flex items-center cursor-pointer gap-2 ">
                    <img src={Review} alt="" className="w-5 h-5" />
                    <p>My Reviews</p>
                  </div>
                  <div onClick={handleLogout} className="flex items-center cursor-pointer gap-2 ">
                    <img src={logout} alt="" className="w-7 h-7" />
                    <p>Logout</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navbar for small screens */}
        {/* dont do anything for this, don't touch it  */}
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
          <div className="flex flex-col  mt-6 h-full">
            <p className="text-white text-lg py-2 cursor-pointer">Home</p>
            <Link to={"/contact"}>
              {" "}
              <p className="text-white text-lg py-2 cursor-pointer">
                Contact
              </p>{" "}
            </Link>
            <Link to={"/about-us"}>
              {" "}
              <p className="text-white text-lg py-2 cursor-pointer">
                About
              </p>{" "}
            </Link>
            <Link to={"/shop"}>
              <p className="text-white text-lg py-2 cursor-pointer">Shop</p>
            </Link>
            <p className="text-white text-lg py-2 cursor-pointer">
              Woman’s Fashion
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Men’s Fashion
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Electronics
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Home & Lifestyle
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">Medicine</p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Sports & Outdoor
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Groceries & Pets
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Baby’s & Toys
            </p>
            <p className="text-white text-lg py-2 cursor-pointer">
              Health & Beauty
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full border-1 border-gray-200" />
    </div>
  );
};
