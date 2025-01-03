import { BestSelling } from "./BestSelling"
import { ExclusiveNavbar } from "./ExclusiveNavbar"
import { FlashSale } from "./FlashSales"
import { Slider } from "./Slider"

export const Exclusive = () => {
    return (
        <>
       <ExclusiveNavbar />
       <Slider />
       <FlashSale />
       <BestSelling />
        <div>
          
        </div>
        </>
    )
}