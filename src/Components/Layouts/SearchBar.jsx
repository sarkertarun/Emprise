import React, { useEffect, useRef, useState } from 'react'
import Flex from '../Flex'
import "slick-carousel/slick/slick.css";
import Label from '../Label'
import axios from 'axios'
import DatePicker from "react-datepicker";
import List from '../List'
import "react-datepicker/dist/react-datepicker.css";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Calendar from '../Icons/Calendar'
import { Link } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import Input from '../Input'

const SearchBar = () => {
    let [all, setAll] = useState([])
    useEffect(()=>{
      async function all(){
         let data = await axios.get("https://restcountries.com/v3.1/all");
         setAll(data.data)
         }
         all()
       },[]);

      const [startDate, setStartDate] = useState(new Date());

      const dropRef = useRef(null);
      const btnRef = useRef(null);

      let handleClick = (dropRefCmn, btnRefCmn) => {
        const dropStyle = dropRefCmn.current.style;
    
        if (dropStyle.display === "block") {
          dropStyle.display = "none";
        } else {
          dropStyle.display = "block";
        }
      };
    
      let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
        if (
          dropRefCmn.current &&
          !dropRefCmn.current.contains(event.target) &&
          !btnRefCmn.current.contains(event.target)
        ) {
          dropRefCmn.current.style.display = "none";
        }
      };
    
      useEffect(() => {
        document.addEventListener("click", (event) => {
          handleClickOutSite(event, dropRef, btnRef);
        });

        return () => {
          document.removeEventListener("click", (event) => {
            handleClickOutSite(event, dropRef, btnRef);
          });
        };
      }, []);
    
  return (
    <>
    <div className='w-[1328px] bg-white py-10  relative bottom-[90px] left-32 drop-shadow-2xl rounded-xl'>
            <Flex className="">
                <div className='relative w-[270px] border-r-2  ml-[70px]'>
            <Label labelName="Location" className=" relative  after:content-[''] after:absolute after:h-[5px] after:w-[118px] after:bg-yellowColor after:bottom-[9px] after:left-[2px] after:opacity-50 after:-z-10"/>
            <select className='border-b border-borderBotColor mt-3 outline-none w-[180px] appearance-none font-Poppins text-base text-grayColor bg-transparent'>
                <option>Enter your destination</option>
                {all.map(item=><option>{item.name.common}</option>)}
            </select>
            <CiLocationOn className='absolute top-14 right-10 text-2xl' />
                </div>
                <div className='relative w-[270px] border-r-2  ml-[70px] z-40'>
                <div className=''>
                    <Flex className='items-center'>
                      <div onClick={() => {
                  handleClick(dropRef, btnRef);
                }}
                ref={btnRef}>
                    <Flex className='items-center'>
                    <Label labelName="Activity" className="relative  after:content-[''] after:absolute after:h-[5px] after:w-[105px] after:bg-yellowColor after:bottom-[9px] after:left-[2px] after:opacity-50 after:-z-10"/>
                      <Link to="#"><MdOutlineArrowDropDownCircle className="cursor-pointer ml-24 text-2xl absolute top-[56px]"/></Link>
                    </Flex>
                    <Input type="text" placeholder="Bungee jump" className="pt-3 border-b cursor-pointer"/>
                      </div>
                        
                        <div ref={dropRef} className="bg-white w-[220px] absolute top-20 left-0 hidden z-50 rounded-xl">
                               
                            <ul className='text-grayColor'>
                                <List to="#" text="Bungee jump" className="border-b border-grayColor block py-2 pl-2 hover:bg-blue-600 hover:text-white hover:rounded-xl"/>
                                <List to="#" text="Beach Activity" className="border-b border-grayColor block py-2 pl-2  hover:bg-blue-600 hover:text-white hover:rounded-xl"/>
                                <List to="#" text="City Tours" className="border-b border-grayColor block py-2 pl-2  hover:bg-blue-600 hover:text-white hover:rounded-xl"/>
                                <List to="#" text="Hiking trips" className="border-b border-grayColor block py-2 pl-2 hover:bg-blue-600 hover:text-white hover:rounded-xl"/>
                                <List to="#" text="Jungle Safari" className="border-b border-grayColor block py-2 pl-2 hover:bg-blue-600 hover:text-white hover:rounded-xl"/>
                                <List to="#" text="Night City Walk" className=" block py-2 pl-2 hover:bg-blue-600 hover:text-white hover:rounded-xl"/>
                            </ul>
                        </div>
                       
                    </Flex>
                </div>
                </div>
               
                <div className='relative w-[270px]   ml-[70px]'>
                <Label labelName="Date" className="relative  after:content-[''] after:absolute after:h-[5px] after:w-[68px] after:bg-yellowColor after:bottom-[9px] after:left-[2px] after:opacity-50 after:-z-10"/>
                
                <DatePicker dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} className='text-gray-400 outline-none border-b inline-block  pt-3 cursor-pointer'/>
                <div className="absolute top-14 right-12 text-2xl">
                <Calendar />
                </div>
                </div>
                <div className='ml-[140px]'>
                 <button className='bg-white p-8 rounded-xl duration-300  hover:bg-btnColor  hover:text-white'><IoSearch className=' text-3xl'/></button>
                
                </div>
            </Flex>
        </div>
    </>
  )
}

export default SearchBar