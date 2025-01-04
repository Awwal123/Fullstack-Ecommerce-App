import { ExclusiveNavbar } from "./ExclusiveNavbar";
import Mail from "../assets/images/Mail.png";
import Phone from "../assets/images/Phone.png";
import { Fade } from "react-awesome-reveal";

export const ContactUs = () => {
  return (
    <>
      <ExclusiveNavbar />
      <Fade direction="up" duration={2000} triggerOnce>
      <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
        <div className="flex text-sm  gap-4 ">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p>Contact</p>
        </div>

        <div className="flex justify-between md:flex-row flex-col gap-10 md:mb-24  md:px-0  mt-9 ">
          <div className="md:w-[25%] w-full  h-auto flex flex-col  bg-white rounded-md shadow-2xl px-5 py-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-customRed flex justify-center items-center">
                <img src={Mail} alt="p" className="w-5 h-5" />
              </div>
              <p className="font-medium">Call To Us</p>
            </div>

            <div className="flex flex-col  gap-5 mt-5">
              <p className="text-sm">We are available 24/7, 7 days a week.</p>
              <p className="text-sm">Phone: +8801611112222</p>

              <hr className="border border-gray-700 mt-5" />
            </div>

            <div className="flex items-center mt-7 gap-3">
              <div className="w-10 h-10 rounded-full bg-customRed flex justify-center items-center">
                <img src={Phone} alt="p" className="w-5 h-4" />
              </div>
              <p className="font-medium">Write To US</p>
            </div>

            <div className="flex flex-col  gap-5 mt-5">
              <p className="text-sm">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-sm">Emails: customer@exclusive.com</p>
              <p className="text-sm">Emails: support@exclusive.com</p>
            </div>
          </div>
          <div className="md:w-[72%] w-full md:h-[457px] h-auto flex flex-col gap-5 bg-white rounded-md shadow-2xl px-5 py-10">
            <div className="flex justify-between w-full md:flex-row flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="h-[50px] md:w-[32%] w-full bg-gray-100 text-gray-500 p-4"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="h-[50px] md:w-[32%] w-full bg-gray-100 text-gray-500 p-4"
              />
              <input
                type="text"
                placeholder="Your Phone"
                className="h-[50px] md:w-[32%] w-full bg-gray-100 text-gray-500 p-4"
              />
            </div>

            <div className="w-full mt-4">
              <textarea
                name=""
                id=""
                placeholder="Your Message"
                className="w-full resize-none  bg-gray-100 text-gray-500 p-4 h-[207px]"
              ></textarea>
            </div>
            <div className="flex justify-between">
              <div></div>
              <div className="  flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  w-[215px] h-[56px]">
                Send Massage
              </div>
            </div>
          </div>
        </div>
      </div>
      </Fade>
    </>
  );
};
