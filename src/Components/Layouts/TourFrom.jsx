import React, { useState } from 'react'
import Paragraph from '../Paragraph'
import Badge from '../Badge'
import Input from '../Input'
import { Form } from 'react-router-dom'
import Plus from '../Icons/Plus'
import Minus from '../Icons/Minus'
import BoxParagraph from '../BoxParagraph'
import SelectDate from './SelectDate'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from '../Icons/Calendar'
import { increment, decrement } from '../Slices/counterSlice'
import { useDispatch, useSelector } from 'react-redux'
import ClickFunction from '../../Hook/ClickFunction'
import List from '../List'


const TourFrom = () => {
  const [startDate, setStartDate] = useState(new Date());
  const disPatch = useDispatch();
  const data = useSelector((state)=>state.alamin.value);

  const {
    handleClick : handleSearchClick,
    dropRef : sdropRef,
    btnRef : sbtnRef,
  } = ClickFunction();

  return (
    <>
    <Form>
    <div className="bg-[#FBFBFB] w-[376px]  px-6 py-4">
            <del className='text-[#FA3E2C]'>
              <Paragraph text="£2469" className="!text-sm  !text-[#FA3E2C] !font-medium"/>
            </del>
           <div className='flex justify-between pt-3 pb-2'>
            <Paragraph text="£1759" className="!text-4xl !font-bold !text-[#1D293F]"/>
            <Paragraph text=" per person" className="!text-sm  !text-[#546179] !font-medium"/>
            <Badge text="20% OFF" className="!text-btnColor !bg-[#BCF0EC]"/>
           </div>
           <Paragraph text="*Price based on selections bellow." className=" !text-sm !text-grayColor pb-10"/>
            <div className="">
            <div className='relative w-[370px]'>
        <BoxParagraph text="When are you traveling?" className="pb-4"/>
                
        <DatePicker  dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} className='text-gray-400 outline-none border-b inline-block  pt-3 cursor-pointer border py-3 pl-6 pr-[121px] rounded-md'/>
        <div className="absolute top-[54px] right-16 text-2xl">
            <Calendar/>
        </div>
      </div>
            </div>

            <div className="relative py-7">
              <Paragraph text="Travelers" className="!text-base !text-grayColor pb-1"/>
              <Input type="text" placeholder="2 Adult, 1 Child" className=" !text-base !text-grayColor border rounded-md px-2 py-2 w-[328px] h-12"/>
              <div className="absolute top-[68px] right-6 flex gap-x-3">
                <div className='cursor-pointer' onClick={()=>disPatch(decrement())}>
                <Minus />
                </div>
                <Paragraph text={data} className="!text-lg !font-semibold !text-black "/>
                <div className='cursor-pointer' onClick={()=>disPatch(increment())}>
                <Plus />
                </div>
              </div>
            </div>

            <div className="relative">
              <Paragraph text="Selections" className="!text-base !text-grayColor pb-1"/>
              <Input type="text" placeholder="Flight, hotel, car etc." className=" !text-base !text-grayColor border rounded-md px-2 py-2 w-[328px] h-12"/>
              <div className="absolute top-10 right-6 cursor-pointer"  onClick={() => { handleSearchClick(sdropRef, sbtnRef);}} ref={sbtnRef}>
              <Plus/>
              </div>

              <div>
              <div ref={sdropRef}  className="bg-white w-[328px] absolute top-20 left-0 hidden z-50 rounded-xl">
                               
                               <ul className='text-grayColor'>
                                   <List to="#" text="Flight" className="border-b rounded-b-xl border-grayColor block py-2 pl-2 hover:bg-blue-500 hover:text-white"/>
                                   <List to="#" text="Hotel" className="border-b rounded-b-xl border-grayColor block py-2 pl-2 hover:bg-blue-500 hover:text-white"/>
                                   <List to="#" text="Car" className="border-b rounded-b-xl border-grayColor block py-2 pl-2 hover:bg-blue-500 hover:text-white"/>
                                   <List to="#" text="Resort" className="border-b rounded-b-xl border-grayColor block py-2 pl-2 hover:bg-blue-500 hover:text-white"/>
                                   <List to="#" text="Resturant" className="border-b rounded-b-xl border-grayColor block py-2 pl-2 hover:bg-blue-500 hover:text-white"/>
                               </ul>
                           </div>
              </div>
            </div>
            
            <div className="pt-10">
              <button className='text-white text-lg font-Poppins font-medium px-20 py-3 bg-gradient-to-r from-[#FF9D4B] to-[#FA126C] w-[328px] rounded-md'>Check Availability</button>
            </div>       
        </div>
       <div className='pt-20 w-[340px] pl-6'>
            <BoxParagraph text="If you have question about this tour, please feel free to ask" className="!font-normal"/>
            <button className='font-Poppins font-regular text-lg px-16 py-3  w-[328px] rounded-full border text-grayColor mt-5 hover:bg-gradient-to-r from-[#FF9D4B] to-[#FA126C] hover:text-white'>Ask the Tour Expert</button>
            <Paragraph text="*All questions are replied to within 24-48 hrs" className="!text-sm !text-grayColor pt-7 text-center"/>
        </div>

    </Form>
    </>
  )
}

export default TourFrom