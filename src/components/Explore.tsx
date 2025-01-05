import Iphonex from "../assets/images/IphoneX.png";
import GucciHandbag from "../assets/images/curology.png";
import SilverRolex from "../assets/images/SilverRolex.png";
import VIP2 from "../assets/images/VIP2.png";
import SixteenProMax from "../assets/images/16Promax.png";
import Durag from "../assets/images/Durag.png";
import VIP from "../assets/images/VIP.png";
import Infinix from "../assets/images/Infinix.png";
import five from "../assets/images/FiveStar.png";
import fourHalf from "../assets/images/FourHalfStar.png";
import four from "../assets/images/FourStar.png";
import Pro from "../assets/images/15pro.png";
import book from "../assets/images/book.png";
import mouse from "../assets/images/Wireless_mouse-removebg-preview.png";
import bag from "../assets/images/GucciHandbag.png";
import { Link } from "react-router-dom";
import Favorite from "../assets/images/Favorite.png";
import { useCart } from "./CartContext";

const products = [
  {
    id: 118,
    name: "Iphone X",
    price: 160,
    oldPrice: 170,
    imgUrl: Iphonex,
    rating: 4.5,
    ratingCount: 165,
  },
  {
    id: 119,
    name: "Curology Product Set ",
    price: 960,
    oldPrice: 1160,
    imgUrl: GucciHandbag,
    rating: 5,
    ratingCount: 75,
  },
  {
    id: 120,
    name: "Silver Rolex",
    price: 360,
    imgUrl: SilverRolex,
    rating: 4.5,
    ratingCount: 65,
  },
  {
    id: 121,
    name: "Men's Fashion Sneakers",
    price: 180,
    oldPrice: 260,
    imgUrl: VIP2,
    rating: 4,
    ratingCount: 71,
  },
  {
    id: 122,
    name: "Iphone 16 Pro Max",
    price: 1199,
    imgUrl: SixteenProMax,
    rating: 5,
    ratingCount: 187,
  },
  {
    id: 123,
    name: "Silk Titan Durag",
    price: 7,
    oldPrice: 10,
    imgUrl: Durag,
    rating: 4.5,
    ratingCount: 47,
  },
  {
    id: 124,
    name: "Trend Sports Shoes",
    price: 300,
    imgUrl: VIP,
    rating: 5,
    ratingCount: 720,
  },
  {
    id: 125,
    name: "Infinix Smart 8",
    price: 500,
    oldPrice: 1160,
    imgUrl: Infinix,
    rating: 4,
    ratingCount: 82,
  },

  {
    id: 126,
    name: "Iphone 15",
    price: 700,
    oldPrice: 10,
    imgUrl: Pro,
    rating: 5,
    ratingCount: 647,
  },
  {
    id: 127,
    name: "Small BookSelf",
    price: 300,
    imgUrl: book,
    rating: 5,
    ratingCount: 120,
  },
  {
    id: 128,
    name: "Wireless Mouse",
    price: 500,
    oldPrice: 1160,
    imgUrl: mouse,
    rating: 4,
    ratingCount: 232,
  },
  {
    id: 129,
    name: "Gucchi Handbag",
    price: 500,
    oldPrice: 1160,
    imgUrl: bag,
    rating: 4,
    ratingCount: 142,
  },
];

export const ExploreOurProduct = () => {
  const { addToCart } = useCart();
  const getRatingImage = (rating: number) => {
    if (rating === 5) return five;
    if (rating === 4.5) return fourHalf;
    if (rating === 4) return four;
    return ""; // Default empty path for other ratings
  };
  return (
    <div className="w-full px-5 py-9 md:py-6 md:px-16 my-7 ">
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <p className="text-customRed text-base font-semibold">Our Products</p>
      </div>

      <h2 className="font-semibold  md:text-3xl mt-4 flex ">
        Explore Our Products
      </h2>

      <div className="flex w-auto overflow-y-auto gap-12 md:grid md:grid-cols md:grid-cols-4 md:gap-9 ">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <div
              key={product.id}
              className="w-[190px] my-5 md:w-auto md:h-auto bg-white pb-2 rounded-md shadow-sm"
            >
              <div className="relative group cursor-pointer bg-gray-100 w-[190px] md:w-auto flex flex-col items-center rounded-t-md pt-3 md:h-[250px] h-[250px]">
                <div className="px-3 flex w-full justify-between">
                  {/* <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-md text-xs flex items-center justify-center text-white">{product.discount}</div> */}
                </div>

                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <div className="flex justify-center w-8 h-8 rounded-full cursor-pointer items-center bg-white">
                    <img src={Favorite} alt="favorite" />
                  </div>
                  {/* <div className="md:flex hidden justify-center w-8 h-8 rounded-full cursor-pointer items-center bg-white">
                        <img src={Eye} alt="eye" />
                      </div> */}
                </div>

                <div className="flex justify-center items-center ">
                  <img
                    src={product.imgUrl}
                    className=" w-[170px]   md:w-[190px] md:h-[180px]"
                    alt={product.imgUrl}
                  />
                </div>

                {/* Add to Cart Button (Hidden by Default) */}
                <div className="w-full mt-auto">
                  <button
                    className="bg-black w-full py-2 rounded-b-md text-white md:opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: 1, // Default to 1 when adding to cart
                        imgUrl: product.imgUrl,
                      })
                    }
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-2 md:mt-8">
                <h2 className="font-medium text-base">{product.name}</h2>

                <div className="flex gap-3">
                  <p className="text-customRed">${product.price}</p>
                  {/* <p className="text-gray-600 font-medium line-through">${product.oldPrice}</p> */}
                </div>
                <div className="flex gap-3 ">
                  <img src={getRatingImage(product.rating)} alt="" />
                  <p className="font-semibold text-gray-600 text-sm">
                    ({product.ratingCount})
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link to={"/shop"}>
        {" "}
        <div className="mx-auto my-7 flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  w-[243px] h-[56px]">
          View All Products
        </div>
      </Link>
      <hr className="border my-9 md:mt-20" mt-10 />
    </div>
  );
};
