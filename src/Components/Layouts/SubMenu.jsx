import React from 'react'
import ParagraphTwo from '../ParagraphTwo'
import { Link } from 'react-router-dom'

const SubMenu = () => {
  return (
    <>
    <div className="flex pt-10">
        <Link><ParagraphTwo text='Overview' className='hover:!text-btnColor !text-subColor'/></Link>
        <Link><ParagraphTwo text='Itinerary' className='hover:!text-btnColor !text-subColor px-14'/></Link>
        <Link><ParagraphTwo text='Inclusions' className='hover:!text-btnColor !text-subColor'/></Link>
        <Link><ParagraphTwo text='Reviews' className='hover:!text-btnColor !text-subColor pl-10'/></Link>
        <Link><ParagraphTwo text='FAQ' className='hover:!text-btnColor !text-subColor px-14'/></Link>
        <Link><ParagraphTwo text='Essential Info' className='hover:!text-btnColor !text-subColor'/></Link>
    </div>
    </>
  )
}

export default SubMenu