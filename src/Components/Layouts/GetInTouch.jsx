import React from 'react'
import Flex from '../Flex'
import Image from '../Image';
import Heading from '../Heading';
import Paragraph from '../Paragraph';
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Glob from '../Icons/Glob'
const GetInTouch = () => {
  return (
    <>
    <div className="border-b border-bottomBorder">
        <Flex>
            <div className="w-1/2 py-7">
                <Paragraph text='Get in touch' className=' text-btnColor' />
                <Heading as='h5' text='Adventures Calling You Guys!' className='w-[400px] pt-7 '/>
            </div>
            <Flex className="w-1/2 justify-end pt-10">
                <div>
                    <Glob />
                </div>
                <div className='pl-6'>
                    <Paragraph text='Our Offices' />
                    <Paragraph text='Nepal, USA, India' className='!font-bold pt-3' />
                    <LiaLongArrowAltRightSolid className='mt-4  text-5xl' />
                </div>
            </Flex>
        </Flex>
    </div>
    </>
  )
}

export default GetInTouch