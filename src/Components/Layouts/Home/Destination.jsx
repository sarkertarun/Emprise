import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import DestinationCard from '../../DestinationCard'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import RightArrow from '../../RightArrow'
import LeftArrow from '../../LeftArrow'
import Vietnam from "../../../assets/vietnam.png"
import Greece from "../../../assets/greece.png"
import London from "../../../assets/london.png"
import Amsterdam from '../../../assets/amsterdam.png'
import Paris from '../../../assets/paris.png'
import Flex from '../../Flex'
const Destination = () => {
        // Slider Setting part start
    const settings = {
        className: "slider-container",
        dots: false,
        infinite: true,
        variableWidth: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        nextArrow:<RightArrow />,
        prevArrow:<LeftArrow />
      };
      // Slider Setting part End
  
  return (
    <>
    <section className='pt-10 pb-20'>
        <Container>
            <Heading as="h3" text="Top Destinations" className=""/>
            <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pt-5 pb-12"/>
        {/* Slider Item part start */}
            <Slider {...settings}>
       <div>
        <DestinationCard
                src={Vietnam}
                alt={Vietnam}
                badge="4.7"
                title="Vietnam"
                text="Waterfall"
                className="w-full"
                />
                <DestinationCard
                src={Vietnam}
                alt={Vietnam}
                badge="4.7"
                title="Vietnam"
                text="Waterfall"
                className="w-full mt-8"
                />
        </div>
        <div>
        <DestinationCard
                src={Greece}
                alt={Greece}
                badge="4.7"
                title="Greece"
                text="Waterfall"
                className="w-full"
                />
        </div>
        <div>
        <DestinationCard
                src={London}
                alt={London}
                badge="4.7"
                title="London"
                text="Waterfall"
                className="w-full"
                />
                <Flex className="mt-8 ">
                <DestinationCard
                src={Amsterdam}
                alt={Amsterdam}
                badge="4.7"
                title="Amsterdam"
                text="Waterfall"
                className="w-[240px] mr-8"
                />
                <DestinationCard
                src={Paris}
                alt={Paris}
                badge="4.7"
                title="Paris"
                text="Waterfall"
                className=" w-[376px]"
                />
                </Flex>
        </div>
       
       <Flex className="justify-between">
       <div>
        <DestinationCard
                src={Vietnam}
                alt={Vietnam}
                badge="4.7"
                title="Vietnam"
                text="Waterfall"
                className="w-full"
                />
                <DestinationCard
                src={Vietnam}
                alt={Vietnam}
                badge="4.7"
                title="Vietnam"
                text="Waterfall"
                className="w-full mt-8"
                />
        </div>
        <div className='mx-8'>
        <DestinationCard
                src={Greece}
                alt={Greece}
                badge="4.7"
                title="Greece"
                text="Waterfall"
                className="w-full"
                />
        </div>
        <div>
        <DestinationCard
                src={London}
                alt={London}
                badge="4.7"
                title="London"
                text="Waterfall"
                className="w-full"
                />
                <Flex className="mt-8 ">
                <DestinationCard
                src={Amsterdam}
                alt={Amsterdam}
                badge="4.7"
                title="Amsterdam"
                text="Waterfall"
                className="w-[240px] mr-8"
                />
                <DestinationCard
                src={Paris}
                alt={Paris}
                badge="4.7"
                title="Paris"
                text="Waterfall"
                className=" w-[376px]"
                />
                </Flex>
            </div>
          </Flex>
         </Slider>  
         {/* Slider Item part End */} 
        </Container>
    </section>
    </>
  )
}

export default Destination