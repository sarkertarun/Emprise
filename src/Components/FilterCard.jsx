import React from 'react'
import BoxParagraph from './BoxParagraph'
import Flex from './Flex'
import { Link } from 'react-router-dom'

const FilterCard = ({icon, text,to}) => {
  return (
    <div className="border rounded-xl py-4 inline-block px-8">
        <Link to={to} target='_blank'>
         <Flex>
            <div className='mr-5'>
                {icon}
            </div>
            <div>
                <BoxParagraph text={text} className='pt-2 inline-block' />
            </div>
         </Flex>
        </Link>
    </div>

  )
}

export default FilterCard