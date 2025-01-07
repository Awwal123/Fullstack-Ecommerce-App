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
import Apple from "../assets/images/Categories/Apple.png";
import fruits from "../assets/images/Categories/fruit-go.png";
import DogFoood from "../assets/images/Categories/DogFood.png";
import Banana from "../assets/images/Categories/banana-go.png";
import TinTomato from "../assets/images/Categories/Can-tomato-go.png";
import CatFood from "../assets/images/Categories/Catfood.png";
import Egg from "../assets/images/Categories/Eggs.png";
import Milk from "../assets/images/Categories/Milk.png";
import Strawberry from "../assets/images/Categories/Strawbeery.png";
import Nescafe from "../assets/images/Categories/Nescafe Coffe.png";
import Rice from "../assets/images/Categories/Rice.png";
import BluePerfume from "../assets/images/Categories/blue-pef.png";
import DavidoOff from "../assets/images/Categories/Davidoff-per.png";
import BlackPerfume from "../assets/images/Categories/black-pef.png";
import Tommy from "../assets/images/Categories/Tommy-pef.png";
import VersaceDylna from "../assets/images/Categories/VersaceDylan-per.png";
import PurplePerf from "../assets/images/Categories/Purple-pef.png";
import NiveaDryImpact from "../assets/images/Categories/NIVEADryimpact-pef.png";
import EmperMemories from "../assets/images/Categories/Emper_Memories-pef.png";
import AppleWristWatch from "../assets/images/Categories/apple-wristwatch-wt.png";
import GoldenRolex from "../assets/images/Categories/GoldenRolex.png";
import SilverRolex from "../assets/images/Categories/SilverRolex.png";
import EdificeWatch from "../assets/images/Categories/ediffice-wt.png";
import BrownLeatherWatch from "../assets/images/Categories/wrist-watch-wt.png";
import FoldingScreenCamera from "../assets/images/Categories/R103.0InchHDFoldingScreen-cam.png";
import DigitalCamcorder from "../assets/images/Categories/FullHDDigitalVideoCamcorder-cam.png";
import CompactCamera1 from "../assets/images/Categories/camera-cam.png";
import CompactCamera2 from "../assets/images/Categories/camera-cam2.png";
import BlackOverEarHeadphones from "../assets/images/Categories/HeadPhone.png";
import HeadphonesWithMicrophone from "../assets/images/Categories/Headphone-1.png";
import WirelessHeadphones from "../assets/images/Categories/Headphone-2.png";
import DualShockController from "../assets/images/Categories/gamepad-pad.png";
import JoystickController from "../assets/images/Categories/joystick-pad.png";
import PS4GamingSet from "../assets/images/Categories/PS4.png";
import PS5GamingSet from "../assets/images/Categories/PS5.png";
import Pad from "../assets/images/Categories/WiredPad.png";
import Fragnance from "../assets/images/Category-Fragnance.png";
import Groceries from "../assets/images/Category-Groceriece.png";

