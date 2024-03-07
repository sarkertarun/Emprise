
import Badge from './Badge'
import CardParagraph from './CardParagraph'
import Heading from './Heading'
import Image from './Image'
import Paragraph from './Paragraph'
import Flex from './Flex'
import { RxSlash } from "react-icons/rx";
import SocialLink from "./SocialLink"

const TourGuideCard = ({tgName,textJourney,textAbout,title,badge,img,alt,className}) => {
  return (
    <>
    <div className={`${className} w-[1296px]`}>
        <Flex>
        <div className="relative">
            <Image src={img} alt={alt} />
           
            <p className="absolute left-0 bottom-0 z-50 py-4 px-4 bg-white text-primaryColor font-Poppins font-medium text-lg inline-block rounded-tr-xl">{badge}</p>
        </div>
        <div className='pl-8'>
            <Paragraph text={title} className="!text-btnColor py-8"/>
            <Heading as="h4" text={tgName} className=' !text-[40px] w-[276px] !font-medium'/>
            <Flex className="pt-20 mr-16">
                <div className='w-[360px]'>
                   <Paragraph text="About" className="pb-3"/>
                   <CardParagraph text={textAbout} />
                </div>
                <div className='w-[360px]'>
                   <Paragraph text="Journey" className="pb-3"/>
                   <CardParagraph text={textJourney}/>
                </div>
            </Flex>
            <Flex className=" items-center pt-40">
            
            <SocialLink to="" text="Linkedin" />
            <RxSlash className=' text-2xl mt-1 mx-1'/>
            <SocialLink to="" text="Facebook" />
            <RxSlash className=' text-2xl mt-1 mx-1'/>
            <SocialLink to="" text="Instagram" />
        </Flex>
        </div>
        </Flex>
    </div>
    </>
  )
}

export default TourGuideCard