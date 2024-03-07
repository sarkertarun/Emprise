import React, { useRef } from 'react'
import BoxParagraph from '../BoxParagraph';
import Flex from '../Flex';
import Clock from '../Icons/Clock'
import HikingMan from '../Icons/HikingMan'
import Meter from '../Icons/Meter'
import Group from '../Icons/Group'
import Cake from '../Icons/Cake'
import Flower from '../Icons/Flower'
import Image from '../Image';
import { Link } from 'react-router-dom'
import Sheet from '../Icons/Sheet';

const OverView = () => {

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
   <div className="mt-10">
    <Flex>
    <div className="w-[120px]">
      <Sheet />
    </div>
    <div className="w-[630px] border-b border-grayColor inline-block">
      <BoxParagraph text='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.' className='!font-normal'/>
      
      <div>
      <Link ref={iconRef} onClick={() => {handleShow()}}><p className='pt-7 text-base font-Poppins text-grayColor '>Show More...</p></Link>
      <div ref={ShowRef} className='hidden mt-[-50px] z-20 bg-white relative'>
      <BoxParagraph  text='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do. Elit dolore sunt cupidatat minim nisi nulla fugiat sit dolor adipisicing excepteur eiusmod. Mollit reprehenderit magna tempor ex.' className='!font-normal'/>
      </div>
      <div  className="pt-10 w-full">
      <Flex className='pb-6'>
        <div className="w-[210px]">
          <BoxParagraph text='Group Size' className='pb-4'/>
          <Flex>
            <Clock />
            <p className='pt-1 pl-1 text-base font-Poppins font-medium'>2 Days</p>
          </Flex>
        </div>
        <div className="w-[210px]">
          <BoxParagraph text='Activity' className='pb-4'/>
          <Flex>
            <HikingMan />
            <p className='pt-1 text-base font-Poppins font-medium'>Walking</p>
          </Flex>
        </div>
        <div className="w-[210px]">
          <BoxParagraph text='Physical' className='pb-4'/>
          <Flex>
            <Meter />
            <p className='pt-1 pl-1 text-base font-Poppins font-medium'>Strenuous</p>
          </Flex>
        </div>
      </Flex>
      <Flex>
        <div className="w-[210px]">
          <BoxParagraph text='Group Size' className='pb-4'/>
          <Flex>
            <Group />
            <p className='pt-1 pl-1 text-base font-Poppins font-medium'>8</p>
          </Flex>
        </div>
        <div className="w-[210px]">
          <BoxParagraph text='Age' className='pb-4'/>
          <Flex>
            <Cake/>
            <p className='pt-1 text-base font-Poppins font-medium'>7+</p>
          </Flex>
        </div>
        <div className="w-[210px]">
          <BoxParagraph text='Season' className='pb-4'/>
          <Flex className='mb-6'>
            <Flower/>
            <p className='pt-1 pl-1 text-base font-Poppins font-medium'>Apr-Sep</p>
          </Flex>
        </div>
      </Flex>
    </div>
      </div>



    </div>

    </Flex>

   </div>
   </>
  )
}

export default OverView