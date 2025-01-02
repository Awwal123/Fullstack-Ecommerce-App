import { ExclusiveNavbar } from "./ExclusiveNavbar";
import gm from "../assets/images/GamingMonitor.png";
import cancle from "../assets/images/CancelBtn.png";
import up from "../assets/images/DropUp.png";
import down from "../assets/images/DropDown.png";
export const Cart = () => {
  return (
    <>
      <ExclusiveNavbar />
      <div className=" w-full h-screen  px-3 py-3 md:py-4 md:px-16">
        <div className="flex text-sm my-4 md:my-7 gap-4">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p>Cart</p>
        </div>

        <div className="w-full flex flex-col h-2/3 overflow-y-auto gap-3">
          <div className=" hidden md:flex justify-between bg-white px-8 w-full h-14 items-center bg shadow-lg">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="flex justify-center items-center gap-3 md:hidden">
            <h3 className="font-semibold text-lg">Total:</h3>
            <p className="text-lg">$$12</p>
          </div>

          <div className="flex justify-between bg-white md:px-8 px-2 w-full h-14 items-center bg shadow-lg">
            <div className="relative flex  gap-4">
              <img src={gm} alt="gm" className="w-12 h-10" />
              <img
                src={cancle}
                alt="Cancel"
                className="w-5 h-5 absolute -top-1 -left-3 cursor-pointer"
              />
              <div className="flex md:hidden flex-col gap-1">
                <p className="text-xs">Monitor</p>
                <p>$350px</p>
              </div>
            </div>

            <p className="hidden md:block">$650</p>
            <div className="hidden md:flex items-center justify-between px-3 border border-gray-500 rounded-md  w-[74px] h-11">
              <p>01</p>
              <div className="flex flex-col gap-1">
                <img src={up} alt="" className="w-5 cursor-pointer h-5" />
                <img src={down} alt="" className="w-5 cursor-pointer h-5" />
              </div>
            </div>
            <p className="hidden md:block">$650</p>
            <div className="flex md:hidden items-center  gap-4">
              <div className="bg-gray-400 text-black w-6 justify-center  flex text-lg items-center cursor-pointer h-8 rounded-md">
                +
              </div>

              <div>3</div>
              <div className="bg-gray-400 text-black w-6 justify-center  flex text-lg items-center cursor-pointer h-8 rounded-md">
                -
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
