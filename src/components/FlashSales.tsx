import Timer from "./Timer"

export const FlashSale = () => {
 return (
    <div className="w-full  px-5 py-9 md:py-10 md:px-16">
       <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <p className="text-customRed text-base font-semibold">Today’s</p>
       </div>

       <div className="flex mt-5 justify-between w-full ">
            <div className="flex items-center gap-10">
                <h2 className="font-semibold text-3xl">Flash Sales</h2>
                <div className="flex flex-col mb-5 gap-2">
                    <div className="flex gap-7 justify-center text-xs">
                        <p>Days</p>
                        <p>Hours</p>
                        <p>Miniutes</p>
                        <p>Seconds</p>
                    </div>
                <Timer duration={3 * 24 * 60 * 60 * 1000} />
                </div>
                {/* <div className="flex">
                </div> */}
                
            </div>
            <div>
                <h1></h1>
            </div>
       </div>
    </div>
 )
}