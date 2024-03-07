import React from 'react'
import CardParagraph from './CardParagraph'
import Heading from './Heading'
import Price from './Price'
import Image from './Image'
import Badge from './Badge';
import { IoMdShare } from "react-icons/io";
import { Link } from 'react-router-dom';

const BestSellCard = ({img,alt, text,title, badge, price,tourDay,className}) => {
  return (
    <>
     <div className='w-[512px] relative overflow-hidden  rounded-2xl drop-shadow-md group'>
            <Image src={img} alt={alt} className={`${className} `} />
            <div className='w-[512px] absolute  -bottom-20 group-hover:top-0 group-hover:left-0 duration-500'>
            <Badge text={badge} className="absolute top-8 right-8  group-hover:!bg-redBaseColor group-hover:!text-redBadge"/> 
            <CardParagraph text={tourDay} className="absolute group-hover:left-10 group-hover:top-56 !text-white "/>
            <Price text={price} className="relative left-10 top-64 font-Poppins text-3xl text-white font-semibold  after:content-[''] after:absolute after:h-[3px] after:w-[128px] after:bg-white after:top-[44px] after:left-[2px]"/>
            <Link className="absolute top-64 right-48  bg-white p-4 rounded-full text-xl inline-block hover:bg-btnColor hover:text-white">
                <IoMdShare />
            </Link>
            <Link className='absolute top-64 right-8 mt-1 bg-white text-black text-lg font-Poppins font-normal px-10 py-2.5  rounded-full hover:bg-btnColor hover:text-white '>Explore</Link>
            </div>
            <Heading as="h4" text={title} className=" !text-2xl !font-semibold text-center mt-8"/>
            <CardParagraph text={text} className='text-center px-12 pt-3 '/>
            
    </div>
    </>
  )
}

export default BestSellCard