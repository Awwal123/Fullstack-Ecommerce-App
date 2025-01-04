import Dilivery from "../assets/images/delivery.png";
import Headphone from "../assets/images/headphones.png";
import Secure from "../assets/images/secure.png";

const datas = [
  {
    id: 1,
    imgUrl: Dilivery,
    heading: "FREE AND FAST DELIVERY",
    subheading: "Free delivery for all orders over $140",
  },

  {
    id: 2,
    imgUrl: Headphone,
    heading: "24/7 CUSTOMER SERVICE",
    subheading: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    imgUrl: Secure,
    heading: "MONEY BACK GUARANTEE",
    subheading: "We return money within 30 days",
  },
];

export const WhyChooseUs = () => {
  return (
    <div className="flex  justify-center">
      <div className="flex md:flex-row gap-5 flex-col justify-between items-center  px-5 py-9 md:py-6 md:px-16 my-7 w-full max-w-6xl md:mt-0 mt-70">
        {datas.map((datum) => (
          <div
            key={datum.id}
            className="flex flex-col  justify-center items-center gap-4"
          >
            <div className="flex items-center justify-center rounded-full bg-gray-200 h-20 w-20 mb-5">
              <div className="flex items-center justify-center bg-black w-[58px] h-[58px] rounded-full">
                <img src={datum.imgUrl} alt="d" className="invert" />
              </div>
            </div>
            <h2 className="font-semibold text-xl">{datum.heading}</h2>
            <p className="text-sm">{datum.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
