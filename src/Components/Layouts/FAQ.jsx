
import Flex from '../Flex';

import Question from '../../Components/Icons/Qusestion'
import { BsQuestionLg } from "react-icons/bs";

import FaqCard from '../FaqCard'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
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
        <Question/>
    </div>

    <div className="w-[630px] border-b pb-4">
    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />

    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />

    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />

    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />

    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />

    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />

    {/* show more reviews */}
    <Link ref={iconRef} onClick={() => {handleShow()}}><p className='pt-7 text-base font-Poppins text-grayColor'>Show more FAQ's</p></Link>
      <div ref={ShowRef} className='hidden mt-[-50px] z-20 bg-white relative'>
    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />
    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />
    <FaqCard
    icon={<BsQuestionLg/>}
    textOne='Dolor elit voluptate cupidatat in eiusmod. Eiusmod ex eu incididunt etile pariatur dolor mollit reprehenderit magna tempor ex minim velit sunt do.'
    question='What type of clothing are suitable for this trek?'
    />
      </div>
      
    {/* show more reviews*/}

    </div>
    </Flex>
    </div>

    </>

  )
}

export default FAQ