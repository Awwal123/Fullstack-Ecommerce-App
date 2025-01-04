import { ExclusiveNavbar } from "./ExclusiveNavbar";
import Aboutbg from "../assets/images/About-bg.png";
import Secure from "../assets/images/security.png";
import ShopingBag from "../assets/images/Shoppingbag.png";
import Shop from "../assets/images/Shop.png";
import MoneyBag from "../assets/images/Moneybag.png";
import Tom from "../assets/images/Tom.png";
import Emma from "../assets/images/Emma.png";
import Smith from "../assets/images/Will.png";
import Twitter from "../assets/images/Twitter.png";
import Ig from "../assets/images/Instagram.png";
import Linkedin from "../assets/images/Linkedin.png";
import { WhyChooseUs } from "./WhyChooseUs";

const data = [
  {
    id: 1,
    imgUrl: Shop,
    heading: "10.5K",
    subheading: "Sallers active our site",
  },
  {
    id: 2,
    imgUrl: Secure,
    heading: "33K",
    subheading: "Monthly Product Sale",
  },
  {
    id: 3,
    imgUrl: ShopingBag,
    heading: "45.5k",
    subheading: "Customer active in our site",
  },
  {
    id: 4,
    imgUrl: MoneyBag,
    heading: "25k",
    subheading: "Anual gross sale in our site",
  },
];

export const AboutUs = () => {
  return (
    <>
      <ExclusiveNavbar />
      <div className="w-full px-5  md:py-6 md:px-0 my-7">
        <div className="flex text-sm my-0 md:my-7  gap-4 px-5 md:px-16">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p>About</p>
        </div>

        <div className="flex justify-between md:flex-row flex-col-reverse w-full md:px-0  mt-9 ">
          <div className="flex flex-col md:px-16 gap-4  items-center mt-5 justify-center">
            <h1 className="text-2xl md:tracking-wider md:text-6xl font-semibold">
              Our Story
            </h1>
            <p className="md:w-[525px] w-full text-base leading-[26px]">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="md:w-[525px] w-full text-base leading-[26px]">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>

          <div className="w-full md:w-[705px] h-auto rounded-md">
            <img src={Aboutbg} alt="" className="w-full h-auto rounded-md" />
          </div>
        </div>

        <div className="flex flex-col gap-6 px-5 md:px-16 md:flex-row justify-between mt-10 md:my-28 items-center">
          {data.map((datum) => (
            <div
              key={datum.id}
              className="group flex flex-col w-[270px] items-center justify-center cursor-pointer rounded-md hover:text-white hover:border-none p-4 h-[230px] border hover:bg-customRed border-black"
            >
              <div className="group-hover:bg-gray-100 bg-gray-200 w-20 h-20 mb-5 rounded-full flex justify-center items-center">
                <div className="group-hover:bg-white bg-black w-[58px] h-[58px] rounded-full flex justify-center items-center">
                  <img
                    src={datum.imgUrl}
                    alt="hh"
                    className="w-[40px] h-[40px] group-hover:invert"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center justify-center">
                <h3 className="font-bold text-3xl tracking-wider">
                  {datum.heading}
                </h3>
                <p>{datum.subheading}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5 md:px-16  w-full flex flex-col  mt-20 md:mt-0 md:flex-row justify-between items-center gap-8">
          {/* first */}
          <div className="md:w-[370px] w-full h-auto">
            <div className="md:w-[370px] w-full bg-gray-200 h-[430px] rounded-md flex justify-center items-center">
              <img src={Tom} alt="" className="w-[236px] mt-10 h-[391px]" />
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h2 className="font-medium text-3xl tracking-wider">
                Tom Cruise
              </h2>
              <p className="text-base">Founder & Chairman</p>
              <div className="flex gap-3">
                <img src={Twitter} alt="" className="w-6 h-6" />
                <img src={Ig} alt="" className="w-6 h-6" />
                <img src={Linkedin} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="md:w-[370px] w-full h-auto">
            <div className="md:w-[370px] w-full bg-gray-200 h-[430px] rounded-md flex justify-center items-center">
              <img src={Emma} alt="" className="w-[294px] mt-8 h-[397px]" />
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h2 className="font-medium text-3xl tracking-wider">
                Emma Watson
              </h2>
              <p className="text-base">Managing Director</p>
              <div className="flex gap-3">
                <img src={Twitter} alt="" className="w-6 h-6" />
                <img src={Ig} alt="" className="w-6 h-6" />
                <img src={Linkedin} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>

          <div className="md:w-[370px] w-full h-auto">
            <div className="md:w-[370px] w-full bg-gray-200 h-[430px] rounded-md flex justify-center items-center">
              <img src={Smith} alt="" className="w-[326px] mt-9  h-[392px]" />
            </div>

            <div className="flex flex-col gap-3 mt-2">
              <h2 className="font-medium text-3xl tracking-wider">
                Will Smith
              </h2>
              <p className="text-base">Product Designer</p>
              <div className="flex gap-3">
                <img src={Twitter} alt="" className="w-6 h-6" />
                <img src={Ig} alt="" className="w-6 h-6" />
                <img src={Linkedin} alt="" className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
    </>
  );
};
