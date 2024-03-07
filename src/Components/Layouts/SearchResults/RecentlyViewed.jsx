import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import TainSkyline from '../../../assets/train_skyline.png'
import SeaView from "../../../assets/sea_view.png"
import TrilogyMarket from "../../../assets/trilogy_market.png"
import Flex from '../../Flex'
import BestSellCard from '../../BestSellCard'
import SendButton from '../../SendButton'

const RecentlyViewed = () => {
    const [product, setProduct] = useState([
        {img:TainSkyline,
        alt:TainSkyline,
        text:"Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking",
        title:"Train Tour Skyline",
        badge:"30%",
        price:"895.00",
        rating:"4.8",
        review:"102",
        tourDay:"10 Days | 09 Night",
        },
        {img:SeaView,
          alt:SeaView,
          text:"Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking",
          title:"Train Tour Skyline",
          badge:"30%",
          price:"895.00",
          rating:"4.8",
          review:"102",
          tourDay:"10 Days | 09 Night",
          },
          {img:TrilogyMarket,
            alt:TrilogyMarket,
            text:"Check Out Daily Deals and Promotion on Hotels. Easy & Fast Booking",
            title:"Train Tour Skyline",
            badge:"30%",
            price:"895.00",
            rating:"4.8",
            review:"102",
            tourDay:"10 Days | 09 Night",
            },
        
      ]);
  return (
    <>
    <section className=' pt-24 pb-8'>
        <Container>
            <Flex className="justify-between">
              <div>
              <Heading as="h3" text="Recently Viewed" className=""/>
            <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pt-5 pb-12"/>
              </div>
              <div>
              <SendButton text="Check All" className="rounded-full mt-2 border"/>
              </div>
            </Flex>
            
            
           <Flex className="justify-between">
           {product.map((el, index) => (
            <div className="" key={index}>
              <BestSellCard
                img={el.img}
                alt={el.alt}
                badge={el.badge}
                title={el.title}
                text={el.text}
                icon={el.icon}
                price={el.price}
                rating={el.rating}
                review={el.review}
                tourDay={el.tourDay}
              />
            </div>
          ))}
           </Flex>
            
            
        </Container>
    </section>
    </>
  )
}

export default RecentlyViewed