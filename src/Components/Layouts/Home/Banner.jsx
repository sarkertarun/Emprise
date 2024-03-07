
import Container from '../../Container'
import Image from '../../Image'
import BannerBG from '../../../assets/banner.jpg'
import Flex from '../../Flex'
import Card from '../../Icons/Card'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BGbanner from '../../../assets/BgImage.jpg'
import "react-datepicker/dist/react-datepicker.css";
import SocialLink from '../../SocialLink'
import { RxSlash } from "react-icons/rx";
import NextArrow from '../../NextArrow'
import PrevArrow from '../../PrevArrow'
import BannerParagraph from '../../BannerParagraph'
import SearchBar from '../SearchBar'

const Banner = () => {
  // Slider Setting
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />
  };
// Slider Setting
  return (
    <section className='pt-8'>
        

        <Container>
          {/* Social Link Part start */}
        <Flex className="-rotate-90 mr-[-1700px] mt-[-1150px] items-center">          
            <SocialLink to="" text="Linkedin" />
            <RxSlash className=' text-2xl mt-1 mx-1'/>
            <SocialLink to="" text="Facebook" />
            <RxSlash className=' text-2xl mt-1 mx-1'/>
            <SocialLink to="" text="Instagram" />
        </Flex>
        {/* Social Link Part End*/}

        {/* Slider start */}
        <div className='mt-[1150px]'>
        <Slider {...settings}>
        <div className='relative'>
                <Image src={BannerBG} alt={BannerBG}/>
                <Flex className='absolute bottom-44 right-20 '>
                    <Card />
                    <div className='w-[350px] ml-5'>
                        <BannerParagraph text="We Accept Payment Through All Cards & Banking" className=""/>
                        <button text="Book Now!" className=""/>
                        <button className='border-b-2 border-white text-white text-2xl font-Poppins font-bold pt-3'>Book Now!</button>
                    </div>
                </Flex>
            </div>
            <div>
                <Image src={BGbanner}/>
            </div>
        </Slider>
        {/* Slider End */}

        {/* Banner Search bar */}
          <SearchBar />
        {/* Banner Search bar */}
        </div>
        
        </Container>
        
    </section>
    
  )
}

export default Banner