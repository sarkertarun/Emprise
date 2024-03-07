import React from 'react'
import Badge from './Badge'
import CardParagraph from './CardParagraph'
import Heading from './Heading'
import Image from './Image'

const DestinationCard = ({icon,text,title,badge,src,alt,className}) => {
  return (
    <>
    <div className={`${className}  rounded-lg drop-shadow-xl `}>
        <Image src={src} alt={alt} className="relative"/>
        <Badge text={badge} className="absolute top-7 left-8"/>
        <Heading as="h4" text={title} className='!text-white !text-2xl !font-medium absolute left-8 bottom-14'/>
        <CardParagraph text={text} className='absolute left-8 bottom-8'/>
    </div>
    </>
  )
}

export default DestinationCard