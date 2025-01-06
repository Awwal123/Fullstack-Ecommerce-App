import { ExclusiveNavbar } from "./ExclusiveNavbar";
import four from "../assets/images/FourStar.png";
import Delivery from "../assets/images/delivery.png";
import Returns from "../assets/images/return.png";
// import Sneaker from "../assets/images/MenFahsionShoe.png";
import Pad from "../assets/images/WiredPad.png";
import Keyboard from "../assets/images/WiredKeyboard.png";
import Monitor from "../assets/images/GamingMonitor.png";
import Smart from "../assets/images/Smart.png";
import Jacket from "../assets/images/Jacket.png";
import Iron from "../assets/images/PressingIron.png";
import Rolex from "../assets/images/GoldenRolex.png";
import Sneaker from "../assets/images/MenFahsionShoe.png";
import MenShort from "../assets/images/MenShort.png";
import PowerBank from "../assets/images/PowerBank.png";
import PS4 from "../assets/images/PS4.png";
import HeadPhone from "../assets/images/HeadPhone.png";
import TimberLand from "../assets/images/TimberLand.png";
import Redmi from "../assets/images/Redmi.png";
import Rubic2 from "../assets/images/Rubic2.png";
import Laptop from "../assets/images/GamingLaptop.png";
import five from "../assets/images/FiveStar.png";
import fourHalf from "../assets/images/FourHalfStar.png";
import Iphonex from "../assets/images/IphoneX.png";
import GucciHandbag from "../assets/images/curology.png";
import SilverRolex from "../assets/images/SilverRolex.png";
import VIP2 from "../assets/images/VIP2.png";
import SixteenProMax from "../assets/images/16Promax.png";
import Durag from "../assets/images/Durag.png";
import VIP from "../assets/images/VIP.png";
import Infinix from "../assets/images/Infinix.png";
import Pro from "../assets/images/15pro.png";
import book from "../assets/images/book.png";
import mouse from "../assets/images/Wireless_mouse-removebg-preview.png";
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
import LenovoideaPad from "../assets/images/Categories/Lenovoideapad15-com.png"
import bag from "../assets/images/GucciHandbag.png";
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
import Rice from "../assets/images/Categories/Rice.png"
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
import SilveRolex from "../assets/images/Categories/SilverRolex.png";
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
import { useCart } from "./CartContext";
import { useParams } from "react-router-dom";

