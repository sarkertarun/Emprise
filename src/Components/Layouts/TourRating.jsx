import React from 'react'
import BoxParagraph from '../BoxParagraph'
import FilterInput from '../FilterInput'
import Flex from '../Flex'
import { FaStar } from "react-icons/fa";


const TourRating = () => {
  return (
    <>
      <div className="py-10">
        <BoxParagraph text='Tour Rating' className="pb-3"/>
        <Flex className="py-2">
        <FilterInput inType="checkbox" className="mr-4  w-6 h-6 accent-btnColor cursor-pointer " inValue='yes'/>
        <div className=" flex gap-x-2 mt-1">
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-starColor'/>
        <FaStar className='text-starColor'/>
        <FaStar className='text-starColor'/>
        <FaStar className='text-starColor'/>
        </div>
        
        </Flex>
        <Flex className="py-2">
        <FilterInput inType="checkbox" className="mr-4  w-6 h-6 accent-btnColor cursor-pointer  " inValue='yes'/>
        <div className=" flex gap-x-2 mt-1">
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-starColor'/>
        <FaStar className='text-starColor'/>
        <FaStar className='text-starColor'/>
        </div>
        </Flex>
        <Flex className="py-2">
        <FilterInput inType="checkbox" className="mr-4 w-6 h-6 accent-btnColor cursor-pointer  " inValue='yes'/>
        <div className="flex gap-x-2 mt-1">
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-starColor'/>
        <FaStar className='text-starColor'/>
        </div>
        </Flex>
        <Flex className="py-2">
        <FilterInput inType="checkbox" className="mr-4 w-6 h-6 accent-btnColor cursor-pointer " inValue='yes'/>
        <div className="flex gap-x-2 mt-1">
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-yellowColor'/>
        <FaStar className='text-starColor'/>
        </div>
        </Flex>
        <Flex className="py-2">
        <FilterInput inType="checkbox" className="mr-4 w-6 h-6 accent-btnColor cursor-pointer " inValue='yes'/>
        <div className=" flex gap-x-2  items-center text-yellowColor">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        </div>
        </Flex>
     </div>
    </>
  )
}

export default TourRating