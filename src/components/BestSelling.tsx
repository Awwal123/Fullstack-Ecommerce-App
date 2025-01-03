import { Link } from "react-router-dom";
import Favorite from "../assets/images/Favorite.png";
import { useCart } from "./CartContext";
import five from "../assets/images/FiveStar.png";
import fourHalf from "../assets/images/FourHalfStar.png";
import four from "../assets/images/FourStar.png";
import Sneaker from "../assets/images/MenFahsionShoe.png"
import MenShort from "../assets/images/MenShort.png";
import PowerBank from "../assets/images/PowerBank.png";
import PS4 from "../assets/images/PS4.png";
import HeadPhone from "../assets/images/HeadPhone.png";
import TimberLand from "../assets/images/TimberLand.png";
import Redmi from "../assets/images/Redmi.png";
import Rubic2 from "../assets/images/Rubic2.png";

export const products = [
  {
    id: 10,
    name: "Men Casual Sneakers",
    price: 560,
    oldPrice: 1400,
    imgUrl: Sneaker, 
    discount: "-40%",
    rating: 4,
    ratingCount: 60,
  },
  {
    id: 11,
    name: "Itel 20000mh Power Bank",
    price: 150,
    oldPrice: 500,
    imgUrl: PowerBank,
    discount: "-30%",
    rating: 4,
    ratingCount: 215,
  },
  {
    id: 12,
    name: "Sony PS4 Console",
    price: 1200,
    oldPrice: 2000,
    imgUrl: PS4,
    discount: "-60%",
    rating: 5,
    ratingCount: 96,
  },
  {
    id: 13,
    name: "P47 Wireless Headphone",
    price: 116,
    oldPrice: 560,
    imgUrl: HeadPhone,
    discount: "-20%",
    rating: 4,
    ratingCount: 78,
  },
  {
    id: 14,
    name: "Casual High-Top Shoes",
    price: 420,
    oldPrice: 1200,
    imgUrl: TimberLand,
    discount: "-35%",
    rating: 4.5,
    ratingCount: 28,
  },
  {
    id: 15,
    name: "XIAOMI Redmi 13 6.79",
    price: 700,
    oldPrice: 900,
    imgUrl: Redmi,
    discount: "-57%",
    rating: 5,
    ratingCount: 300,
  },
  {
    id: 16,
    name: "2 In 1 Men's Short Sleeve",
    price: 20,
    oldPrice: 200,
    imgUrl: MenShort,
    discount: "-10%",
    rating: 4,
    ratingCount: 96,
  },
  {
    id: 17,
    name: "Rubick Cube",
    price: 7,
    oldPrice: 18,
    imgUrl: Rubic2,
    discount: "-37%",
    rating: 4.5,
    ratingCount: 114,
  },
];


export const BestSelling = () => {
  const { addToCart } = useCart();
  const getRatingImage = (rating: number) => {
    if (rating === 5) return five;
    if (rating === 4.5) return fourHalf;
    if (rating === 4) return four;
    return ""; // Default empty path for other ratings
  };
  return (
    <div className="w-full px-5 py-9 md:py-6 md:px-16 ">
      <div className="flex items-center gap-3">
        <div className="w-5 h-10 bg-[#DB4444] rounded-md"></div>
        <p className="text-customRed text-base font-semibold">This Month</p>
      </div>

      <div className="flex mt-5 items-center justify-between w-full ">
        <h2 className="font-semibold  md:text-3xl flex ">
          Best Selling Products
        </h2>

        <Link to={"/shop"}>
          {" "}
          <div className="mx-auto flex justify-center items-center rounded-md bg-[#DB4444] hover:bg-[#E07575] text-white text-center cursor-pointer  md:w-[159px] md:h-[56px] h-[50px] w-[30vw] ">
            View
          </div>
        </Link>
      </div>

    
        <div className="flex w-auto overflow-y-auto gap-12 md:grid md:grid-cols md:grid-cols-4 md:gap-9 ">
            {products.map((product) => (
                  <div key={product.id} className="w-[190px] my-5 md:w-auto md:h-auto bg-white pb-2 rounded-md shadow-sm">
                  <div className="relative group cursor-pointer bg-gray-100 w-[190px] md:w-auto flex flex-col items-center rounded-t-md pt-3 md:h-[250px] h-[250px]">
                    
                    <div className="px-3 flex w-full justify-between">
                      <div className="bg-[#DB4444] w-[55px] h-[26px] rounded-md text-xs flex items-center justify-center text-white">{product.discount}</div>
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
                        className=" w-[170px]   md:w-[68%] md:h-auto"
                        alt={product.imgUrl}
                      />
                    </div>
      
                    {/* Add to Cart Button (Hidden by Default) */}
                    <div className="w-full mt-auto">
                      <button className="bg-black w-full py-2 rounded-b-md text-white md:opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          quantity: 1, // Default to 1 when adding to cart
                          imgUrl: product.imgUrl,
                        })
                      }>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 md:mt-8">
                    <h2 className="font-medium text-base">{product.name}</h2>
      
                    <div className="flex gap-3">
                      <p className="text-customRed">${product.price}</p>
                      <p className="text-gray-600 font-medium line-through">${product.oldPrice}</p>
                    </div>
                    <div className="flex gap-3 ">
                      <img src={getRatingImage(product.rating)} alt="" />
                      <p className="font-semibold text-gray-600 text-sm">{product.ratingCount}</p>
                    </div>
                  </div>
                </div>
            ))}
        
        </div>
        <hr className="border my-9 md:mt-20" mt-10 />
      </div>

  );
};
