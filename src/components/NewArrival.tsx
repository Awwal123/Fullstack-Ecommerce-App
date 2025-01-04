import Ps5 from "../assets/images/PS5.png";
import Woman from "../assets/images/Woman.png";
import Speaker from "../assets/images/Speaker.png";
import Perfume from "../assets/images/Perfume.png";
export const NewArrival = () => {
  return (
    <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <p className="text-customRed text-base font-semibold">Featured</p>
      </div>

      <h2 className="font-semibold  md:text-3xl mt-4 flex ">New Arrival</h2>
      <div className="mt-9 w-full h-[200px] md:h-[600px] flex md:flex-row flex-col gap-7 justify-between mb-[750px] md:mb-0">
        <div className="md:w-[48%] w-full h-[600px] md:h-[600px] bg-black rounded-md flex justify-center items-center text-white relative">
          <div className="w-[85%] px-3">
            <img src={Ps5} alt="ps5" className="w-[551px] h-[400px] md:h-[540px] mx-auto" />
            <div className="absolute bottom-5 left-5 text-left">
              <h1 className="text-gray-200 font-semibold text-2xl px-2 py-1 ">
                PlayStation 5
              </h1>
              <p className="w-[242px] text-sm mt-2">
                Black and White version of the PS5 coming out on sale.
              </p>
              <p className="text-base w-[81px] text-gray-200 cursor-pointer pb-1 border-b  border-gray-200 mt-3">
                Shop Now
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-7 items-center md:w-[48%] justify-between">
          <div className="flex justify-between px-5 bg-black rounded-md w-full h-[284px]">
            <div className="w-[50%] flex justify-end pb-5 flex-col">
              <h1 className="text-gray-200 font-semibold text-2xl">
                Women’s Collections
              </h1>
              <p className=" text-sm mt-2 text-gray-200">
                Featured woman collections that give you another vibe.
              </p>

              <p className="text-base w-[81px] text-gray-200 cursor-pointer pb-1 border-b  border-gray-200 mt-3">
                Shop Now
              </p>
            </div>
            <div>
              <img src={Woman} alt="" className="md:w-[432px]  h-[90%] md:h-full" />
            </div>
          </div>

          <div className="flex justify-between w-full ">
            <div className="bg-black w-[47%] flex justify-center items-center rounded-md md:h-[284px] h-[200px] px-5 relative">
              <div>
                <img src={Speaker} alt="s" className="w-[100%] " />
              </div>
              <div className="absolute bottom-5 left-5 text-left">
                <h1 className="text-gray-200 font-semibold text-2xl px-2 py-1 ">
                  Speakers
                </h1>
                <p className="text-gray-200 text-sm mt-2">
                Amazon wireless speakers
                </p>
                <p className="text-base w-[81px] text-gray-200 cursor-pointer pb-1 border-b  border-gray-200 mt-3">
                  Shop Now
                </p>
              </div>
            </div>

            <div className="bg-black w-[47%] flex justify-center items-center rounded-md md:h-[284px] h-[200px] px-5 relative">
              <div>
                <img src={Perfume} alt="s" className="w-[100%] " />
              </div>
              <div className="absolute bottom-5 left-5 text-left">
                <h1 className="text-gray-200 font-semibold text-2xl px-2 py-1 ">
                Perfume
                </h1>
                <p className="text-gray-200 md:text-sm text-sx mt-2">
                GUCCI INTENSE OUD EDP
                </p>
                <p className="text-base w-[81px] text-gray-200 cursor-pointer pb-1 border-b  border-gray-200 mt-3">
                  Shop Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
