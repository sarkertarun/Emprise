import Flex from '../Flex'
import { GoPlusCircle } from "react-icons/go";
import Heading from '../Heading';
import Paragraph from '../Paragraph';

const QuickLink = () => {
  return (
    <>
    <div className='border-b border-bottomBorder pb-10'>
    <Flex className="justify-between">
        <Flex>
            <GoPlusCircle className='text-[24px] mr-6 mt-1'/>
            <Heading as='h5' text='QUICK LINKS' className='!text-[24px] ' />
            <Paragraph text='Explore more categories' className='pl-14' />
        </Flex>

        <Flex>
            <Paragraph text='0123-456-324-54' className='text-right !text-secondaryColor' />
            <Paragraph text='|' className='px-4 !text-secondaryColor' />
            <Paragraph text='hello@entrada.com' className='!text-secondaryColor' />
        </Flex>
    </Flex> 
    </div>
    </>
  )
}

export default QuickLink