import React from 'react'
import BoxParagraph from '../BoxParagraph'
import CheckboxFilterCard from '../CheckboxFilterCard'

const DurationTour = () => {
  return (
    <>
    <div className="py-10">
       <BoxParagraph text='Duration' className="pb-3"/>
       <CheckboxFilterCard text="Upto 1 Hour"/>
       <CheckboxFilterCard text="1 to 4 Hours"/>
       <CheckboxFilterCard text="4 Hours to 1 Day"/>
       <CheckboxFilterCard text="1 to 3 Days"/>
       <CheckboxFilterCard text="3 Days or More"/>
    </div>
   </>
  )
}

export default DurationTour