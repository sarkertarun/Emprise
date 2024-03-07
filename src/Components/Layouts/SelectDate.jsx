import React, {  useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from '../Icons/Calendar'
import BoxParagraph from '../BoxParagraph';

const SelectDate = () => {
    const [startDate, setStartDate] = useState(new Date());
  return (
    <>
     <div className='relative w-[328px]'>
        
        <BoxParagraph text="When are you traveling?" className="pb-4"/>
                
        <DatePicker  dateFormat="dd/MM/yyyy" selected={startDate} onChange={(date) => setStartDate(date)} className='text-gray-400 outline-none border-b inline-block  pt-3 cursor-pointer border py-3 pl-6 pr-28 rounded-md'/>
        <div className="absolute top-[54px] right-7 text-2xl">
            <Calendar/>
        </div>
    </div>
    </>
  )
}

export default SelectDate