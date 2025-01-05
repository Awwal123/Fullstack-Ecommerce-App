import { ExclusiveNavbar } from "./ExclusiveNavbar";
import four from "../assets/images/FourStar.png";
import Delivery from "../assets/images/delivery.png";
import Returns from "../assets/images/return.png"
import Sneaker from "../assets/images/MenFahsionShoe.png";

export const ProductDetails = () => {
  return (
    <>
      <ExclusiveNavbar />

      <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
        <div className="flex text-sm  gap-4 ">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p className="text-gray-500">Fashion </p>
          <p className="text-gray-500">/</p>
          <p>Men Casual Sneakers</p>
        </div>

        <div className=" my-9 flex justify-between w-full md:flex-row flex-col gap-9 ">
          <div className="bg-gray-200 w-full h-auto md:w-[500px] rounded-md px-4 flex items-center justify-center md:h-[600px]">
            <img
              src={Sneaker}
              alt=""
              className="md:[446px] md:h-[315px] h-auto w-full"
            />
          </div>
          <div className="flex w-full md:w-[40%] flex-col gap-4">
            <h1 className="font-semibold text-2xl tracking-wider">
              Havic HV G-92 Gamepad
            </h1>
            <div className="flex gap-4">
              <img src={four} alt="" />
              <p>
                (150 Reviews) |{" "}
                <span className="text-green-500"> In Stock</span>
              </p>
            </div>
            <p className="text-2xl tracking-wider">$192.00</p>
            <p className="text-sm w-full md:w-[373px] leading-6">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </p>

            <hr className="border border-black md:w-[90%] w-full " />

            <div className="my-7 flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  w-[165px] h-[56px]">
              Buy Now
            </div>
            <div className="w-full md:w-[399px] h-auto border flex flex-col gap-3 border-black p-4">
                <div className="flex items-center  gap-3">
                    <img src={Delivery} alt="" className="w-10 h-10"/> 
                    <div className="flex flex-col gap-2">
                        <p className="font-medium">Free Delivery</p>
                        <p className="text-xs pb-2   border-b-black">Enter your postal code for Delivery Availability</p>
                    </div>
                </div>

<hr className="border border-black"/>
                <div className="flex items-center  gap-3">
                    <img src={Returns} alt="" className="w-10 h-10"/> 
                    <div className="flex flex-col gap-2">
                        <p className="font-medium">Return Delivery</p>
                        <p className="text-xs pb-2   border-b-black">Free 30 Days Delivery Returns. Details</p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};
