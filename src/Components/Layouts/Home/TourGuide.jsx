import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import TourGuideCard from '../../TourGuideCard'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import RightArrow from '../../RightArrow'
import LeftArrow from '../../LeftArrow'
import GuideData from '../../Data/GuideData'

const TourGuide = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:<RightArrow />,
        prevArrow:<LeftArrow />
      };
    
      const [product, setProduct] = useState(GuideData());
     
  return (
    <>
    <section className=' pt-10 pb-20'>
        <Container>
            <Heading as="h3" text="Tour Guides" className=""/>
            <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pt-5 pb-12"/>
            <Slider {...settings}>
            {product.map((el, index) => (
            <div className="" key={index}>
              <TourGuideCard 
                img={el.img}
                alt={el.alt}
                title={el.title}
                tgName={el.tgName}
                badge={el.badge}
                textAbout={el.textAbout}
                textJourney={el.textJourney}
              />
            </div>
          ))}
          
            </Slider>
            
        </Container>
    </section>
    </>
  )
}

export default TourGuide