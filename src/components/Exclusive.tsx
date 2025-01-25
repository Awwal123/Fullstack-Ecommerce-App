import { useLocation } from "react-router-dom";
import { BestSelling } from "./BestSelling";
import { ExclusiveNavbar } from "./ExclusiveNavbar";
import { ExploreOurProduct } from "./Explore";
import { FlashSale } from "./FlashSales";
import { JamBoxAdvert } from "./JamBoxAdvert";
import { NewArrival } from "./NewArrival";
import { Slider } from "./Slider";
import { ScrollToTop } from "./ScrollToTop";
import { WhyChooseUs } from "./WhyChooseUs";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./config/firebase";

export const Exclusive = () => {
  useEffect(() => {
    const fetchUserCart = async () => {
      const userUID = localStorage.getItem("userUID");
      if (!userUID) return;

      const userDocRef = doc(db, "users", userUID);
      const userSnap = await getDoc(userDocRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        localStorage.setItem("userCart", JSON.stringify(userData.cart || []));
        console.log("Updated cart on home page load:", userData.cart);
      }
    };

    fetchUserCart();
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 5);
  }, [location]);
  return (
    <>
      <ExclusiveNavbar />
      <Slider />
      <FlashSale />
      <BestSelling />
      <JamBoxAdvert />
      <ExploreOurProduct />
      <NewArrival />
      <WhyChooseUs />
      <ScrollToTop />
      <div></div>
    </>
  );
};
