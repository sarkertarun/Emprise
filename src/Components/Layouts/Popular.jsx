import React from 'react'
import BoxParagraph from '../BoxParagraph'
import CheckboxFilterCard from '../CheckboxFilterCard'

const Popular = () => {
  return (
    <>
    <div className="py-10">
       <BoxParagraph text='Popular Tags' className="pb-3"/>
       <CheckboxFilterCard text="Child Friendly"/>
       <CheckboxFilterCard text="Taking extra precautions"/>
       <CheckboxFilterCard text="Away from the chaos"/>
       <CheckboxFilterCard text="Epic Challenges"/>
       <CheckboxFilterCard text="Virtual Experiences"/>
    </div>
   </>
  )
}

export default Popular