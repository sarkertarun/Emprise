import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import RightArrow from '../../RightArrow'
import LeftArrow from '../../LeftArrow'
import TrendingCart from '../../TrendingCart'
import TrendingCartData from '../../Data/TrendingCartData';

const Trending = () => {

  // Slider setting Start
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow:<RightArrow />,
    prevArrow:<LeftArrow />
  };
  
  // Slider setting End
  
  
  // Trending part Data start

  const {trendingData: trendingData} = TrendingCartData();

 // Trending part Data start

  return (
    <>
    <section>
        <Container>
          <Heading as="h3" text="Trending 2021" className=""/>
          <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pt-5 pb-12"/>
        
            <Slider {...settings}>
            {trendingData.map((item, index) => (
            <div >
              <TrendingCart
                 key={index}
                 infoData={item}
                 topSrc={item.topSrc}
                 topAlt={item.topAlt}
                 headTxt={item.headTxt}
                 paraTxt={item.paraTxt}
                 price={item.price}
                 days={item.days}
                 rating={item.rating}
                 review={item.review}
                 discountTxt={item.discountTxt}
              />

            </div>
          ))}
            </Slider>
        </Container>
    </section>
    </>
  );
};

export default Trending;
