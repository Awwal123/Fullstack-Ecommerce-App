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
import bag from "../assets/images/GucciHandbag.png";
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
