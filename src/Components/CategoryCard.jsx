import React from 'react'
import Badge from './Badge'
import Beach from '../Components/Icons/Beach'
import CardParagraph from './CardParagraph'
import Heading from './Heading'

const CategoryCard = ({icon,text,title,badge}) => {
  return (
    <>
    <div className='w-[376px] p-8  rounded-lg border border-starColor shadow-lg'>
        <div className='text-right'>
            <Badge text={badge}/>
        </div>
        <div className='pt-12'>
            {icon}
        </div>
        <Heading as="h4" text={title} className='py-6 !text-2xl !font-medium '/>
        <CardParagraph text={text}/>
    </div>
    </>
  )
}

export default CategoryCard