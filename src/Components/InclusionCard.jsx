
import BoxParagraph from './BoxParagraph'

const InclusionCard = ({icon,text}) => {
    
  return (
    <>
     <div className="flex pt-4">
        
     <div className='text-btnColor text-[22px] p-2'>{icon}</div>
     <BoxParagraph text={text} className='pt-2 pl-2'/>

     </div>
    </>
  )
}

export default InclusionCard