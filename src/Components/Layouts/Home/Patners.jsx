import React, { useState } from 'react'
import Container from '../../Container'
import Slider from "react-slick";
import PartnerCard from '../../PartnerCard';
import Lab from '../../../assets/lab_gov.png'
import Travel from '../../../assets/travel-aware.png'
import Nigeria from '../../../assets/fascinating nigeria.png'
import Eco from '../../../assets/ecotourism-australia.png'
import Trip from '../../../assets/trip-advisor.png'
import Iata from '../../../assets/iata.png'
const Patners = () => {
   

    const settings = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
      };
      const [product, setProduct] = useState([
        {img:Lab,
        alt:Lab,
        },
        {img:Travel,
        alt:Travel,
        },
        {img:Nigeria,
        alt:Nigeria,
        },
        {img:Eco,
        alt:Eco,
        },
        {img:Trip,
        alt:Trip,
        },
        {img:Iata,
        alt:Iata,
        },
    
    ])
  return (
    <section className='pb-32'>
        <Container>
            <div className="items-center">
            <Slider {...settings}>
            {product.map((el, index) => (
            <div className="" key={index}>
              <PartnerCard
                img={el.img}
                alt={el.alt}
              />
            </div>
          ))}
            </Slider>
            </div>
        </Container>
    </section>
  )
}

export default Patners