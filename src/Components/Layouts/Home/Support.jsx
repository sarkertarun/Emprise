import React, { useState } from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import SupportCard from '../../SupportCard'

import Heading from '../../Heading'
import Paragraph from '../../Paragraph'
import { MdOutlineHeadphones } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
const Support = () => {
  const [product, setProduct] = useState([
    {

      title: "For Sales",
      text:"The Brilliant reasons Entrada be your one-stop-shop!",
      emailText:"sales@entrada.com",
      phNumber:"+977(985) 456-32-12",
      icon:<MdOutlineHeadphones />,
      className:"bg-btnColor",

    },
    {

      title: "Help & Support",
      text:"The Brilliant reasons Entrada be your one-stop-shop!",
      emailText:"help@entrada.com",
      phNumber:"+977(985) 456-32-12",
      icon:<IoMdHelpCircleOutline />,
      className:"bg-primaryColor",

    },
  ]);
  return (
 <section className='pb-32'>
    <Container>

      <div className="pb-20">
        <Heading as='h2' text='Still have a question?' className='!text-[40px] !font-bold text-center'/>
        <Paragraph text='The Brilliant reasons Entrada should be your one-stop-shop!' className='text-gray-500 text-center pt-6'/>
      </div>
        <Flex className='justify-center gap-x-8'>
        {product.map((el, index) => (
            <div className="" key={index}>
              <SupportCard
                className={el.className}
                title={el.title}
                text={el.text}
                icon={el.icon}
                emailText={el.emailText}
                phNumber={el.phNumber}
              />
            </div>
          ))}
        </Flex>
       
    </Container>
 </section>
  )
}

export default Support