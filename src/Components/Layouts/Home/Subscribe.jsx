import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Image from '../../Image'
import Photo_Shoot from '../../../assets/photo_shoot.png'
import Camera_Man from '../../../assets/camera_man.png'
import Dot from '../../../assets/dots.png'
import Couple from '../../../assets/couple.png'
import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import Input from '../../Input'
import { MdOutlineEmail } from "react-icons/md";
import SendButton from '../../SendButton'
const Subscribe = () => {
  return (
    <>
    <section className='py-28'>
    <Container>
    <div className="relative">
    <Image src={Dot} alt={Dot} className='absolute top-3 left-[-50px]' />
     </div>
        <Flex>
            <Flex className="w-60%">

            <div className="py-6 relative">
                <Image src={Photo_Shoot} alt={Photo_Shoot} className='z-10'/>
            </div>
            <div className="py-6 ml-6">
                <Image src={Camera_Man} alt={Camera_Man}/>
                <Image className='my-8' src={Couple} alt={Couple}/>
            </div>
            </Flex>
            <div className="40%">
                <Paragraph text="Subscribe For Offers" className='!text-btnColor pt-12 pl-8'/>
                <Heading text="Adventures Calling You Guys!" className='pl-8 pt-6 w-[466px]' as="h2"/>
                <Paragraph text='The Brilliant reasons Entrada should be your one-stop-shop!' className='pl-8 pt-12 w-[500px] '/>

               <Flex className="relative drop-shadow-2xl">
               <Input type="Email" placeholder='Enter your email' className="ml-8 mt-20 py-4 pl-16  bg-white border border-gray-100 "/>
                <MdOutlineEmail className='absolute top-[102px] left-[65px] text-2xl opacity-15' />
                <SendButton text='Send Now!' className='mt-20 px-4 py-4 bg-btnColor text-white' />
                </Flex> 

                <p className='pl-10 pt-8 font-Poppins text-[16px] text-gray-400'>Expect a reply in 2-3 working days</p>
            </div>
        </Flex>
    </Container>
    </section>
    </>
  )
}

export default Subscribe