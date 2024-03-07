
import Flex from './Flex'
import Image from './Image'
import ParagraphTwo from './ParagraphTwo'
import BoxParagraph from './BoxParagraph'
import Star5 from './Icons/Star5'


const ReviewsCard = ({img,alt,nameOne,titleOne,reviewDate,text}) => {

  return (
    <>
    
      <div className="bg-heardBg border border-borderColor  p-2 rounded-xl">
        <div className="border-b border-b-grayColorTwo pb-3 ">
        <Flex >
            <Image src={img} alt={alt} className='rounded-full'/>
            <ParagraphTwo text={nameOne} className='pl-4 pt-6 !text-paraColor'/>
            <div className="pt-6 pl-[275px]">
              <Star5 />
            </div>
        </Flex>
        </div>
        <div className=" pt-8">
          <Flex className="justify-between px-2 border-b border-b-grayColorTwo">
            <ParagraphTwo text={titleOne} className='!font-semibold !text-primaryColor'/>
            <BoxParagraph text={reviewDate} className='!font-normal !text-paraColor text-right pb-4'/>
          </Flex>
        </div>
        <div>
      
        <BoxParagraph text={text} className='pt-5 pb-6 pl-2 pr-12 text-supCardBgColor'/>
      </div>
      </div>
      
    
    </>
  )
}

export default ReviewsCard