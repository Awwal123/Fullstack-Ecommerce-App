import { ExclusiveNavbar } from "./ExclusiveNavbar";
import five from "../assets/images/FiveStar.png";
import Favorite from "../assets/images/Favorite.png";
import fourHalf from "../assets/images/FourHalfStar.png";
import four from "../assets/images/FourStar.png";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import Phones from "../assets/images/Category-CellPhone.png";
import SmartWatch from "../assets/images/Category-SmartWatch.png";
import Computer from "../assets/images/Category-Computer.png";
import Camera from "../assets/images/Category-Camera.png";
import GamePad from "../assets/images/Category-Gamepad.png";
import HeadPhone from "../assets/images/Category-Headphone.png";
import Iphone15pro from "../assets/images/Categories/15pro.png";
import AppleIpadpro11 from "../assets/images/Categories/AppleIPadPro11-ph.png";
import Iphone13Pro from "../assets/images/Categories/AppleIPhone13Pro-ph.png";
import Iphone14ProMax from "../assets/images/Categories/AppleIPhone14ProMax-ph.png";
import IphoneX from "../assets/images/Categories/IphoneX.png";
import SamsungalaxyA06 from "../assets/images/Categories/SamsungGalaxyA06ph.png";
import Iphone5s from "../assets/images/Categories/Iphone5s.png";
import TecnoPop9 from "../assets/images/Categories/TecnoPop9-ph.png";
import XIAOMRedmi14C from "../assets/images/Categories/XIAOMIRedmi14C-ph.png";
import AppleMacBookPro from "../assets/images/Categories/AppleMacBookPro1-com.png";
import DellLatitude7400TouchScreen from "../assets/images/Categories/DELLLatitude7400TOUCHSCREEN-com.png";
import HpEliteBook840G5 from "../assets/images/Categories/HpEliteBook840G5-com.png";
import HpNoteBook348G5 from "../assets/images/Categories/HpNoteBook348G5-com.png";
import LenovoideaPad from "../assets/images/Categories/Lenovoideapad15-com.png";

const products = [
  {
    id: 130,
    name: "Iphone 15 Pro",
    price: 500,
    imgUrl: Iphone15pro,
    category: "Phone",
    details:
      "The latest iPhone model featuring cutting-edge technology and design.",
    rating: 5,
    ratingCount: 330,
  },
  {
    id: 131,
    name: "Apple iPad Pro 11",
    price: 700,
    imgUrl: AppleIpadpro11,
    category: "Tablet",
    details:
      "High-performance iPad with an 11-inch display, perfect for professionals and creatives.",
    rating: 4.5,
    ratingCount: 210,
  },
  {
    id: 132,
    name: "iPhone 13 Pro",
    price: 600,
    imgUrl: Iphone13Pro,
    category: "Phone",
    details:
      "A powerful smartphone with advanced features, ideal for photography and multitasking.",
    rating: 4,
    ratingCount: 290,
  },
  {
    id: 133,
    name: "iPhone 14 Pro Max",
    price: 800,
    imgUrl: Iphone14ProMax,
    category: "Phone",
    details:
      "Top-of-the-line iPhone with an expansive display and superior performance.",
    rating: 5,
    ratingCount: 400,
  },
  {
    id: 134,
    name: "iPhone X",
    price: 400,
    imgUrl: IphoneX,
    category: "Phone",
    details:
      "Revolutionary iPhone with a stunning OLED display and Face ID technology.",
    rating: 4.5,
    ratingCount: 350,
  },
  {
    id: 135,
    name: "Samsung Galaxy A06",
    price: 300,
    imgUrl: SamsungalaxyA06,
    category: "Phone",
    details:
      "An affordable smartphone with essential features for everyday use.",
    rating: 5,
    ratingCount: 150,
  },
  {
    id: 136,
    name: "iPhone 5s",
    price: 200,
    imgUrl: Iphone5s,
    category: "Phone",
    details:
      "Classic iPhone model with a compact design and reliable performance.",
    rating: 4,
    ratingCount: 220,
  },
  {
    id: 137,
    name: "Tecno Pop 9",
    price: 250,
    imgUrl: TecnoPop9,
    category: "Phone",
    details:
      "Budget-friendly smartphone with a large display and long-lasting battery.",
    rating: 5,
    ratingCount: 180,
  },
  {
    id: 138,
    name: "Xiaomi Redmi 14C",
    price: 280,
    imgUrl: XIAOMRedmi14C,
    category: "Phone",
    details:
      "Feature-packed smartphone with great performance at an affordable price.",
    rating: 4.5,
    ratingCount: 200,
  },
  {
    id: 140,
    name: "Apple MacBook Pro",
    imgUrl: AppleMacBookPro,
    category: "Computer",
    details:
      "Powerful laptop with advanced features for professionals and creatives.",
    price: 1200,
    rating: 5,
    ratingCount: 560,
  },
  {
    id: 141,
    name: "Dell Latitude 7400 Touch Screen",
    imgUrl: DellLatitude7400TouchScreen,
    category: "Computer",
    details:
      "Versatile and durable laptop with a responsive touch screen for business use.",
    price: 1000,
    rating: 5,
    ratingCount: 480,
  },
  {
    id: 142,
    name: "HP EliteBook 840 G5",
    imgUrl: HpEliteBook840G5,
    category: "Computer",
    details:
      "High-performance laptop with robust security features for enterprise users.",
    price: 950,
    rating: 4,
    ratingCount: 430,
  },
  {
    id: 143,
    name: "HP Notebook 348 G5",
    imgUrl: HpNoteBook348G5,
    category: "Computer",
    details:
      "Reliable and affordable notebook with essential features for daily tasks.",
    price: 600,
    rating: 4.5,
    ratingCount: 390,
  },
  {
    id: 144,
    name: "Lenovo IdeaPad 15",
    imgUrl: LenovoideaPad,
    category: "Computer",
    details:
      "Affordable laptop with solid performance for home and office use.",
    price: 550,
    rating: 4.5,
    ratingCount: 350,
  },
  
];

