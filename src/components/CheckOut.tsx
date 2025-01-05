import { Fade } from "react-awesome-reveal";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import Pad from "../assets/images/WiredPad.png";
import Monitor from "../assets/images/GamingMonitor.png";
import Bkash from "../assets/images/Bkash.png";
import Visa from "../assets/images/Visa.png";
import Master from "../assets/images/Mastercard.png";
import Nagad from "../assets/images/Nagad.png";

export const CheckOut = () => {
  return (
    <>
      <ExclusiveNavbar />
      <Fade direction="up" duration={2000} triggerOnce>
        <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
          <div className="flex text-sm  gap-4 ">
            <p className="text-gray-500 md:block hidden">Account </p>
            <p className="text-gray-500 md:block hidden">/</p>
            <p className="text-gray-500 md:block hidden">My Account </p>
            <p className="text-gray-500 md:block hidden">/</p>
            <p className="text-gray-500">Product </p>
            <p className="text-gray-500">/</p>
            <p className="text-gray-500">View Cart </p>
            <p className="text-gray-500">/</p>
            <p>CheckOut</p>
          </div>

          <div className="flex gap-9 md:flex-row flex-col my-9 justify-between w-full">
            <div className="flex flex-col gap-5 md:w-[50%] w-full">
              <h1 className="font-medium text-3xl">Billing Details</h1>

              <div className="flex flex-col w-full my-3 gap-6">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    First Name<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    Street Address<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    Apartment, floor, etc. (optional)
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    Town/City<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    Phone Number<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-gray-400">
                    Email Address<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <input type="checkbox" className="appearance-none border border-gray-300 rounded-md h-6 w-6 bg-gray-100 cursor-pointer checked:bg-customRed checked:border-customRed focus:outline-none focus:ring-2 focus:ring-customRed checked:icon-check" />
                <p>Save this information for faster check-out next time</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:my-24 w-full md:w-[50%] ">
              <div className="flex gap-10 flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <img src={Pad} alt="" className="w-[54px] h-[54px]" />

                    <p>LCD Monitor</p>
                  </div>
                  <p>$650</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center">
                    <img src={Monitor} alt="" className="w-[54px] h-[54px]" />
                    <p>H1 Gamepad</p>
                  </div>
                  <p>$1110</p>
                </div>
              </div>
              <div>
                <div className="mt-5">
                  <div className="flex justify-between items-center">
                    <p>Subtotal:</p>
                    <p>$650</p>
                  </div>
                  <hr className="border my-4 border-gray" />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p>Shipping:</p>
                    <p>Free</p>
                  </div>
                  <hr className="border my-4 border-gray" />
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <p>Total:</p>
                    <p>$1170</p>
                  </div>
                  <hr className="border my-4 border-gray" />
                </div>
                <div className="mt-9">
                  <div className="flex md:flex-row  justify-between items-center">
                    <div className="flex  gap-4">
                      <input
                        type="checkbox"
                        name="Bank"
                        id=""
                        className="appearance-none border cursor-pointer border-gray-300 rounded-full h-6 w-6 bg-white checked:bg-customRed checked:border-customRed focus:outline-none"
                      />
                      <p>Bank</p>
                    </div>
                    <div className="flex gap-3">
                      <img src={Bkash} alt="b" className="" />
                      <img src={Visa} alt="b" className="" />
                      <img src={Master} alt="b" className="" />
                      <img src={Nagad} alt="b" className="" />
                    </div>
                  </div>

                  <div className="flex justify-between mt-7">
                    <input
                      placeholder="Coupon Code"
                      type="text"
                      className="md:w-[300px] w-[35vw] h-[56px]  rounded-sm  border-black border md:pl-4 pl-2 text-gray-500"
                    />
                    <div className="flex items-center justify-center cursor-pointer hover:bg-[#E07575] bg-customRed text-white rounded-sm w-[35vw] md:w-[211px] h-[56px]">
                      Apply Coupon
                    </div>
                  </div>
                  <div className=" md:mt-7 mt-5 flex items-center justify-center cursor-pointer hover:bg-[#E07575] bg-customRed text-white rounded-sm w-[35vw] md:w-[211px] h-[56px]">
                    Place Order
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
