import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { toast } from "react-toastify";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase"; 


interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imgUrl: string;
}


interface WishlistItem {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

interface CartContextProps {
  cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  addToCart: (product: CartItem) => void;
  setCartItems: (items: CartItem[]) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  addToWishlist: (product: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  total: number;
  name: string; 
  email: string;
  setName: (name: string) => void;  
  setEmail: (email: string) => void; 
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const userId = localStorage.getItem("userUID"); 

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(() => {
    const savedWishlist = localStorage.getItem("wishlistItems");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

 
  useEffect(() => {
    if (!userId) return;

    const fetchCartFromFirestore = async () => {
      try {
        const userDoc = doc(db, "users", userId);
        const userSnapshot = await getDoc(userDoc);
        if (userSnapshot.exists()) {
          const data = userSnapshot.data();
          setName(data.name || "");
          setEmail(data.email || "");
          setCartItems(data.cart || []);
        }
      } catch (error) {
        console.error("Error fetching cart from Firestore:", error);
      }
    };

    fetchCartFromFirestore();
  }, [userId]);

  
  useEffect(() => {
    if (!userId) return;

    const saveCartToFirestore = async () => {
      try {
        const userDoc = doc(db, "users", userId);
        await setDoc(
          userDoc,
          { cart: cartItems },
          { merge: true } 
        );
      } catch (error) {
        console.error("Error saving cart to Firestore:", error);
      }
    };

    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    saveCartToFirestore();
  }, [cartItems, userId]);

  useEffect(() => {
    localStorage.setItem("wishlistItems", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product: CartItem) => {
    setCartItems((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        toast.success(`${product.name} quantity increased!`);
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      toast.success(`${product.name} added to cart!`);
      return [...prev, { ...product, quantity: 1 }];
      
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from cart.");
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
    toast.success("Quantity updated.");
  };

  const addToWishlist = (product: WishlistItem) => {
    setWishlistItems((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        toast.error("Item already in wishlist!");
        return prev;
      }
      toast.success(`${product.name} added to wishlist!`);
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
    toast.info("Item removed from wishlist.");
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        setCartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        total,
        name,
        email,
        setName,  
        setEmail, 
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