import { ScrollToTop } from "./ScrollToTop";
import { useState } from "react";
const products = [
  {
    id: 130,
    name: "Iphone 15 Pro",
    price: 500,
    imgUrl: Iphone15pro,
    category: "Phones",
    details:
      "The latest iPhone model featuring cutting-edge technology and design.",
    rating: 5,
    ratingCount: 330,
  },

  {
    id: 133,
    name: "iPhone 14 Pro Max",
    price: 800,
    imgUrl: Iphone14ProMax,
    category: "Phones",
    details:
      "Top-of-the-line iPhone with an expansive display and superior performance.",
    rating: 5,
    ratingCount: 400,
  },
  {
    id: 135,
    name: "Samsung Galaxy A06",
    price: 300,
    imgUrl: SamsungalaxyA06,
    category: "Phones",
    details:
      "An affordable smartphone with essential features for everyday use.",
    rating: 5,
    ratingCount: 150,
  },
  {
    id: 136,
    name: "iPhone 6s",
    price: 200,
    imgUrl: Iphone5s,
    category: "Phones",
    details:
      "Classic iPhone model with a compact design and reliable performance.",
    rating: 4,
    ratingCount: 220,
  },
  {
    id: 153,
    name: "Strawberry",
    imgUrl: Strawberry,
    category: "Groceries",
    details: "Juicy and sweet strawberries, perfect for desserts.",
    price: 5,
    rating: 4,
    ratingCount: 160,
  },

  {
    id: 148,
    name: "Banana",
    imgUrl: Banana,
    category: "Groceries",
    details: "Sweet and ripe bananas, perfect for snacking.",
    price: 2,
    rating: 5,
    ratingCount: 180,
  },
  {
    id: 154,
    name: "Nescafe Coffee",
    imgUrl: Nescafe,
    category: "Groceries",
    details:
      "Rich and aromatic Nescafe coffee for a perfect start to your day.",
    price: 8,
    rating: 4.5,
    ratingCount: 220,
  },
  {
    id: 151,
    name: "Egg",
    imgUrl: Egg,
    category: "Groceries",
    details: "Farm-fresh eggs perfect for cooking and baking.",
    price: 2.5,
    rating: 4,
    ratingCount: 300,
  },
  {
    id: 157,
    name: "Davido off",
    imgUrl: DavidoOff,
    category: "Fragrance",
    details: "Elegant and iconic, perfect for evening wear.",
    price: 50,
    rating: 5,
    ratingCount: 150,
  },
  {
    id: 158,
    name: "Ocean Breeze",
    imgUrl: BlackPerfume,
    category: "Fragrance",
    details: "Mystical and bold fragrance to make a statement.",
    price: 55,
    rating: 4,
    ratingCount: 180,
  },
  {
    id: 159,
    name: "Tommy Perfume",
    imgUrl: Tommy,
    category: "Fragrance",
    details: "Classic and sophisticated, perfect for daily wear.",
    price: 40,
    rating: 4.5,
    ratingCount: 250,
  },
  {
    id: 160,
    name: "Versace Dylan",
    imgUrl: VersaceDylna,
    category: "Fragrance",
    details: "Luxury and charm combined in a signature scent.",
    price: 60,
    rating: 5,
    ratingCount: 300,
  },
  {
    id: 166,
    name: "Silver Rolex",
    imgUrl: SilverRolex,
    category: "SmartWatch",
    details: "Stylish silver smartwatch with sleek aesthetics.",
    price: 400,
    rating: 5,
    ratingCount: 300,
  },
  {
    id: 179,
    name: "PS5 Gaming Set",
    imgUrl: PS5GamingSet,
    category: "Gaming",
    details: "Advanced PS5 gaming set with state-of-the-art controllers.",
    price: 600,
    rating: 5,
    ratingCount: 700,
  },
  {
    id: 137,
    name: "Tecno Pop 9",
    price: 250,
    imgUrl: TecnoPop9,
    category: "Phones",
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
    category: "Phones",
    details:
      "Feature-packed smartphone with great performance at an affordable price.",
    rating: 4.5,
    ratingCount: 200,
  },

  {
    id: 140,
    name: "Apple MacBook Pro",
    imgUrl: AppleMacBookPro,
    category: "Computers",
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
    category: "Computers",
    details:
      "Versatile and durable laptop with a responsive touch screen for business use.",
    price: 1000,
    rating: 5,
    ratingCount: 480,
  },

  {
    id: 143,
    name: "HP Notebook 348 G5",
    imgUrl: HpNoteBook348G5,
    category: "Computers",
    details:
      "Reliable and affordable notebook with essential features for daily tasks.",
    price: 600,
    rating: 4.5,
    ratingCount: 390,
  },
  {
    id: 150,
    name: "Cat Food",
    imgUrl: CatFood,
    category: "Groceries",
    details: "Healthy and delicious food for your cat.",
    price: 15,
    rating: 5,
    ratingCount: 120,
  },

  {
    id: 145,
    name: "Apple",
    imgUrl: Apple,
    category: "Groceries",
    details: "Fresh and crispy apples perfect for snacks and desserts.",
    price: 3,
    rating: 5,
    ratingCount: 200,
  },
  {
    id: 146,
    name: "Mixed Fruits",
    imgUrl: fruits,
    category: "Groceries",
    details: "A delightful mix of fresh seasonal fruits.",
    price: 5,
    rating: 4.5,
    ratingCount: 150,
  },
  {
    id: 147,
    name: "Dog Food",
    imgUrl: DogFoood,
    category: "Groceries",
    details: "Nutritious dog food for a healthy and happy pet.",
    price: 20,
    rating: 4.5,
    ratingCount: 100,
  },
  {
    id: 142,
    name: "HP EliteBook 840 G5",
    imgUrl: HpEliteBook840G5,
    category: "Computers",
    details:
      "High-performance laptop with robust security features for enterprise users.",
    price: 950,
    rating: 4,
    ratingCount: 430,
  },
  {
    id: 134,
    name: "iPhone X",
    price: 400,
    imgUrl: IphoneX,
    category: "Phones",
    details:
      "Revolutionary iPhone with a stunning OLED display and Face ID technology.",
    rating: 4.5,
    ratingCount: 350,
  },

  {
    id: 149,
    name: "Tin Tomato",
    imgUrl: TinTomato,
    category: "Groceries",
    details: "High-quality canned tomatoes, ideal for cooking.",
    price: 1.5,
    rating: 5,
    ratingCount: 250,
  },

  {
    id: 152,
    name: "Milk",
    imgUrl: Milk,
    category: "Groceries",
    details: "Fresh and creamy milk, great for your daily needs.",
    price: 3,
    rating: 4,
    ratingCount: 210,
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
    category: "Phones",
    details:
      "A powerful smartphone with advanced features, ideal for photography and multitasking.",
    rating: 4,
    ratingCount: 290,
  },

  {
    id: 155,
    name: "Rice",
    imgUrl: Rice,
    category: "Groceries",
    details: "High-quality rice, ideal for everyday meals.",
    price: 10,
    rating: 4,
    ratingCount: 310,
  },
  {
    id: 144,
    name: "Lenovo IdeaPad 15",
    imgUrl: LenovoideaPad,
    category: "Computers",
    details:
      "Affordable laptop with solid performance for home and office use.",
    price: 550,
    rating: 4.5,
    ratingCount: 350,
  },
  {
    id: 156,
    name: "Amber Mystique",
    imgUrl: BluePerfume,
    category: "Fragrance",
    details: "A fresh and long-lasting blue fragrance for every occasion.",
    price: 45,
    rating: 4.5,
    ratingCount: 200,
  },

  {
    id: 161,
    name: "Midnight Whisper",
    imgUrl: PurplePerf,
    category: "Fragrance",
    details: "A sweet and floral scent, ideal for sunny days.",
    price: 38,
    rating: 4,
    ratingCount: 120,
  },
  {
    id: 162,
    name: "Nivea Dry Impact",
    imgUrl: NiveaDryImpact,
    category: "Fragrance",
    details: "Refreshing and clean, keeps you fresh all day.",
    price: 35,
    rating: 4.5,
    ratingCount: 210,
  },
  {
    id: 163,
    name: "Emper Memories for Women",
    imgUrl: EmperMemories,
    category: "Fragrance",
    details: "Nostalgic and warm, a unique scent for special moments.",
    price: 42,
    rating: 5,
    ratingCount: 190,
  },
  {
    id: 164,
    name: "Apple Wrist Watch",
    imgUrl: AppleWristWatch,
    category: "SmartWatch",
    details: "High-tech Apple wristwatch with advanced features.",
    price: 350,
    rating: 5,
    ratingCount: 400,
  },
  {
    id: 165,
    name: "Golden Rolex",
    imgUrl: GoldenRolex,
    category: "SmartWatch",
    details: "Elegant golden smartwatch with premium design.",
    price: 450,
    rating: 4.5,
    ratingCount: 250,
  },

  {
    id: 167,
    name: "Edifice Watch",
    imgUrl: EdificeWatch,
    category: "SmartWatch",
    details: "Modern smartwatch with robust build and features.",
    price: 200,
    rating: 4,
    ratingCount: 180,
  },
  {
    id: 168,
    name: "Brown Leather Watch",
    imgUrl: BrownLeatherWatch,
    category: "SmartWatch",
    details: "Classic brown leather smartwatch for all occasions.",
    price: 250,
    rating: 4.5,
    ratingCount: 220,
  },
  {
    id: 169,
    name: "Folding Screen Camera",
    imgUrl: FoldingScreenCamera,
    category: "Camera",
    details: "High-definition folding screen camera for professional use.",
    price: 300,
    rating: 4.5,
    ratingCount: 150,
  },
  {
    id: 170,
    name: "Digital Camcorder",
    imgUrl: DigitalCamcorder,
    category: "Camera",
    details: "Full HD digital camcorder for capturing stunning videos.",
    price: 350,
    rating: 5,
    ratingCount: 200,
  },
  {
    id: 171,
    name: "Compact Camera 1",
    imgUrl: CompactCamera1,
    category: "Camera",
    details: "Lightweight compact camera for everyday photography.",
    price: 200,
    rating: 4.5,
    ratingCount: 120,
  },
  {
    id: 172,
    name: "Compact Camera 2",
    imgUrl: CompactCamera2,
    category: "Camera",
    details: "Portable compact camera with enhanced features.",
    price: 220,
    rating: 4,
    ratingCount: 140,
  },
  {
    id: 173,
    name: "Black Over-Ear Headphones",
    imgUrl: BlackOverEarHeadphones,
    category: "HeadPhones",
    details: "Premium black over-ear headphones for immersive sound.",
    price: 150,
    rating: 4,
    ratingCount: 300,
  },
  {
    id: 174,
    name: "Headphones with Microphone",
    imgUrl: HeadphonesWithMicrophone,
    category: "HeadPhones",
    details: "Versatile headphones with built-in microphone.",
    price: 120,
    rating: 4,
    ratingCount: 250,
  },
  {
    id: 175,
    name: "Wireless Headphones",
    imgUrl: WirelessHeadphones,
    category: "HeadPhones",
    details:
      "Wireless headphones with excellent battery life and sound quality.",
    price: 180,
    rating: 5,
    ratingCount: 320,
  },
  {
    id: 176,
    name: "DualShock Controller",
    imgUrl: DualShockController,
    category: "Gaming",
    details: "Ergonomic gamepad for immersive gaming sessions.",
    price: 70,
    rating: 4,
    ratingCount: 450,
  },
  {
    id: 177,
    name: "Joystick Controller",
    imgUrl: JoystickController,
    category: "Gaming",
    details: "Classic joystick controller for retro and modern games.",
    price: 50,
    rating: 4.5,
    ratingCount: 300,
  },
  {
    id: 178,
    name: "PS4 Gaming Set",
    imgUrl: PS4GamingSet,
    category: "Gaming",
    details: "Complete PS4 gaming set with controllers and accessories.",
    price: 400,
    rating: 4,
    ratingCount: 520,
  },

  {
    id: 101,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    imgUrl: Pad,
    details:
      "Ensures the links are crawlable by search engines (important if you use server-side rendering or prerendering",
    category: "Gaming",
    rating: 5,
    ratingCount: 120,
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
  {
    id: 7,
    imgUrl: Groceries,
    subhead: "Groceries",
  },
  {
    id: 8,
    imgUrl: Fragnance,
    subhead: "Fragrance",
  },
];

export const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Filtered products based on the selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

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
          Browse By Category
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
              onClick={() => setSelectedCategory(category.subhead)}
              className="group flex flex-col cursor-pointer rounded-md hover:bg-customRed hover:border-none hover:text-white gap-3  w-[170px] h-[145px] justify-center items-center border border-gray-400"
            >
              <img
                src={category.imgUrl}
                alt="cell"
                className="group-hover:invert w-[56px] h-[56px]"
              />
              <p>{category.subhead}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full my-7 md:justify-items-stretch justify-items-center ">
          {filteredProducts.map((product) => (
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
                    <img src={Favorite} alt="favorite"/>
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
      <ScrollToTop />
    </>
  );
};
