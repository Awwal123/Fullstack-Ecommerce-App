import { BestSelling } from "./BestSelling"
import { ExclusiveNavbar } from "./ExclusiveNavbar"
import { FlashSale } from "./FlashSales"
import { JamBoxAdvert } from "./JamBoxAdvert"
import { Slider } from "./Slider"

export const Exclusive = () => {
    return (
        <>
       <ExclusiveNavbar />
       <Slider />
       <FlashSale />
       <BestSelling />
       <JamBoxAdvert />
        <div>
          
        </div>
        </>
    )
}