const products = [
  {
    id: 101,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    imgUrl: Pad,
    description:
      "Ergonomic gamepad designed for a superior gaming experience with responsive buttons and precision controls. Compatible with PCs and gaming consoles.",
    category: "Gaming",
    discount: "-40%",
    rating: 5,
    ratingCount: 120,
  },
  {
    id: 102,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    imgUrl: Keyboard,
    description:
      "Durable and reliable wired keyboard with responsive keys, perfect for work and gaming setups.",
    category: "Accessories",
    discount: "-35%",
    rating: 4,
    ratingCount: 80,
  },
  {
    id: 103,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    imgUrl: Monitor,
    description:
      "27-inch Full HD IPS display with vibrant colors and ultra-low latency, ideal for immersive gaming and professional use.",
    category: "Electronics",
    discount: "-30%",
    rating: 4.5,
    ratingCount: 230,
  },
  {
    id: 104,
    name: "Wrist Waterproof Leather",
    price: 375,
    oldPrice: 400,
    imgUrl: Smart,
    description:
      "Stylish waterproof leather wristwatch with a minimalist design and robust build quality.",
    category: "Fashion",
    discount: "-25%",
    rating: 4.5,
    ratingCount: 120,
  },
  {
    id: 105,
    name: "Quilted Satin Jacket",
    price: 750,
    oldPrice: 1000,
    imgUrl: Jacket,
    description:
      "Luxurious quilted satin jacket designed for comfort and style, suitable for casual and semi-formal wear.",
    category: "Clothing",
    discount: "-50%",
    rating: 4,
    ratingCount: 70,
  },
  {
    id: 106,
    name: "Spray Pressing Iron",
    price: 180,
    oldPrice: 270,
    imgUrl: Iron,
    description:
      "Efficient spray pressing iron with adjustable temperature control and non-stick soleplate.",
    category: "Home Appliances",
    discount: "-60%",
    rating: 5,
    ratingCount: 99,
  },
  {
    id: 107,
    name: "Rolex 2813",
    price: 1000,
    oldPrice: 730,
    imgUrl: Rolex,
    description:
      "Classic Rolex watch with a sleek design, precision movement, and unmatched craftsmanship.",
    category: "Fashion",
    discount: "-40%",
    rating: 4,
    ratingCount: 60,
  },
  {
    id: 109,
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    oldPrice: 1100,
    imgUrl: Laptop,
    description:
      "High-performance gaming laptop with an FHD display, advanced cooling system, and cutting-edge graphics.",
    category: "Electronics",
    discount: "-25%",
    rating: 5,
    ratingCount: 65,
  },
  {
    id: 110,
    name: "Men Casual Sneakers",
    price: 560,
    oldPrice: 1400,
    imgUrl: Sneaker,
    description:
      "Lightweight and comfortable sneakers designed for casual outings and everyday wear.",
    category: "Footwear",
    discount: "-40%",
    rating: 4,
    ratingCount: 60,
  },
  {
    id: 111,
    name: "Itel 20000mh Power Bank",
    price: 150,
    oldPrice: 500,
    imgUrl: PowerBank,
    description:
      "Portable power bank with a massive 20000mAh capacity, perfect for charging multiple devices on the go.",
    category: "Accessories",
    discount: "-30%",
    rating: 4,
    ratingCount: 215,
  },
  {
    id: 112,
    name: "Sony PS4 Console",
    price: 1200,
    oldPrice: 2000,
    imgUrl: PS4,
    discount: "-60%",
    rating: 5,
    ratingCount: 96,
    category: "Electronics",
    description:
      "The Sony PS4 Console offers an immersive gaming experience with high-definition graphics and a vast library of games.",
  },
  {
    id: 113,
    name: "P47 Wireless Headphone",
    price: 116,
    oldPrice: 560,
    imgUrl: HeadPhone,
    discount: "-20%",
    rating: 4,
    ratingCount: 78,
    category: "Audio",
    description:
      "Experience crystal-clear sound with the P47 Wireless Headphone, featuring a comfortable design and long battery life.",
  },
  {
    id: 114,
    name: "Casual High-Top Shoes",
    price: 420,
    oldPrice: 1200,
    imgUrl: TimberLand,
    discount: "-35%",
    rating: 4.5,
    ratingCount: 28,
    category: "Fashion",
    description:
      "Step out in style with these Casual High-Top Shoes, perfect for both casual outings and sporty events.",
  },
  {
    id: 115,
    name: "XIAOMI Redmi 13 6.79",
    price: 700,
    oldPrice: 900,
    imgUrl: Redmi,
    discount: "-57%",
    rating: 5,
    ratingCount: 300,
    category: "Smartphones",
    description:
      "XIAOMI Redmi 13 features a 6.79-inch display, powerful performance, and an exceptional camera for a premium smartphone experience.",
  },
  {
    id: 116,
    name: "2 In 1 Men's Short Sleeve",
    price: 20,
    oldPrice: 200,
    imgUrl: MenShort,
    discount: "-10%",
    rating: 4,
    ratingCount: 96,
    category: "Clothing",
    description:
      "Stay cool and stylish with this 2-in-1 Men's Short Sleeve, designed for ultimate comfort and versatility.",
  },
  {
    id: 117,
    name: "Rubick Cube",
    price: 7,
    oldPrice: 18,
    imgUrl: Rubic2,
    discount: "-37%",
    rating: 4.5,
    ratingCount: 114,
    category: "Toys",
    description:
      "Challenge your mind with this classic Rubick Cube, a timeless puzzle game for all ages.",
  },
  {
    id: 118,
    name: "Iphone X",
    price: 160,
    oldPrice: 170,
    imgUrl: Iphonex,
    rating: 4.5,
    ratingCount: 165,
    category: "Smartphones",
    description:
      "The iPhone X combines sleek design with advanced technology for a premium mobile experience.",
  },
  {
    id: 119,
    name: "Curology Product Set",
    price: 960,
    oldPrice: 1160,
    imgUrl: GucciHandbag,
    rating: 5,
    ratingCount: 75,
    category: "Beauty",
    description:
      "Transform your skincare routine with the Curology Product Set, tailored to address your unique skin needs.",
  },
  {
    id: 120,
    name: "Silver Rolex",
    price: 360,
    imgUrl: SilverRolex,
    rating: 4.5,
    ratingCount: 65,
    category: "Accessories",
    description:
      "Elevate your style with the timeless elegance of the Silver Rolex watch, perfect for any occasion.",
  },
  {
    id: 121,
    name: "Men's Fashion Sneakers",
    price: 180,
    oldPrice: 260,
    imgUrl: VIP2,
    rating: 4,
    ratingCount: 71,
    category: "Footwear",
    description:
      "These Men's Fashion Sneakers are designed for style and comfort, ideal for everyday wear.",
  },
  {
    id: 122,
    name: "Iphone 16 Pro Max",
    price: 1199,
    imgUrl: SixteenProMax,
    rating: 5,
    ratingCount: 187,
    category: "Smartphones",
    description:
      "Discover cutting-edge performance and unparalleled design with the iPhone 16 Pro Max.",
  },
  {
    id: 123,
    name: "Silk Titan Durag",
    price: 7,
    oldPrice: 10,
    imgUrl: Durag,
    rating: 4.5,
    ratingCount: 47,
    category: "Fashion Accessories",
    description:
      "Keep your hairstyle in place with the premium Silk Titan Durag, combining style and function.",
  },
  {
    id: 124,
    name: "Trend Sports Shoes",
    price: 300,
    imgUrl: VIP,
    rating: 5,
    ratingCount: 720,
    category: "Footwear",
    description:
      "Achieve peak performance with Trend Sports Shoes, designed for athletes and fitness enthusiasts.",
  },
  {
    id: 125,
    name: "Infinix Smart 8",
    price: 500,
    oldPrice: 1160,
    imgUrl: Infinix,
    rating: 4,
    ratingCount: 82,
    category: "Smartphones",
    description:
      "The Infinix Smart 8 delivers exceptional value with its powerful features and sleek design.",
  },
  {
    id: 126,
    name: "Iphone 15",
    price: 700,
    oldPrice: 10,
    imgUrl: Pro,
    rating: 5,
    ratingCount: 647,
    category: "Smartphones",
    description:
      "Get the latest technology and unparalleled performance with the iPhone 15.",
  },
  {
    id: 127,
    name: "Small Bookshelf",
    price: 300,
    imgUrl: book,
    rating: 5,
    ratingCount: 120,
    category: "Furniture",
    description:
      "Organize your space with this compact and stylish Small Bookshelf, perfect for any room.",
  },
  {
    id: 128,
    name: "Wireless Mouse",
    price: 500,
    oldPrice: 1160,
    imgUrl: mouse,
    rating: 4,
    ratingCount: 232,
    category: "Accessories",
    description:
      "Enhance your productivity with this sleek Wireless Mouse, designed for smooth navigation.",
  },
  {
    id: 129,
    name: "Gucci Handbag",
    price: 500,
    oldPrice: 1160,
    imgUrl: bag,
    rating: 4,
    ratingCount: 142,
    category: "Fashion",
    description:
      "Carry your essentials in style with this elegant Gucci Handbag, a perfect blend of fashion and utility.",
  },

  {
    id: 130,
    name: "Iphone 15 Pro",
    price: 500,
    imgUrl: Iphone15pro,
    category: "Phone",
    description: "The latest iPhone model featuring cutting-edge technology and design.",
    rating: 5,
    ratingCount: 330,
},
{
    id: 131,
    name: "Apple iPad Pro 11",
    price: 700,
    imgUrl: AppleIpadpro11,
    category: "Tablet",
    description: "High-performance iPad with an 11-inch display, perfect for professionals and creatives.",
    rating: 4.5,
    ratingCount: 210,
},
{
    id: 132,
    name: "iPhone 13 Pro",
    price: 600,
    imgUrl: Iphone13Pro,
    category: "Phone",
    description: "A powerful smartphone with advanced features, ideal for photography and multitasking.",
    rating: 4,
    ratingCount: 290,
},
{
    id: 133,
    name: "iPhone 14 Pro Max",
    price: 800,
    imgUrl: Iphone14ProMax,
    category: "Phone",
    description: "Top-of-the-line iPhone with an expansive display and superior performance.",
    rating: 5,
    ratingCount: 400,
},
{
    id: 134,
    name: "iPhone X",
    price: 400,
    imgUrl: IphoneX,
    category: "Phone",
    description: "Revolutionary iPhone with a stunning OLED display and Face ID technology.",
    rating: 4.5,
    ratingCount: 350,
},
{
    id: 135,
    name: "Samsung Galaxy A06",
    price: 300,
    imgUrl: SamsungalaxyA06,
    category: "Phone",
    description: "An affordable smartphone with essential features for everyday use.",
    rating: 5,
    ratingCount: 150,
},
{
    id: 136,
    name: "iPhone 5s",
    price: 200,
    imgUrl: Iphone5s,
    category: "Phone",
    description: "Classic iPhone model with a compact design and reliable performance.",
    rating: 4,
    ratingCount: 220,
},
{
    id: 137,
    name: "Tecno Pop 9",
    price: 250,
    imgUrl: TecnoPop9,
    category: "Phone",
    description: "Budget-friendly smartphone with a large display and long-lasting battery.",
    rating: 5,
    ratingCount: 180,
},
{
    id: 138,
    name: "Xiaomi Redmi 14C",
    price: 280,
    imgUrl: XIAOMRedmi14C,
    category: "Phone",
    description: "Feature-packed smartphone with great performance at an affordable price.",
    rating: 4.5,
    ratingCount: 200,
},
{
  id: 140,
  name: "Apple MacBook Pro",
  imgUrl: AppleMacBookPro,
  category: "Computer",
  description: "Powerful laptop with advanced features for professionals and creatives.",
  price: 1200,
  rating: 5,
  ratingCount: 560,
},
{
  id: 141,
  name: "Dell Latitude 7400 Touch Screen",
  imgUrl: DellLatitude7400TouchScreen,
  category: "Computer",
  description: "Versatile and durable laptop with a responsive touch screen for business use.",
  price: 1000,
  rating: 5,
  ratingCount: 480,
},
{
  id: 142,
  name: "HP EliteBook 840 G5",
  imgUrl: HpEliteBook840G5,
  category: "Computer",
  description: "High-performance laptop with robust security features for enterprise users.",
  price: 950,
  rating: 4,
  ratingCount: 430,
},
{
  id: 143,
  name: "HP Notebook 348 G5",
  imgUrl: HpNoteBook348G5,
  category: "Computer",
  description: "Reliable and affordable notebook with essential features for daily tasks.",
  price: 600,
  rating: 4.5,
  ratingCount: 390,
},
{
  id: 144,
  name: "Lenovo IdeaPad 15",
  imgUrl: LenovoideaPad,
  category: "Computer",
  description: "Affordable laptop with solid performance for home and office use.",
  price: 550,
  rating: 4.5,
  ratingCount: 350,
},
{
  id: 145,
  name: "Apple",
  imgUrl: Apple,
  category: "groceries",
  description: "Fresh and crispy apples perfect for snacks and desserts.",
  price: 3,
  rating: 5,
  ratingCount: 200,
},
{
  id: 146,
  name: "Mixed Fruits",
  imgUrl: fruits,
  category: "groceries",
  description: "A delightful mix of fresh seasonal fruits.",
  price: 5,
  rating: 4.5,
  ratingCount: 150,
},
{
  id: 147,
  name: "Dog Food",
  imgUrl: DogFoood,
  category: "groceries",
  description: "Nutritious dog food for a healthy and happy pet.",
  price: 20,
  rating: 4.5,
  ratingCount: 100,
},
{
  id: 148,
  name: "Banana",
  imgUrl: Banana,
  category:"groceries",
  description: "Sweet and ripe bananas, perfect for snacking.",
  price: 2,
  rating: 5,
  ratingCount: 180,
},
{
  id: 149,
  name: "Tin Tomato",
  imgUrl: TinTomato,
  category: "groceries",
  description: "High-quality canned tomatoes, ideal for cooking.",
  price: 1.5,
  rating: 5,
  ratingCount: 250,
},
{
  id: 150,
  name: "Cat Food",
  imgUrl: CatFood,
  category: "groceries",
  description: "Healthy and delicious food for your cat.",
  price: 15,
  rating: 5,
  ratingCount: 120,
},
{
  id: 151,
  name: "Egg",
  imgUrl: Egg,
  category: "groceries",
  description: "Farm-fresh eggs perfect for cooking and baking.",
  price: 2.5,
  rating: 4,
  ratingCount: 300,
},
{
  id: 152,
  name: "Milk",
  imgUrl: Milk,
  category: "groceries",
  description: "Fresh and creamy milk, great for your daily needs.",
  price: 3,
  rating: 4,
  ratingCount: 210,
},
{
  id: 153,
  name: "Strawberry",
  imgUrl: Strawberry,
  category: "Fgroceries",
  description: "Juicy and sweet strawberries, perfect for desserts.",
  price: 4,
  rating: 5,
  ratingCount: 160,
},
{
  id: 154,
  name: "Nescafe Coffee",
  imgUrl: Nescafe,
  category: "groceries",
  description: "Rich and aromatic Nescafe coffee for a perfect start to your day.",
  price: 8,
  rating: 4.5,
  ratingCount: 220,
},
{
  id: 155,
  name: "Rice",
  imgUrl: Rice,
  category: "groceries",
  description: "High-quality rice, ideal for everyday meals.",
  price: 10,
  rating: 4,
  ratingCount: 310,
},
{
  id: 156,
  name: "Amber Mystique",
  imgUrl: BluePerfume,
  category: "Fragrance",
  description: "A fresh and long-lasting blue fragrance for every occasion.",
  price: 45,
  rating: 4.5,
  ratingCount: 200,
},
{
  id: 157,
  name: "David off",
  imgUrl: DavidoOff,
  category: "Fragrance",
  description: "Elegant and iconic, perfect for evening wear.",
  price: 50,
  rating: 5,
  ratingCount: 150,
},
{
  id: 158,
  name: "Ocean Breeze",
  imgUrl: BlackPerfume,
  category: "Fragrance",
  description: "Mystical and bold fragrance to make a statement.",
  price: 55,
  rating: 4,
  ratingCount: 180,
},
{
  id: 159,
  name: "Tommy Perfume",
  imgUrl: Tommy,
  category: "Fragrance",
  description: "Classic and sophisticated, perfect for daily wear.",
  price: 40,
  rating: 4.5,
  ratingCount: 250,
},
{
  id: 160,
  name: "Versace Dylan",
  imgUrl: VersaceDylna,
  category: "Fragrance",
  description: "Luxury and charm combined in a signature scent.",
  price: 60,
  rating: 5,
  ratingCount: 300,
},
{
  id: 161,
  name: "Midnight Whisper",
  imgUrl: PurplePerf,
  category: "Fragrance",
  description: "A sweet and floral scent, ideal for sunny days.",
  price: 38,
  rating: 4,
  ratingCount: 120,
},
{
  id: 162,
  name: "Nivea Dry Impact",
  imgUrl: NiveaDryImpact,
  category: "Fragrance",
  description: "Refreshing and clean, keeps you fresh all day.",
  price: 35,
  rating: 4.5,
  ratingCount: 210,
},
{
  id: 163,
  name: "Emper Memories for Women",
  imgUrl: EmperMemories,
  category: "Fragrance",
  description: "Nostalgic and warm, a unique scent for special moments.",
  price: 42,
  rating: 5,
  ratingCount: 190,
},
{
  id: 164,
  name: "Apple Wrist Watch",
  imgUrl: AppleWristWatch,
  category: "Smartwatch",
  description: "High-tech Apple wristwatch with advanced features.",
  price: 350,
  rating: 5,
  ratingCount: 400,
},
{
  id: 165,
  name: "Golden Rolex",
  imgUrl: GoldenRolex,
  category: "Smartwatch",
  description: "Elegant golden smartwatch with premium design.",
  price: 450,
  rating: 4.5,
  ratingCount: 250,
},
{
  id: 166,
  name: "Silver Rolex",
  imgUrl: SilveRolex,
  category: "Smartwatch",
  description: "Stylish silver smartwatch with sleek aesthetics.",
  price: 400,
  rating: 5,
  ratingCount: 300,
},
{
  id: 167,
  name: "Edifice Watch",
  imgUrl: EdificeWatch,
  category: "Smartwatch",
  description: "Modern smartwatch with robust build and features.",
  price: 200,
  rating: 4,
  ratingCount: 180,
},
{
  id: 168,
  name: "Brown Leather Watch",
  imgUrl: BrownLeatherWatch,
  category: "Smartwatch",
  description: "Classic brown leather smartwatch for all occasions.",
  price: 250,
  rating: 4.5,
  ratingCount: 220,
},
{
  id: 169,
  name: "Folding Screen Camera",
  imgUrl: FoldingScreenCamera,
  category: "Camera",
  description: "High-definition folding screen camera for professional use.",
  price: 300,
  rating: 4.5,
  ratingCount: 150,
},
{
  id: 170,
  name: "Digital Camcorder",
  imgUrl: DigitalCamcorder,
  category: "Camera",
  description: "Full HD digital camcorder for capturing stunning videos.",
  price: 350,
  rating: 5,
  ratingCount: 200,
},
{
  id: 171,
  name: "Compact Camera 1",
  imgUrl: CompactCamera1,
  category: "Camera",
  description: "Lightweight compact camera for everyday photography.",
  price: 200,
  rating: 4.5,
  ratingCount: 120,
},
{
  id: 172,
  name: "Compact Camera 2",
  imgUrl: CompactCamera2,
  category: "Camera",
  description: "Portable compact camera with enhanced features.",
  price: 220,
  rating: 4,
  ratingCount: 140,
},
{
  id: 173,
  name: "Black Over-Ear Headphones",
  imgUrl: BlackOverEarHeadphones,
  category: "Headphones",
  description: "Premium black over-ear headphones for immersive sound.",
  price: 150,
  rating: 4.5,
  ratingCount: 300,
},
{
  id: 174,
  name: "Headphones with Microphone",
  imgUrl: HeadphonesWithMicrophone,
  category: "Headphones",
  description: "Versatile headphones with built-in microphone.",
  price: 120,
  rating: 4,
  ratingCount: 250,
},
{
  id: 175,
  name: "Wireless Headphones",
  imgUrl: WirelessHeadphones,
  category: "Headphones",
  description:
    "Wireless headphones with excellent battery life and sound quality.",
  price: 180,
  rating: 5,
  ratingCount: 320,
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

export const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

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

      <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7">
        <div className="flex text-sm  gap-4 ">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p className="text-gray-500">{product?.category} </p>
          <p className="text-gray-500">/</p>
          <p>{product?.name}</p>
        </div>

        <div className=" my-9 flex justify-between w-full md:flex-row flex-col gap-9 ">
          <div className="bg-gray-200 w-full h-auto md:w-[500px] rounded-md px-4 flex items-center justify-center md:h-[600px]">
            <img
              src={product?.imgUrl}
              alt=""
              className="md:[446px] md:h-[315px] h-auto w-full"
            />
          </div>
          <div className="flex w-full md:w-[40%] flex-col gap-4">
            <h1 className="font-semibold text-2xl tracking-wider">
              {product?.name}
            </h1>
            <div className="flex gap-4">
              <img src={getRatingImage(product?.rating || 0)} alt="" />

              <p>
                ({product?.ratingCount} Reviews) |{" "}
                <span className="text-green-500"> In Stock</span>
              </p>
            </div>
            <p className="text-2xl tracking-wider">${product?.price}</p>
            <p className="text-sm w-full md:w-[373px] leading-6">
              {product?.description}
            </p>

            <hr className="border border-black md:w-[90%] w-full " />

            <div
              className="my-7 flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  w-[165px] h-[56px]"
              onClick={() =>
                addToCart({
                  id: product!.id,
                  name: product!.name,
                  price: product!.price,
                  quantity: 1,
                  imgUrl: product!.imgUrl,
                })
              }
            >
              Buy Now
            </div>
            <div className="w-full md:w-[399px] h-auto border flex flex-col gap-3 border-black p-4">
              <div className="flex items-center  gap-3">
                <img src={Delivery} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Free Delivery</p>
                  <p className="text-xs pb-2   border-b-black">
                    Enter your postal code for Delivery Availability
                  </p>
                </div>
              </div>

              <hr className="border border-black" />
              <div className="flex items-center  gap-3">
                <img src={Returns} alt="" className="w-10 h-10" />
                <div className="flex flex-col gap-2">
                  <p className="font-medium">Return Delivery</p>
                  <p className="text-xs pb-2   border-b-black">
                    Free 30 Days Delivery Returns. Details
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
