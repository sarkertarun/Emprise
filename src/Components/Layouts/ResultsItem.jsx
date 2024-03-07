
import TrendingCart from '../../Components/TrendingCart'
import Flex from '../Flex'
import Container from '../Container'
import TrendingCartData from '../Data/TrendingCartData'
import ResultsData from '../Data/ResultsData'

const ResultsItem = () => {
    
  const {tourDetails: tourDetails} = ResultsData();

  return (
    <>
    <Container>
    <div className='max-w-[1160px]'>
        <Flex className="flex-wrap gap-12">
        {tourDetails.map((item, index) => (
            <div >
              <TrendingCart
                 key={index}
                 infoData={item}
                 topSrc={item.topSrc}
                 topAlt={item.topAlt}
                 headTxt={item.headTxt}
                 paraTxt={item.paraTxt}
                 price={item.price}
                 days={item.days}
                 rating={item.rating}
                 review={item.review}
                 discountTxt={item.discountTxt}
              />

            </div>
          ))}
        </Flex>
    </div>
    </Container>
    </>
  )
}

export default ResultsItem