const categories = [
  {
    id: 1,
    imgUrl: Phones,
    subhead: "Phones",
  },
  {
    id: 2,
    imgUrl: Computer,
    subhead: "Computers",
  },
  {
    id: 3,
    imgUrl: SmartWatch,
    subhead: "SmartWatch",
  },
  {
    id: 4,
    imgUrl: Camera,
    subhead: "Camera",
  },
  {
    id: 5,
    imgUrl: HeadPhone,
    subhead: "HeadPhones",
  },
  {
    id: 6,
    imgUrl: GamePad,
    subhead: "Gaming",
  },
];

export const Shop = () => {
  const { addToCart } = useCart();
  const getRatingImage = (rating: number) => {
    if (rating === 5) return five;
    if (rating === 4.5) return fourHalf;
    if (rating === 4) return four;
    return ""; // Default empty path for other ratings
  };
  return (
    <>
      <ExclusiveNavbar />
      <div className="w-full px-5 pb-9 md:py-6 md:px-16 my-7 ">
        <div className="flex items-center gap-3">
          <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
          <p className="text-customRed text-base font-semibold">Our Products</p>
        </div>
        <div className="flex mb-12  justify-between">
          <h2 className="font-semibold items-center  md:text-3xl mt-4 flex ">
            Explore Our Products
          </h2>
          <input
            type="text"
            placeholder="Search by Category"
            className="w-[40vw] block md:hidden border border-black pl-2 rounded-md"
          />
        </div>

        <div className="hidden md:flex justify-between overflow-y-auto items-center md:items-start gap-6 md:flex-row grid-cols-1 sm:grid-cols-2 w-full my-7">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col cursor-pointer rounded-md hover:bg-customRed hover:border-none hover:text-white gap-3  w-[170px] h-[145px] justify-center items-center border border-gray-400"
            >
              <img
                src={category.imgUrl}
                alt="cell"
                className="group-hover:invert"
              />
              <p>{category.subhead}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full my-7 md:justify-items-stretch justify-items-center ">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-[80vw] my-5 md:w-auto md:h-auto bg-white pb-2 rounded-md shadow-sm"
            >
              <Link
                to={`/product/${product.id}`}
                className="relative group cursor-pointer bg-gray-100 w-[80vw] md:w-auto flex flex-col items-center rounded-t-md pt-3 md:h-[250px] h-[250px]"
              >
                <div className="px-3 flex w-full justify-between">
                  {/* <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-md text-xs flex items-center justify-center text-white">
                  {product.discount}
                </div> */}
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="flex justify-center w-8 h-8 rounded-full cursor-pointer items-center bg-white">
                    <img src={Favorite} alt="favorite" />
                  </div>
                </div>

                <div className="flex justify-center items-center flex-1">
                  <img
                    src={product.imgUrl}
                    className="w-[170px] md:w-[190px] md:h-[180px] object-contain"
                    alt={product.imgUrl}
                  />
                </div>

                {/* Add to Cart Button */}
                <button
                  className="absolute bottom-0 bg-black w-full py-2 rounded-b-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      quantity: 1,
                      imgUrl: product.imgUrl,
                    });
                  }}
                >
                  Add To Cart
                </button>
              </Link>

              <div className="flex flex-col gap-2 md:mt-8">
                <h2 className="font-medium text-base">{product.name}</h2>

                <div className="flex gap-3">
                  <p className="text-customRed">${product.price}</p>
                  {/* <p className="text-gray-600 font-medium line-through">
                  ${product.oldPrice}
                </p> */}
                </div>
                <div className="flex gap-3">
                  <img src={getRatingImage(product.rating)} alt="" />
                  <p className="font-semibold text-gray-600 text-sm">
                    ({product.ratingCount})
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
