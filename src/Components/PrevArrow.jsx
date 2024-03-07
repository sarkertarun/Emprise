import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";

const PrevArrow = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className={`${className} text-5xl inline-block absolute top-[440px]  left-32 z-10 `}
    // style={{ ...style, display: "inline-block", background: "red", }}
    onClick={onClick}><IoArrowBackCircleOutline className='text-white' /></div>
  )
}

export default PrevArrow