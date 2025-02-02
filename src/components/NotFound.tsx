import { Link } from "react-router-dom";
import { ExclusiveNavbar } from "./ExclusiveNavbar";

export const Notfound = () => {
  return (
    <>
      <ExclusiveNavbar />
      <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
        <div className="flex text-sm  gap-4 ">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p>404</p>
        </div>
        <div className="flex flex-col gap-9 md:gap-14 my-8 items-center justify-center">
          <h1 className="md:text-8xl text-4xl font-medium tracking-widest">
            404 Not Found
          </h1>
          <p className="text-base text-center md:my-7">
            Your visited page not found. You may go home page.
          </p>
          <Link to={"/home"}>
            {" "}
            <div className="mx-auto my-7 flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  w-[254px] h-[56px]">
              Back to home page
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
