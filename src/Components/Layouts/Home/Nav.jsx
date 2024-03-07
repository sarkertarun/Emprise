import Container from "../../Container";
import Flex from "../../Flex";
import Image from "../../Image";
import logo from "../../../assets/logo.png";
import MenuList from "../../MenuList";
import Heading from "../../Heading";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import {  useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWishList } from "../../Slices/cartSlice";
import { Link } from "react-router-dom";
import ClickFunction from "../../../Hook/ClickFunction";
import { PiPlus } from "react-icons/pi";
import { IoSearch } from "react-icons/io5";
import SearchInput from "../../SearchInput"

const Nav = () => {
// Search Icon 
  const {
    handleClick : handleSearchClick,
    dropRef : sdropRef,
    btnRef : sbtnRef,
  } = ClickFunction();
// Search Icon 

// Wishlist Icon part start
  const {
    handleClick : handleClickWish,
    dropRef : dropRef,
    btnRef : btnRef,
  } = ClickFunction();

  const regHeartRef = useRef(null);
  const dispatch = useDispatch();

  const data = useSelector(function (state) {
    return state.allData.data;
  });

  function handleClick(e) {
    const xData = data.map((item) => {
      if (item.headTxt === e.headTxt) {
        return undefined;
      }
      return item;
    });
    const yData = xData.filter((item) => {
      return item !== undefined;
    });
    dispatch(addToWishList(yData));
  }
// Wishlist Icon part end
  


  return (
    <nav className="py-12">
      <Container>
        <Flex className="items-center justify-between">
          <Flex className="items-center gap-x-28">
            <div>
              <Link to="/"><Image src={logo} /></Link>
            </div>
            {/* Menu bar start */}
            <ul className="flex gap-x-12">
              <MenuList text="Destination" to="/search" />
              <MenuList text="Activities" to="/tour" />
              <MenuList text="Specials" to="/" />
            </ul>
            {/* Menu bar end */}

            {/* Search Icon Part Start */}
            <Flex >
                <div className="relative"  onClick={() => { handleSearchClick(sdropRef, sbtnRef);}} ref={sbtnRef}>        
                  <IoSearch className=' text-2xl cursor-pointer'/> 
                </div>
                <div ref={sdropRef} className='hidden absolute top-[52px] right-[720px] ' >
                  <SearchInput name="Search"   type="search" placeholder="Search..." aria-label="Search" className="bg-transparent pl-5 cursor-pointer"/>
                </div>
            </Flex>
            {/* Search Icon Part End */}
          </Flex>

          <Flex className="gap-x-2 items-center ">
            {/* Wishlist Part start */}
            <div className="relative">
              <div className="mr-7 flex justify-center items-center w-12 h-12 rounded-full bg-heardBg cursor-pointer" onClick={() => {
                  handleClickWish(dropRef, btnRef);
                }}
                ref={btnRef}>
                <span ref={regHeartRef}>
                
                {/* wishlist icon Color change */}
                {data.length > 0 ? (
                    <FaHeart className="text-2xl text-[#EE5879]" />
                  ) : (
                    <FaRegHeart className="text-2xl text-heardColor" />
                  )}
                  {/* wishlist icon Color change */}
                </span>
              </div>
              <div ref={dropRef} className="absolute top-16 -left-24 w-[420px]  z-[99999999] bg-gray-200 shadow-md rounded-md hidden">
                <div className="relative ">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className={`flex border-b border-solid border-bdrColor  items-center justify-between relative duration-300`}
                    >
                      <Flex className="relative">
                        <div className="w-[170px]  pl-3 mr-3 py-3">
                          <Image src={item.topSrc} className="w-full " />
                        </div>
                        <div className="w-[250px]  flex flex-col justify-between py-4 pl-1 pr-4">
                          <Heading
                            text={item.headTxt}
                            as="h3"
                            className="font-Poppins text-primaryColor text-lg font-bold leading-5 "
                          />
                          <Heading
                            text={item.price}
                            as="h3"
                            className="font-Poppins text-base text-primaryColor font-semibold leading-none  "
                          />
                        </div>
                        <div className=" group absolute top-1/2 -translate-y-1/2 right-6">
                        <div className="flex justify-center items-center  w-8 h-8 rounded-full  cursor-pointer group-hover:bg-heardBg duration-500">
                        <span onClick={() => handleClick(item)}>
                          <PiPlus className="text-2xl  text-heardColor rotate-45 group-hover:text-red-600 duration-500 " />
                        </span>
                      </div>
                      </div>
                      </Flex>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Wishlist Part End */}
          
          {/* MenuBar Button part Start */}
          <Link to="/" className="font-pop text-xl border-bdrColor hover:border-[#28B0A6] border-solid border rounded-r28 font-medium text-primaryColor py-3 hover:text-white px-6 hover:bg-[#28B0A6] duration-300">Login</Link>

          <Link to="/" className="font-pop text-xl rounded-r28 border-bdrColor hover:border-[#28B0A6] border-solid border font-medium text-primaryColor py-3 hover:text-white px-6 hover:bg-[#28B0A6] duration-300">Sign up</Link>
          {/* MenuBar Button part End */}
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default Nav;

