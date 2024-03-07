import React from 'react'
import Image from '../../Image'
import CTA from '../../../assets/cta.png'
import Container from '../../Container'

const Cta = () => {
  return (
    <>
    <Container>
    <div className="py-8 relative">
    <Image src={CTA} alt={CTA}/>
    
   <button className="absolute bg-white text-2xl text-primaryColor font-medium hover:text-btnColor top-[420px] left-[740px] py-4 px-8 rounded-full">Check All</button>
    </div>
    </Container>

    </>
  )
}

export default Cta