import { BestSelling } from "./BestSelling"
import { ExclusiveNavbar } from "./ExclusiveNavbar"
import { ExploreOurProduct } from "./Explore"
import { FlashSale } from "./FlashSales"
import { JamBoxAdvert } from "./JamBoxAdvert"
import { NewArrival } from "./NewArrival"
import { Slider } from "./Slider"

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
        <div>
          
        </div>
        </>
    )
}