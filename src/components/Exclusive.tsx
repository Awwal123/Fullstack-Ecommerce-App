import { BestSelling } from "./BestSelling"
import { ExclusiveNavbar } from "./ExclusiveNavbar"
import { ExploreOurProduct } from "./Explore"
import { FlashSale } from "./FlashSales"
import { JamBoxAdvert } from "./JamBoxAdvert"
import { NewArrival } from "./NewArrival"
import { Slider } from "./Slider"
import { Upbutton } from "./Upbutton"
import { WhyChooseUs } from "./WhyChooseUs"

export const Exclusive = () => {
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
       <Upbutton />
        <div>
          
        </div>
        </>
    )
}