import box from "../assets/images/Jambox.png";
import A from "../assets/images/A.png";
import JamboxTimer from "./JamboxTimer";

export const JamBoxAdvert = () => {
  return (
    <div className="px-5  md:block hidden py-9 md:py-6 md:px-16">
      <div className="block md:hidden">
        <img src={A} alt="" className="w-[1000px] h-auto" />
      </div>

      <div className="hidden md:block">
        <div className="flex justify-between text-white p-12 bg-black w-full md:h-[500px]">
          <div className="flex flex-col justify-between pt-5 gap-7">
            <p className="text-green-400 font-semibold">Categories</p>
            <h1 className="text-white font-semibold text-5xl">
              Enhance Your Music Experience
            </h1>
            <div className="flex gap-9 items-center">
              <JamboxTimer duration={24 * 24 * 60 * 60 * 1000} />
             
            </div>
            <div className="flex justify-center items-center rounded-md bg-[#00FF66] text-white text-center cursor-pointer md:w-[159px] md:h-[56px] h-[50px] w-[30vw]">
              Buy Now!
            </div>
          </div>

          <div className="w-[568px] h-[330px] flex items-center">
            <img src={box} alt="dnd" className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
