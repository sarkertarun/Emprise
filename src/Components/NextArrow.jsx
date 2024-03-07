import React from "react";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

const NextArrow = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className={`${className} text-5xl inline-block absolute top-[440px]  left-44 z-10 `}
    // style={{ ...style, display: "inline-block", background: "red", }}
    onClick={onClick}><IoArrowForwardCircleOutline className="text-white"/></div>
  )
}

export default NextArrow