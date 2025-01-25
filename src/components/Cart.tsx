import { ExclusiveNavbar } from "./ExclusiveNavbar";
// import gm from "../assets/images/GamingMonitor.png";
import cancle from "../assets/images/CancelBtn.png";
import up from "../assets/images/DropUp.png";
import down from "../assets/images/DropDown.png";
import { useCart } from "./CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  const navigate = useNavigate();

  const proceedToCheckout = () => {
    navigate ('/checkout')
  }
  return (
    <>
      <ExclusiveNavbar />
      <Fade direction="up" duration={2000} triggerOnce>
      <div className=" w-full  px-3 py-3 md:py-4 md:px-16">
        <div className="flex text-sm my-4 md:my-7 gap-4">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p>Cart</p>
        </div>

        <div className="w-full flex flex-col md:h-[600px] h-[85%] overflow-y-auto gap-5">
          <div className=" hidden md:flex justify-between bg-white px-8 py-2 w-full h-[100px] items-center  shadow-customShadow">
            <p className="w-[25%]">Product</p>
            <p className="w-[25%]">Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="flex justify-center items-center gap-3 md:hidden">
            <h3 className="font-semibold text-lg">Total:</h3>
            <p className="text-lg">${total.toFixed(2)}</p>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="flex justify-between bg-white md:px-8 py-2 mb-5 rounded-md px-2 w-full h-[102px] items-center  shadow-lg"
                key={item.id}
              >
                <div className="relative flex gap-4 md:w-[25%]">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-12 h-10"
                  />
                  <img
                    src={cancle}
                    alt="Cancel"
                    className="w-5 h-5 absolute -top-1 left-0 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                  <h3 className="text-base mr-2 hidden md:block font-normal">
                    {item.name}
                  </h3>
                  <div className="flex md:hidden flex-col gap-1">
                    <p className="text-xs">{item.name}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Desktop Price */}

                <p className="hidden md:block w-[25%]">
                  ${item.price.toFixed(2)}
                </p>

                {/* Desktop Quantity Controls */}
                <div className="hidden md:flex  items-center justify-between px-3 border border-gray-500 rounded-md w-[74px] h-11">
                  <p>{item.quantity}</p>
                  <div className="flex flex-col gap-1">
                    <img
                      src={up}
                      alt="Increase"
                      className="w-5 cursor-pointer h-5"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                    <img
                      src={down}
                      alt="Decrease"
                      className="w-5 cursor-pointer h-5"
                      onClick={() =>
                        item.quantity > 1 &&
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    />
                  </div>
                </div>

                {/* Desktop Subtotal */}
                <p className="hidden md:block">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Mobile Quantity Controls */}
                <div className="flex md:hidden items-center gap-4">
                  <div
                    className="bg-gray-400 text-black w-6 justify-center flex text-lg items-center cursor-pointer h-8 rounded-md"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </div>

                  <div>{item.quantity}</div>

                  <div
                    className="bg-gray-400 text-black w-6 justify-center flex text-lg items-center cursor-pointer h-8 rounded-md"
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="mt-5 text-center text-3xl text-red-600">Your cart is empty!</h1>
          )}
        </div>

        <div className="w-full flex my-6 justify-between">
          <Link to={"/shop"}>
            {" "}
            <div className="md:w-[218px] w-[35vw] h-[56px] rounded-sm flex items-center justify-center border-black border">
              Return To Shop
            </div>
          </Link>

          <Link to={"/home"}>
            {" "}
            <div className="md:w-[195px]  w-[35vw] h-[56px] rounded-sm flex items-center justify-center border-black border">
              Update Cart
            </div>
          </Link>
        </div>

            
        <div className="flex md:flex-row w-full flex-col gap-6  justify-between my-10 pb-9">
          
          <div className="flex justify-between gap-2">
            <input
              placeholder="Coupon Code"
              type="text"
              className="md:w-[300px] w-[35vw] h-[56px]  rounded-sm  border-black border md:pl-4 pl-2 text-gray-500"
            />
            <div className="flex items-center justify-center cursor-pointer hover:bg-[#E07575] bg-customRed text-white rounded-sm w-[35vw] md:w-[211px] h-[56px]">
              Apply Coupon
            </div>
          </div>
          
            <div className="md:w-[470px] flex-col   w-full h-[324px] rounded-sm border-black border py-5 px-3">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-medium">Cart</h3>

              <div className=" flex mt-3 justify-between">
                <p className="text-base font-normal">Subtotal:</p>
                <p className="">${total.toFixed(2)}</p>
              </div>
              <hr className="border border-1 mt-2" />

              <div className=" flex mt-3 justify-between">
                <p className="text-base font-normal">Shipping:</p>
                <p className="">Free</p>
              </div>
              <hr className="border  border-1 mt-2" />

              <div className=" flex mt-3 justify-between">
                <p className="text-base font-normal">Total:</p>
                <p className="">${total.toFixed(2)}</p>
              </div>

              <div onClick={proceedToCheckout} className="flex items-center mx-auto cursor-pointer justify-center hover:bg-[#E07575] bg-customRed text-white rounded-sm w-[211px] h-[56px]">
                Proceed to checkout
              </div>
            </div>
          </div>
         
         
        </div>
      </div>
      </Fade>
    </>
  );
};
