import { Fade } from "react-awesome-reveal";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { useCart } from "./CartContext";


export const Account = () => {
const { name, email } = useCart(); 
  return (
    <>
      <ExclusiveNavbar />
      <Fade direction="up" duration={2000} triggerOnce>
        <div className=" w-full  px-3 py-3 md:py-4 md:px-16">
          <div className="flex text-sm my-4 md:my-7 gap-4 justify-between">
            <div className="flex gap-4">
            <p className="text-gray-500">Home </p>
            <p className="text-gray-500">/</p>
            <p>My Account</p>
            </div>
            <div>Welcome! <span className="text-customRed">{name}!</span></div>
          </div>

          <div className="flex justify-between w-full  my-9">
            <div className="hidden w-[30%] md:flex gap-3 flex-col">
              <div className="flex flex-col gap-2 ">
                <h2 className="text-base font-medium">Manage My Account</h2>
                <div className="flex flex-col  ">
                  <p className="text-customRed pl-4">My Profile</p>
                  <p className="text-gray-400 pl-4">Address Book</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 ">
                <h2 className="text-base font-medium">Manage Orders</h2>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400 pl-4">My Returns</p>
                  <p className="text-gray-400 pl-4">My Cancellations</p>
                </div>
              </div>
              <h2 className="text-base font-medium">Manage WishList</h2>
            </div>

            <div className="md:w-[80%] w-full bg-white shadow-2xl h-auto py-9 px-9 ">
              <h2 className="text-xl text-customRed font-medium">
                Edit Your Profile
              </h2>

              <div className="flex mt-4 flex-col gap-6 w-full">
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                  <div className="flex w-full flex-col gap-1">
                    <p>First Name</p>
                    <div className="w-full md:w-[90%] h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex">
                      {name}
                    </div>
                  </div>

                  <div className="flex w-full flex-col gap-1">
                    <p>Last Name</p>
                    <div className="w-full md:w-[90%] h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex">
                      null
                    </div>
                  </div>

               
                </div>
                <div className="flex flex-col md:flex-row gap-2 justify-between">
                    <div className="flex w-full flex-col gap-1">
                    <p>Email</p>
                    <input placeholder={email} type="text" className="w-full md:w-[90%] h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex">
                   
                    </input>
                  </div>

                  <div className="flex w-full flex-col gap-1">
                    <p>Address</p>
                    <input placeholder="Kingston, 5236, United State" type="text" className="w-full md:w-[90%] h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex">
                      
                    </input>
                  </div>
                  </div>


                  <div className="flex flex-col  w-full">
                        <p className="my-2">Password Changes</p>
                        <input type="text" placeholder="Current Passwod" className="w-full h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex mb-3"/>
                        <input type="text" placeholder="New Passwod" className="w-full h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex mb-3"/>
                        <input type="text" placeholder="Confirm New Passwod" className="w-full h-[50px] bg-gray-200 pl-3 text-gray-600 items-center flex mb-3"/>
                  </div>
              </div>

              <div className="flex mt-4 justify-between">
                <div></div>
                <div className="flex gap-5 items-center">
                    <p>Cancel</p>
                    <div className=" flex items-center justify-center cursor-pointer hover:bg-[#E07575] bg-customRed text-white rounded-sm w-[35vw] md:w-[211px] h-[56px]">
                    Save Changes
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
