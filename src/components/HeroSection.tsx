import AuthBG from "../assets/images/SideImage.png";
import BtnImg from "../assets/images/Google.png";
export const HeroSection = () => {
  return (
    <div className="w-full  mb-3 h-screen px-5 py-3 md:pl-0 flex justify-between flex-col gap-5 md:flex-row  md:py-10 md:pr-16">
      <div className="w-full h-auto md:w-1/2 ">
        <img src={AuthBG} alt="auth-bg" className="w-full h-full" />
      </div>

      <div className=" flex flex-col items-center justify-center gap-4">
        <div className="flex  flex-col gap-6">
          <h2 className="font-medium text-2xl md:text-4xl  md:tracking-widest">
            Create an account
          </h2>
          <p>Enter your details below</p>
        </div>
        <div className="mt-5 flex flex-col gap-5">
          <form className="mt-5 flex flex-col gap-5" action="">
            <input
              type="text"
              placeholder="Name"
              className="w-[370px] h-[32px] p-2  border-b-gray-400"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-[370px] h-[32px] p-2  border-b-gray-400"
            />
            <input
              type="text"
              placeholder="Password"
              className="w-[370px] h-[32px] p-2  border-b-gray-400"
            />
          </form>
          <div className="flex flex-col gap-3">
            <button className="border-none rounded-md bg-[#DB4444] text-white text-center cursor-pointer w-full md:w-[371px] h-[56px]">
              Create Account
            </button>

            <div className="flex  gap-5 justify-center items-center border-2 border-black  rounded-md bg-white  text-center cursor-pointer w-full md:w-[371px] h-[56px]">
              <img src={BtnImg} alt="" />
              <p>Sign up with Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
