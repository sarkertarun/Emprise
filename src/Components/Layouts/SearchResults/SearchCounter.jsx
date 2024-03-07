
import Flex from '../../Flex'
import Container from '../../Container'
import { IoIosArrowDown } from "react-icons/io";
import ParagraphTwo from '../../ParagraphTwo'

const SearchCounter = () => {
  return (
    <> 
    <Container>
    <div className="py-6 border rounded-2xl">
        <Flex>
        <ParagraphTwo text='Showing 1 - 10 of 2037 results for “cultural”' className='pl-6'/>
        <div className="pl-[890px]">
            <Flex className='justify-end'>
                <ParagraphTwo text='Sort by:' className='!text-paraColor px-4'/>
                <ParagraphTwo text='Most Popular' className='!text-semibold' />
                <IoIosArrowDown className='mt-1 ml-6 text-lg text-gray-400'/>

            </Flex>
        </div>
        </Flex>
    </div>

    </Container>
    </>
  )
}

export default SearchCounter