import Heading from "./Heading";
import Paragraph from "./Paragraph";

const SupportCard = ({title, text, emailText, phNumber, icon, className}) => {
  return (
   <>
   <div className={`${className} w-[648px] rounded-2xl py-16`}>
   <div className="bg-white p-8 rounded-full text-[55px] inline-block ml-[270px] ">
      {icon}
    </div>
    
    <Heading as='h4' text={title} className='text-white !text-[32px] pt-16 text-center' />
    <Paragraph text={text} className='text-center pl-24 pr-32 pt-8 text-white opacity-80 '/>
    <Paragraph text={emailText} className='text-center pt-12 text-white' />
    <Paragraph text={phNumber} className='text-center text-white'/>
    
   </div>
   </>

  )
}

export default SupportCard