import box from "../assets/images/Jambox.png";
// import Advert from "../assets/images/advert.png";
// import Timer from "./Timer";

export const JamBoxAdvert = () => {
  return (
    <div className="px-5 py-9 md:py-6 md:px-16">
      <div className="hidden md:block">
        <div className="flex justify-between   text-white p-12 bg-black w-full md:h-[500px]">
          <div className=" flex flex-col justify-between pt-5 gap-7">
            <p className="text-green-400 font-semibold ">Categories</p>
            <h1 className="text-white font-semibold text-5xl ">
              Enhance Your Music Experience
            </h1>
            <div className="flex gap-9">
              <div className="w-[62px] h-[62px] rounded-full bg-gray-300"></div>
              <div className="w-[62px] h-[62px] rounded-full bg-gray-300"></div>
              <div className="w-[62px] h-[62px] rounded-full bg-gray-300"></div>
              <div className="w-[62px] h-[62px] rounded-full bg-gray-300"></div>
            </div>
            <div className=" flex justify-center items-center rounded-md bg-[#00FF66]  text-white text-center cursor-pointer  md:w-[159px] md:h-[56px] h-[50px] w-[30vw] ">
              Buy Now!
            </div>
          </div>

          <div className="w-[568px] h-[330px flex items-center ]">
            <img src={box} alt="dnd" w-full h-full />
          </div>
        </div>
      </div>
      {/* <img src={Advert} alt="" className=" w-full h-[150px]" /> */}
    </div>
  );
};
