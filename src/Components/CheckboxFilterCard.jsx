import React from 'react'
import Flex from './Flex'
import FilterInput from './FilterInput'
import FilterLabel from './FilterLabel'

const CheckboxFilterCard = ({text}) => {
  return (
    <>
    <div className="py-2">
       <Flex className="items-center">
            <FilterInput inType="checkbox" className=" mr-4  w-6 h-6 accent-btnColor cursor-pointer " inValue='yes'/>
            <FilterLabel labelName={text} className='pt-[2px]'/>
       </Flex>
      
    </div>
    </>
  )
}

export default CheckboxFilterCard