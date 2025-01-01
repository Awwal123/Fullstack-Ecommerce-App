// import Send from "../assets/images/Send-icon.png";
import QrCode from "../assets/images/QrCode.jpg";
import Google from "../assets/images/GooglePlay.png";
import AppStore from "../assets/images/AppStore.png";
import FB from "../assets/images/Facebook.png";
import X from "../assets/images/Twitter.png";
import Ig from "../assets/images/Instagram.png";
import Linkedin from "../assets/images/Linkedin.png";

export const Footer = () => {
  return (
    <>
      {/* <div className="w-full justify-between md:hidden  flex items-center  text-white px-5 py-8 bg-black">
        <div className="flex justify-between">
          <img src={FB} alt="f" className="w-6 h-6" />
          <img src={X} alt="f" className="w-6 h-6" />
          <img src={Ig} alt="f" className="w-6 h-6" />
          <img src={Linkedin} alt="f" className="w-6 h-6" />
        </div >
        
        
        <div className="flex items-center gap-2 text-sm text-gray-500 "> 
        <i className="fa-regular fa-copyright"></i>
            <p>Copyright Rimel 2022. All right reserved</p>
        </div>
        <div>

        </div>
      </div> */}

      <div className="w-full mt-16 text-white px-5 py-3 hidden md:block md:px-16 md:h-auto md:py-10 bg-black">
        <div className="grid grid-cols-5 gap-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Exclusive</h3>
            <p className="text-xl font-medium">Subscribe</p>
            <p className="text-gray-400 text-base">
              Get 10% off your first order
            </p>
            {/* <div className="relative inline-block">
              <input
                type="text"
                placeholder="Enter your email"
                className="border border-white w-auto h-11 bg-black px-2 rounded-sm text-gray-300 "
              />
              <img
                src={Send}
                alt="s"
                className="absolute right-1/4 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div> */}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Support</h3>
            <p className="text-gray-400 text-base">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-gray-400 text-base">exclusive@gmail.com</p>
            <p className="text-gray-400 text-base">+88015-88888-9999</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Account</h3>
            <p className="text-gray-400 text-base">My Account</p>
            <p className="text-gray-400 text-base">Login / Register</p>
            <p className="text-gray-400 text-base">Cart</p>
            <p className="text-gray-400 text-base">Wishlist</p>
            <p className="text-gray-400 text-base">Shop</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Quick Link</h3>
            <p className="text-gray-400 text-base">Privacy Policy</p>
            <p className="text-gray-400 text-base">Terms Of Use</p>
            <p className="text-gray-400 text-base">FAQ</p>
            <p className="text-gray-400 text-base">Contact</p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-bold">Download App</h3>
            <p className="text-gray-400 text-base">
              Save $3 with App New User Only
            </p>
            <div className="flex gap-3 flex-col ">
              <div className="flex  gap-3">
                <img src={QrCode} alt="q" className="w-[76px] h-[76px]" />
                <div className="flex flex-col">
                  <img
                    src={Google}
                    alt="google"
                    className="w-[110px] h-[40px]"
                  />
                  <img
                    src={AppStore}
                    alt="App"
                    className="w-[110px] h-[40px]"
                  />
                </div>
              </div>
              <div className="flex justify-between w-2/3">
                <img src={FB} alt="f" className="w-6 h-6" />
                <img src={X} alt="f" className="w-6 h-6" />
                <img src={Ig} alt="f" className="w-6 h-6" />
                <img src={Linkedin} alt="f" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
