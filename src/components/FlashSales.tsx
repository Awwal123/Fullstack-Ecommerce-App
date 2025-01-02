import Timer from "./Timer";
import Favorite from "../assets/images/Favorite.png";
import Eye from "../assets/images/eye.png";
import Pad from "../assets/images/WiredPad.png";
import Keyboard from "../assets/images/WiredKeyboard.png";
import Monitor from "../assets/images/GamingMonitor.png";
import Smart from "../assets/images/Smart.png";
import Jacket from "../assets/images/Jacket.png";
import Iron from "../assets/images/PressingIron.png";
import Rolex from "../assets/images/GoldenRolex.png";
// import Hoddy from "../assets/images/PinkHoddy.png";
import Laptop from "../assets/images/GamingLaptop.png";
import five from "../assets/images/FiveStar.png";
import fourHalf from "../assets/images/FourHalfStar.png";
import four from "../assets/images/FourStar.png";

const products = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    imgUrl: Pad,
    discount: "-40%",
    rating: 5,
    ratingCount: 120,
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    imgUrl: Keyboard,
    discount: "-35%",
    rating: 4,
    ratingCount: 80,
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    imgUrl: Monitor,
    discount: "-30%",
    rating: 4.5,
    ratingCount: 230,
  },
  {
    id: 4,
    name: "Wrist Waterproof Leather ",
    price: 375,
    oldPrice: 400,
    imgUrl: Smart,
    discount: "-25%",
    rating: 4.5,
    ratingCount: 120,
  },
  {
    id: 5,
    name: "Quilted Satin Jacket",
    price: 750,
    oldPrice: 1000,
    imgUrl: Jacket,
    discount: "-50%",
    rating: 4,
    ratingCount: 70,
  },
  {
    id: 6,
    name: "Spray Pressing Iron",
    price: 180,
    oldPrice: 270,
    imgUrl: Iron,
    discount: "-60%",
    rating: 5,
    ratingCount: 99,
  },
  {
    id: 7,
    name: "Rolex 2813",
    price: 1000,
    oldPrice: 730,
    imgUrl: Rolex,
    discount: "-40%",
    rating: 4,
    ratingCount: 60,
  },
  // {
  //   id: 8,
  //   name: "The North Coat",
  //   price: 260,
  //   oldPrice: 360,
  //   imgUrl: Hoddy,
  //   discount: "-37%",
  //   rating: 5,
  //   ratingCount: 65,
  // },
  {
    id: 9,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1100,
    imgUrl: Laptop,
    discount: "-25%",
    rating: 5,
    ratingCount: 65,
  },
];

export const FlashSale = () => {
  const getRatingImage = (rating: number) => {
    if (rating === 5) return five;
    if (rating === 4.5) return fourHalf;
    if (rating === 4) return four;
    return ""; // Default empty path for other ratings
  };

  return (
    <div className="w-full px-5 py-9 md:py-10 md:px-16 ">
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <p className="text-customRed text-base font-semibold">Today’s</p>
      </div>

      <div className="flex mt-5 justify-between w-full ">
        <div className="flex items-center justify-between w-full mb-5 md:w-1/2 md:gap-0">
          <h2 className="font-semibold md:text-3xl">Flash Sales</h2>
          <div className="flex flex-col md:mb-5 gap-2">
            <div className=" hidden md:flex gap-7 justify-center text-xs">
              <p>Days</p>
              <p>Hours</p>
              <p>Miniutes</p>
              <p>Seconds</p>
            </div>
            <Timer duration={3 * 24 * 60 * 60 * 1000} />
          </div>
        </div>
      </div>
      <div className="flex w-auto overflow-y-auto gap-12 md:grid md:grid-cols md:grid-cols-4 md:gap-4 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[190px]  md:w-[270px] md:h-auto bg-white pb-2 rounded-md shadow-sm"
          >
            <div className="relative group cursor-pointer bg-gray-100 w-[190px] md:w-[270px] flex flex-col items-center rounded-t-md pt-3 md:h-[250px] h-[250px]">
              {/* Discount Badge */}
              <div className="px-3 flex w-full justify-between">
                <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-md text-xs flex items-center justify-center text-white">
                  {product.discount}
                </div>
              </div>

              {/* Images (Eye and Favorite) */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <div className="flex justify-center w-8 h-8 rounded-full cursor-pointer items-center bg-white">
                  <img src={Favorite} alt="favorite" />
                </div>
                <div className="md:flex hidden justify-center w-8 h-8 rounded-full cursor-pointer items-center bg-white">
                  <img src={Eye} alt="eye" />
                </div>
              </div>

              {/* Product Image */}
              <div className="flex justify-center items-center ">
                <img
                  src={product.imgUrl}
                  className=" w-[170px]   md:w-[68%] md:h-auto"
                  alt={product.imgUrl}
                />
              </div>

              {/* Add to Cart Button (Hidden by Default) */}
              <div className="w-full mt-auto">
                <button className="bg-black w-full py-2 rounded-b-md text-white md:opacity-0 group-hover:opacity-100 transition-opacity">
                  Add To Cart
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-2 mt-5">
              <h2 className="font-medium text-base">{product.name}</h2>

              <div className="flex gap-3">
                <p className="text-customRed">${product.price}</p>
                <p className="text-gray-600 font-medium line-through">
                  ${product.oldPrice}
                </p>
              </div>
              <div className="flex gap-3 ">
                <img src={getRatingImage(product.rating)} alt="" />
                <p className="font-semibold text-gray-600 text-sm">
                  ({product.ratingCount})
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto my-7 flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  w-[243px] h-[56px]">
        View All Products
      </div>
    </div>
  );
};
