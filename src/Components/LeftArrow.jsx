import React from 'react'
import { HiChevronLeft } from "react-icons/hi2";
const LeftArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-6xl inline-block absolute   right-[70px] -top-36 `}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}><HiChevronLeft className='text-paraColor hover:bg-btnColor hover:text-white hover:border-none rounded-full border border-paraColor p-3' /></div>
    )
}

export default LeftArrow