import { useLocation } from "react-router-dom"
import { BestSelling } from "./BestSelling"
import { ExclusiveNavbar } from "./ExclusiveNavbar"
import { ExploreOurProduct } from "./Explore"
import { FlashSale } from "./FlashSales"
import { JamBoxAdvert } from "./JamBoxAdvert"
import { NewArrival } from "./NewArrival"
import { Slider } from "./Slider"
import { ScrollToTop } from "./ScrollToTop"
import { WhyChooseUs } from "./WhyChooseUs"
import { useEffect } from "react"

export const Exclusive = () => {
    const location = useLocation();

    useEffect(() => {
      // Scroll to the top of the page when the component is mounted
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
        <div>
          
        </div>
        </>
    )
}