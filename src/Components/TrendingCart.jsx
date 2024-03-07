import Image from "./Image";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Flex from "./Flex";
import { FaHeart } from "react-icons/fa";
import CheckMark from './Icons/CheckMark';
import Duration from './Icons/Duration'
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Price from './Price'
import CardParagraph from './CardParagraph'
import Badge from './Badge'
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../Components/Slices/cartSlice";
import style from './Css/animation.module.css';

const TrendingCart = ({
  topSrc,
  topAlt,
  headTxt,
  paraTxt,
  price,
  days,
  rating,
  review,
  discountTxt,
  infoData,
}) => {

  const dispatch = useDispatch();
  const data = useSelector(function (state) {
    return state.allData.data;
  });


  function handleInfoData() {
    if (!data.find(item => item.headTxt === infoData.headTxt)) {
      dispatch(addToWishList(infoData));
    } else {
      if(data.find(item => item.headTxt === infoData.headTxt)) {
        const deleteData = data.map((item) => {
          if (item.headTxt === infoData.headTxt) {
            item = undefined
          }
          return item
        })
        const deleteDataFilter = deleteData.filter((item) => item !== undefined)
        dispatch(addToWishList(deleteDataFilter))
      }
    }
  }

  function handleOne() {
    try{
      if(data.find(item => item.headTxt === infoData.headTxt)) {
        return true
      }
    } catch(err) {
      console.log(err);
    }
    
  }

  return (
    <>
    <div className="w-[512px]">
    <div className=" pt-4 px-4 pb-8 shadow-trendingCard rounded-r20 relative">
      <div className="rounded-r20 overflow-hidden pb-8">
        <Image src={topSrc} alt={topAlt} className="w-full" />
        {discountTxt && (
          <div className="absolute top-8 right-10">
            <Badge
              text={discountTxt}
              
              className="!bg-redBaseColor !text-redBadge"
            />
          </div>
        )}
      </div>
      <div className="px-4">
        <Flex className="justify-between">
          <div>
            <Heading
              text={headTxt}
              as="h4"
              className="!text-2xl !font-semibold pb-2"
            />
            <CardParagraph
              text={paraTxt}
             
            />
          </div>
         
          <div
            onClick={() => {
              return handleInfoData();
            }}
            className={handleOne() ? `flex justify-center duration-200 items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer shadow-heartShadow ${style.animation}` : `flex justify-center duration-200 items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer`}
          >
            {handleOne() ? (
              <FaHeart className="text-2xl text-[#EE5879]" />
            ) : (
              <FaRegHeart className="text-2xl text-heardColor" />
            )}
          </div>
         
        </Flex>

        <Flex className="mt-7 justify-between items-center">
          <div>
            <Paragraph
              text="from"
              className="!text-sm"
            />
            <Price
              text={price}
              as="h3"
              className="font-Poppins text-3xl text-primaryColor font-semibold py-2 relative  after:content-[''] after:absolute after:h-[7px] after:w-[128px] after:bg-yellowColor after:bottom-[14px] after:left-[2px] after:opacity-50 after:-z-10"
            />
            <Paragraph
              text="*Price varies"
              className="!text-sm  !font-semibold"
            />
          </div>
          <div>
          <Flex className='text-yellowColor gap-x-1 pb-3'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                       
                    </Flex>
                    <Flex className="justify-end">
                        <span className='font-Poppins text-sm text-grayColor pr-1'>{rating}</span>
                        <span className='font-Poppins text-sm text-grayColor'>({review})</span>
                    </Flex>
          </div>
        </Flex>

        <Flex className="mt-10 gap-x-2 items-center mb-2">
          <div>
          <Duration />
          </div>
          <div>
            <CardParagraph
              text={days}
              className="!font-medium"
            />
          </div>
        </Flex>

        <Flex className="gap-x-6 items-center mt-2">
          <Flex className="gap-x-2 items-center">
            <div>
            <CheckMark/>
            </div>
            <div>
              <CardParagraph
                text="Free Cancellation"
                className="ml-3 mr-8"
              />
            </div>
          </Flex>
          <Flex className="gap-x-2 items-center">
            <div>
            <CheckMark/>
            </div>
            <div>
              <CardParagraph
                text="New on Entrada"
                className="ml-3"
              />
            </div>
          </Flex>
        </Flex>
      </div>
    </div>
    </div>
    </>
  );
};

export default TrendingCart;
