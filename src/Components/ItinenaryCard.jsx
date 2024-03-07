import React, { useRef } from 'react'
import BoxParagraph from './BoxParagraph'
import Flex from './Flex';
import { IoIosArrowDown } from "react-icons/io";
import Image from './Image';
import { Link } from 'react-router-dom';
import Plus from '../assets/plus.png'

const ItinenaryCard = ({icon,day,title,textOne,imgOne,textTwo,packOne,packTwo,packThree,imgTwo,imgThree,imgFour,map}) => {
  const iconRef = useRef(null);

  let ShowRef = useRef(0);

  let handleShow = () => {

    if (ShowRef.current.style.display == "block") {
      ShowRef.current.style.display = "none"
    }
    else{
      ShowRef.current.style.display = "block"
    }
  };
  return (
   <>
   <div className="bg-heardBg inline-block border-b rounded-xl border-b-grayColorTwo pb-2">
   <Link ref={iconRef} onClick={() => {handleShow()}}>
    <Flex className='my-6 pl-[7px]'>
        <div className='bg-btnColor text-[22px] text-white p-2 inline-block rounded-full'>{icon}</div>
        <BoxParagraph text={day} className='!font-semibold pt-2 pl-5'/>
        <IoIosArrowDown className='ml-[480px] mr-4 text-[22px] text-grayColor mt-3'/>
    </Flex>
    </Link>
        <div ref={ShowRef} className="w-full hidden">
        <div className="border border-hidden rounded-lg">
        <div className="pt-8 border-b border-grayColor">
        <BoxParagraph text={title} className='!font-semibold pl-3 pb-4'/>
        </div>
        <BoxParagraph text={textOne} className='pl-3 pr-14 pt-4 !text-supCardBgColor'/>
        <Flex className='pt-12 pb-10'>
          <Image src={imgOne} alt={imgOne} className='ml-3' />
          <div>{map}</div>
        </Flex>
        <div className="flex pl-3 py-6 border-b border-grayColor">
          <Link><BoxParagraph text='Accommodation' className='hover:text-grayColorTwo' /></Link>
          <Link><BoxParagraph text='Meals' className='hover:text-grayColorTwo pl-12' /></Link>
          <Link><BoxParagraph text='Inclusions' className='hover:text-grayColorTwo pl-12' /></Link>
          <Link><BoxParagraph text='Special Info' className='hover:text-grayColorTwo pl-12 pb-2'/></Link>
          </div> 
          <BoxParagraph text={textTwo} className='pl-3 pr-14 pt-4 !text-supCardBgColor'/>
          <div className="pt-6">
            <Flex>
             <BoxParagraph text='Shared Room' className='hover:text-grayColorTwo pl-3 cursor-pointer'/> 
             <BoxParagraph text={packOne} className='pl-16'/> 
            </Flex>
            <Flex className='pt-6'>
             <BoxParagraph text='Double Room' className='hover:text-grayColorTwo pl-3 cursor-pointer'/> 
             <BoxParagraph text={packTwo} className='pl-16 '/> 
            </Flex>
            <Flex className='pt-6'>
             <BoxParagraph text='Single Room' className='hover:text-grayColorTwo pl-3 cursor-pointer'/> 
             <BoxParagraph text={packThree} className='pl-[72px]'/> 
            </Flex>
          </div>
          <Flex className='mt-6 mb-8'>
          <div>
            <BoxParagraph text='Shared' className='hover:text-btnColor pl-4 cursor-pointer'/> 
            <Image src={imgTwo} alt={imgTwo} className='ml-3 mt-4'/>
          </div>
          <div className='mx-3'>
            <BoxParagraph text='Double' className='hover:text-btnColor pl-5 cursor-pointer'/> 
            <Image src={imgThree} alt={imgThree} className='ml-3 mt-4'/>
          </div>
          <div>
            <BoxParagraph text='Single' className='hover:text-btnColor pl-5 cursor-pointer'/> 
          <div className="relative">
          <Image src={imgFour} alt={imgFour} className='ml-3 mt-4 '/>
          <Link><Image src={Plus} alt={Plus} className='absolute top-12 left-20 text-red-500'/></Link>
          
           </div>
           </div>
          </Flex>
        </div>
       
        </div>
   </div>
   </>
  )
}

export default ItinenaryCard