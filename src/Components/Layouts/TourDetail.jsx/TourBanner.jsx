import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Island_2 from '../../../assets/island_2.png'
import ReactPlayer from 'react-player'
import Island_4 from '../../../assets/island_4.png'
import Island_5 from '../../../assets/island_5.png'
import BannerThree from '../../../assets/bannerThree.png'
import BannerRed from '../../../assets/bannerRed.png'
import Image from '../../Image'
import Island from '../../../assets/island.png'
import TourLeftArrow from "../../TourLeftArrow"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import TourRightArrow from "../../TourRightArrow"


const TourBanner = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow:<TourRightArrow />,
        prevArrow:<TourLeftArrow />,
       
      };
  return (
    <>
    <section className='py-10'>
        <Container>
            <Flex>
            <div >
                <Image src={Island_2}/>
                <div className='player-wrapper mt-3'>
                    <ReactPlayer className='rounded-full react-player'url='https://youtu.be/fbu-ktg4gGM?si=3tEMSPs5HCatYtV1'width='240px'height='160px'/>
                    </div>
                <Image src={Island_4} className="mt-3"/>
                <Image src={Island_5} className="mt-3"/>
            </div>

            <div className="slider-containerTwo">
            <Slider {...settings}>
        <div>
        <Image src={Island} alt={Island}/>
        </div>
        <div>
        <Image src={Island} alt={Island}/>
        </div>
        
      </Slider>
            
            </div>
            </Flex>
            
        </Container>
    </section>
    </>
  )
}

export default TourBanner