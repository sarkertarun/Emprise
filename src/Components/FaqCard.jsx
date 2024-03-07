
import React, { useRef } from 'react'
import BoxParagraph from './BoxParagraph'
import Flex from './Flex';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';


const FaqCard = ({icon,question,textOne}) => {
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
    <div className="border border-borderColor rounded-xl ">
     <Link ref={iconRef} onClick={() => {handleShow()}}>
      <Flex className=' mx-3 py-5 border-b'>
        <div className='bg-btnColor text-[22px] text-white p-2 inline-block rounded-full'>{icon}</div>
        <BoxParagraph text={question} className='!font-semibold pt-2 pl-5'/>
        <IoIosArrowDown className='ml-[120px] text-[22px] text-grayColor mt-3'/>
     </Flex>
    </Link>
        <div ref={ShowRef} className="w-full hidden">
        <div >

        <BoxParagraph text={textOne} className='pl-4 pr-14 pt-8 pb-10 !text-supCardBgColor'/>
        </div>
        </div>
   </div>
  )
}

export default FaqCard