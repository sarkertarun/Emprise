import React from 'react'
import Image from './Image'

const PartnerCard = ({img, alt, className}) => {
  return (
   <>
   <Image src={img} alt={alt} className={`${className} w-[300px] px-4`}/>
   </>
  )
}

export default PartnerCard