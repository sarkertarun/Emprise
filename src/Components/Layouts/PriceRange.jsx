import { Slider } from "keep-react";
import { useState } from "react";
import Flex from "../Flex";
import BoxParagraph from '../BoxParagraph'

const PriceRange = () => {
    const [price, setPrice] = useState([1500, 3000]);
  return (
    <div className="py-5">
         <BoxParagraph text='Price Range' className="pb-6"/>

        <Slider
          className="bg-black"
          range={true}
          min={1000}
          max={5000}
          defaultValue={[1500, 3000]}
          tooltip="top"
          onChange={(value) => setPrice(value)}
        />

        <Flex className="pt-8 justify-between items-center">
            <div className="py-3 w-[152px] pl-6 border border-starColor rounded-xl">
            <h3 className="text-grayColor font-Poppins text-base font-normal"><span className="px-2">$</span>{price[0]}</h3>
            </div>
            <div className="text-grayColor font-Poppins text-3xl font-normal"> - </div>
            <div className="py-3 w-[152px] pl-6 border border-starColor rounded-xl">
            <h3  className="text-grayColor font-Poppins text-base font-normal"><span className="px-2">$</span>{price[1]}</h3>
            </div>

        </Flex>
        
        
    </div>
  )
}

export default PriceRange