import React from 'react'
import BoxParagraph from '../BoxParagraph'
import CheckboxFilterCard from '../CheckboxFilterCard'

const AgeGroup = () => {
  return (
    <>
    <div className="py-10">
       <BoxParagraph text='Age Group' className="pb-3"/>
       <CheckboxFilterCard text="1 & Up"/>
       <CheckboxFilterCard text="3 & Up"/>
       <CheckboxFilterCard text="7 & Up"/>
       <CheckboxFilterCard text="13 & Up"/>
       <CheckboxFilterCard text="18 & Up"/>
    </div>
   </>
  )
}

export default AgeGroup