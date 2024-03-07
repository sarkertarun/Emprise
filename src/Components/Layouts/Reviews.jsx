import { Link } from 'react-router-dom'
import Flex from '../Flex'
import ReviewsIcon from '../Icons/ReviewsIcon'
import ReviewsCard from '../ReviewsCard'
import ReviewData from '../Data/ReviewData'


const Reviews = () => {

const {reviews: reviews} = ReviewData();

  return (
    <>
    <div className="mt-10">
    <Flex>
    <div className="w-[120px]">
        <ReviewsIcon/>
    </div>
    <div className="w-[630px] pb-4 border-b">
      <div>
      {reviews.map((item, index) => (
            <div >
              <ReviewsCard
                 key={index}
                 img={item.img}
                 alt={item.alt}
                 nameOne={item.nameOne}
                 titleOne={item.titleOne}
                 reviewDate={item.reviewDate}
                 text={item.text}
              />
            </div>
          ))}
      </div>

    <Link to="" onClick=""><p className='pt-7 text-base font-Poppins text-grayColor '>Show more Reviews</p></Link>
      

        </div>
         </Flex>
      </div>
    </>

  )
}

export default Reviews