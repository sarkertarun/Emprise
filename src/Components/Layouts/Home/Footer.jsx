import React from 'react'
import Container from '../../Container'
import QuickLink from '../QuickLink'
import GetInTouch from '../GetInTouch'
import LetsTalk from '../LetsTalk'
import Flex from '../../Flex'
import FooterLinks from '../FooterLinks'

import Heading from '../../Heading';
import Paragraph from '../../Paragraph';
import Image from '../../Image';
import SocialLink from '../../SocialLink';
import { RxSlash } from "react-icons/rx";
import Payment from '../../../assets/payment_logos.png'

const Footer = () => {
  return (
    <>
    <section className='pt-28'>
        <Container>
            <QuickLink />
            <GetInTouch />
            <Flex className="justify-between pt-8 pb-28">
                <div>
                    <FooterLinks />
                </div>
                <div >
                  <LetsTalk />
                </div>
            </Flex>
            <div>
            <Flex className='justify-between pb-10 border-b border-bottomBorder'>
                <Heading as='h5' text='Privacy Policy' className='!text-2xl !font-normal '/>
            <Flex>
                <SocialLink to="" text="Linkedin" />
                <RxSlash className=' text-2xl mt-1 mx-1'/>
                <SocialLink to="" text="Facebook" />
                <RxSlash className=' text-2xl mt-1 mx-1'/>
                <SocialLink to="" text="Instagram" />
            </Flex>
            </Flex>
            <Flex className='py-10 justify-between'>
              <Paragraph text='2016-2021 © Emprise' className='!text-base pt-2'/>
              <Image src={Payment} alt={Payment} />
            </Flex>
            </div>
        </Container>
    </section>
    </>
  )
}

export default Footer