import React from 'react'

import BoxParagraph from '../BoxParagraph'
import Heading from '../Heading'
import Flex from '../Flex'
import { GoShare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
const TourHeader = () => {
  return (
    <>

    <div className="mt-4 border-b border-grayColor inline-block">
        <div className="mb-6">
        <BoxParagraph text='Destination > Portugal > Laos' className='py-2 !text-grayColor'/>
        <Flex>
        <Heading as='h2' text='Sandy beach holiday in Lagos' className='!text-[36px] py-4'/>
        <Link><GoShare className='text-[24px] text-paraColor ml-64 mt-8'/></Link>
        <Link><CiHeart className='text-[24px] text-paraColor ml-8 mt-8'/></Link>
        </Flex>
       
        <Flex>
        <FaStar className='mr-2 mt-1 text-yellowColor'/>
        <FaStar className='mr-2 mt-1 text-yellowColor'/>
        <FaStar className='mr-2 mt-1 text-yellowColor'/>
        <FaStar className='mr-2 mt-1 text-yellowColor'/>
        <FaStar className='mr-2 mt-1 text-yellowColor'/>
        <BoxParagraph text='6,788 Reviews' className='!text-grayColor'/>
        </Flex>
        </div>
        </div>

    </>
  )
}

export default TourHeader