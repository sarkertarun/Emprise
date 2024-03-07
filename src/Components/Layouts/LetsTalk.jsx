import Paragraph from "../Paragraph"
import Heading from "../Heading"
import Input from "../Input"
import SendButton from "../SendButton"
import Flex from "../Flex"
import { MdOutlineEmail } from "react-icons/md";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const LetsTalk = () => {
  return (
    <>
    <div className="w-[648px]">
        <Paragraph text='Get in touch' className='!font-medium !text-secondaryColor pb-4' />
        <Flex>
            <Heading as='h5' text='Let’s Talk' className=' !font-medium pb-10 '/>
            <LiaLongArrowAltRightSolid className='mt-3 mb-10 ml-[20px] text-[40px]' />
        </Flex>
        <Flex className="relative drop-shadow-2xl ">
            <Input type="Email" placeholder='Enter your email' className=" py-4 pl-16  bg-white border border-gray-100 "/>
            <MdOutlineEmail className='absolute top-[22px] left-[30px] text-2xl opacity-15' />
            <SendButton text='Send Now!' className='bg-btnColor text-white px-4 py-4' />
        </Flex>
    </div>
    </>
  )
}

export default LetsTalk