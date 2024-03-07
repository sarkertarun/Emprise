import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import CategoryCard from '../../CategoryCard'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import RightArrow from '../../RightArrow'
import LeftArrow from '../../LeftArrow'
import CategoryData from '../../Data/CategoryData'

const SelectCategory = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:<RightArrow />,
    prevArrow:<LeftArrow />
  };

  const [product, setProduct] = useState(CategoryData());

  return (
    <section className=' pt-10 pb-20'>
        <Container>
            <Heading as="h3" text="Select Category" className=""/>
            <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pt-5 pb-12"/>
            <div className='mx-2'>
            <Slider {...settings}>
            {product.map((el, index) => (
            <div className="my-2" key={index}>
              <CategoryCard
                badge={el.badge}
                title={el.title}
                text={el.text}
                icon={el.icon}
                className="w-full"
              />
            </div>
          ))}
            </Slider>
            </div>
            
        </Container>
    </section>
  )
}

export default SelectCategory