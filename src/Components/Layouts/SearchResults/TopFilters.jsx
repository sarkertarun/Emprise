import React, { useState } from 'react'
import Container from '../../Container'
import FilterCard from '../../FilterCard'
import Discount from '../../Icons/Discount'
import Cancellation from '../../Icons/Cancellation'
import Entrada from '../../Icons/Entrada'
import Timer from '../../Icons/Timer'
import Chopper from '../../Icons/Chopper'
import Star from '../../Icons/Star'

const TopFilters = () => {

    const [product,setproduct] = useState([
        {
            icon:<Discount/>,
            text:"Discounted Deals",

          },
        {
            icon:<Cancellation/>,
            text:"Free Cancellation",

          },
        {
            icon:<Entrada/>,
            text:"Entrada Specials",

          },
        {
            icon:<Timer/>,
            text:"Few Seats Left",

          },
        {
            icon:<Chopper/>,
            text:"Private Tours",

          },
        {
            icon:<Star/>,
            text:"New on Entrada",
            to:"https://www.daraz.com.bd/",

          },
        ]);
  return (
    <>
    <Container>
    <div className="flex justify-between py-10">
    {product.map((el, index) => (
            <div className="" key={index}>
              <FilterCard
                text={el.text}
                icon={el.icon}
                to={el.to}
              />
            </div>
          ))}
    </div>
    </Container>
    </>
  )
}

export default TopFilters