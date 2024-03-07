import ListFooter from "../ListFooter"
import Flex from "../Flex"
import Heading from "../Heading"


const FooterLinks = () => {
  return (
    <>
     <div className="">
              <Flex>
              <div className="w-[646px]">
              <Flex className="justify-between">
                <div >
                  <Heading as='h5' text='Services' className='!text-[24px] !font-medium pb-6' />
                  <ul className="flex flex-col gap-y-4">
                  <ListFooter to="" text='Budget Tours'/>
                  <ListFooter to="" text='Expert Insight'/>
                  <ListFooter to="" text='Independent'/>
                  <ListFooter to="" text='Luxury Tours'/>
                  <ListFooter to="" text='Safety Tips'/>
                  <ListFooter to="" text='Tips n Tricks'/>
                  </ul>
                </div>
                <div >
                <Heading as='h5' text='Adventures' className='!text-[24px] !font-medium pb-6' />
                  <ul className="flex flex-col gap-y-4">
                  <ListFooter to="" text='Beach Activity' />
                  <ListFooter to="" text='Bungee Jump' />
                  <ListFooter to="" text='City Tour' />
                  <ListFooter to="" text='Hiking Trips' />
                  <ListFooter to="" text='Jungle Safari' />
                  <ListFooter to="" text='Night City Walk'/>                 
                  </ul>
                </div>
                <div>
                <Heading as='h5' text='Country' className='!text-[24px] !font-medium pb-6' />
                  <ul className="flex flex-col gap-y-4">
                  <ListFooter to="" text='USA'/>
                  <ListFooter to="" text='Australia'/>
                  <ListFooter to="" text='South Africa'/>
                  <ListFooter to="" text='West Indies'/>
                  <ListFooter to="" text='New Zealand'/>
                  <ListFooter to="" text='Srilanka'/>
                  </ul> 
                </div>
              </Flex>
              </div>
           
              </Flex>
            </div>
    </>
  )
}

export default FooterLinks