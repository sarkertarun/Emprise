import React, { useState } from 'react'
import Container from '../../Container'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import Flex from '../../Flex'
import BestSellCard from '../../BestSellCard'
import SendButton from '../../SendButton'
import BestSellData from '../../Data/BestSellData'

const BestSell = () => {
    
      const [product, setProduct] = useState(BestSellData());

  return (
    <>
    <section className=' pt-10 pb-24'>
        <Container>
            <Flex className="justify-between">
              <div>
              <Heading as="h3" text="Best Seller" className=""/>
            <Paragraph text="Sost Brilliant reasons Entrada should be your one-stop-shop!" className="pt-5 pb-12"/>
              </div>
              <div>
              <SendButton text="Check All" className="rounded-full mt-2 border"/>
              </div>
            </Flex>
          {/* BestSellCard part start */}
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
           {/* BestSellCard part End */}
        </Container>
    </section>
    </>
  )
}

export default BestSell