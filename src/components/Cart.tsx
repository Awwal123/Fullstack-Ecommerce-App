import { ExclusiveNavbar } from "./ExclusiveNavbar";
// import gm from "../assets/images/GamingMonitor.png";
import cancle from "../assets/images/CancelBtn.png";
import up from "../assets/images/DropUp.png";
import down from "../assets/images/DropDown.png";
import { useCart } from "./CartContext";
export const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();
  return (
    <>
      <ExclusiveNavbar />
      <div className=" w-full h-screen  px-3 py-3 md:py-4 md:px-16">
        <div className="flex text-sm my-4 md:my-7 gap-4">
          <p className="text-gray-500">Home </p>
          <p className="text-gray-500">/</p>
          <p>Cart</p>
        </div>

        <div className="w-full flex flex-col h-2/3 overflow-y-auto gap-5">
          <div className=" hidden md:flex justify-between bg-white px-8 py-2 w-full h-[100px] items-center  shadow-customShadow">
            <p>Product</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Subtotal</p>
          </div>
          <div className="flex justify-center items-center gap-3 md:hidden">
            <h3 className="font-semibold text-lg">Total:</h3>
            <p className="text-lg">${total.toFixed(2)}</p>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                className="flex justify-between bg-white md:px-8 py-2 mb-5 rounded-md px-2 w-full h-[200px] items-center  shadow-lg"
                key={item.id}
              >
                {/* Product Details */}
                <div className="relative flex gap-4">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="w-12 h-10"
                  />
                  <img
                    src={cancle}
                    alt="Cancel"
                    className="w-5 h-5 absolute -top-1 left-0 cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  />
                  <div className="flex md:hidden flex-col gap-1">
                    <p className="text-xs">{item.name}</p>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>

                {/* Desktop Price */}
                <p className="hidden md:block">${item.price.toFixed(2)}</p>

                {/* Desktop Quantity Controls */}
                <div className="hidden md:flex items-center justify-between px-3 border border-gray-500 rounded-md w-[74px] h-11">
                  <p>{item.quantity}</p>
                  <div className="flex flex-col gap-1">
                    <img
                      src={up}
                      alt="Increase"
                      className="w-5 cursor-pointer h-5"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                    <img
                      src={down}
                      alt="Decrease"
                      className="w-5 cursor-pointer h-5"
                      onClick={() =>
                        item.quantity > 1 &&
                        updateQuantity(item.id, item.quantity - 1)
                      }
                    />
                  </div>
                </div>

                {/* Desktop Subtotal */}
                <p className="hidden md:block">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Mobile Quantity Controls */}
                <div className="flex md:hidden items-center gap-4">
                  <div
                    className="bg-gray-400 text-black w-6 justify-center flex text-lg items-center cursor-pointer h-8 rounded-md"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </div>

                  <div>{item.quantity}</div>

                  <div
                    className="bg-gray-400 text-black w-6 justify-center flex text-lg items-center cursor-pointer h-8 rounded-md"
                    onClick={() =>
                      item.quantity > 1 &&
                      updateQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h1 className="empty-cart-message">Your cart is empty!</h1>
          )}
        </div>
      </div>
    </>
  );
};
