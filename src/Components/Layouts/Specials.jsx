import React from 'react'
import BoxParagraph from '../BoxParagraph'
import CheckboxFilterCard from '../CheckboxFilterCard'

const Specials = () => {
  return (
    <>
    <div className="py-10">
       <BoxParagraph text='Specials' className="pb-3"/>
       <CheckboxFilterCard text="Discounted deals"/>
       <CheckboxFilterCard text="Free Cancellations"/>
       <CheckboxFilterCard text="Private Groups"/>
       <CheckboxFilterCard text="New on Entrada"/>
       <CheckboxFilterCard text="Entrada Specials"/>
    </div>
   </>
  )
}

export default Specials