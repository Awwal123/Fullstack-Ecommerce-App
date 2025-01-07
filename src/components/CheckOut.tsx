import { Fade } from "react-awesome-reveal";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import Bkash from "../assets/images/Bkash.png";
import Visa from "../assets/images/Visa.png";
import Master from "../assets/images/Mastercard.png";
import Nagad from "../assets/images/Nagad.png";
import { useCart } from "./CartContext";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

export const CheckOut = () => {
  const { cartItems, total } = useCart();

  const firstNameRef = useRef<HTMLInputElement>(null);
  const streetAddressRef = useRef<HTMLInputElement>(null);
  const townCityRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);


  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = () => {
    if (isSubmitting) return; 
    setIsSubmitting(true); 

    const isValid =
      firstNameRef.current?.value &&
      streetAddressRef.current?.value &&
      townCityRef.current?.value &&
      phoneRef.current?.value &&
      emailRef.current?.value;

    if (!isValid) {
      toast.error("Please fill in all required fields.");
      setIsSubmitting(false); 
      return;
    }

    
    toast.success("Hooray! Your order is on its way.");

  
    if (firstNameRef.current) firstNameRef.current.value = "";
    if (streetAddressRef.current) streetAddressRef.current.value = "";
    if (townCityRef.current) townCityRef.current.value = "";
    if (phoneRef.current) phoneRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";

    setIsSubmitting(false); 
  };
  return (
    <>
      <ExclusiveNavbar />
      <Fade direction="up" duration={2000} triggerOnce>
        <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
          {/* Breadcrumb */}
          <div className="flex text-sm gap-4">
            <p className="text-gray-500 md:block hidden">Account</p>
            <p className="text-gray-500 md:block hidden">/</p>
            <p className="text-gray-500 md:block hidden">My Account</p>
            <p className="text-gray-500 md:block hidden">/</p>
            <p className="text-gray-500">Product</p>
            <p className="text-gray-500">/</p>
            <p className="text-gray-500">View Cart</p>
            <p className="text-gray-500">/</p>
            <p>CheckOut</p>
          </div>

      
          <div className="flex gap-9 md:flex-row flex-col my-9 justify-between w-full">
            <div className="flex flex-col gap-5 md:w-[50%] w-full">
              <h1 className="font-medium text-3xl">Billing Details</h1>

              <div className="flex flex-col w-full my-3 gap-6">
              
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName" className="text-gray-400">
                    First Name<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    ref={firstNameRef}
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="streetAddress" className="text-gray-400">
                    Street Address<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    ref={streetAddressRef}
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="townCity" className="text-gray-400">
                    Town/City<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    ref={townCityRef}
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-gray-400">
                    Phone Number<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    ref={phoneRef}
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-gray-400">
                    Email Address<span className="text-customRed">*</span>
                  </label>
                  <input
                    type="text"
                    ref={emailRef}
                    className="w-full md:w-[470px] border-none bg-gray-100 h-[50px] rounded-md"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4  md:my-24 w-full md:w-[50%] ">
              <div className="md:h-[500px] h-auto overflow-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-2  flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.imgUrl}
                          alt=""
                          className="w-[54px] h-[54px]"
                        />

                        <p>{item.name}</p>
                      </div>
                      <p>${item.price}</p>
                    </div>
                    <hr className="border my-4 border-gray" />
                  </div>
                ))}
              </div>
              <div className="mt-5">
                <div className="flex justify-between items-center">
                  <p>Subtotal:</p>
                  <p>${total.toFixed(2)}</p>
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
                  <p>${total.toFixed(2)}</p>
                </div>
                <hr className="border my-4 border-gray" />
              </div>

              <div>
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
                  <div onClick={handleClick} className=" md:mt-7 mt-5 flex items-center justify-center cursor-pointer hover:bg-[#E07575] bg-customRed text-white rounded-sm w-[35vw] md:w-[211px] h-[56px]">
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
