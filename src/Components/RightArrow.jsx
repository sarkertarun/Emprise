import React from 'react'
import { HiChevronRight } from "react-icons/hi2";
const RightArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div
      className={`${className} text-6xl  absolute   right-0 -top-36 `}
      // style={{ ...style, display: "inline-block", background: "red", }}
      onClick={onClick}><HiChevronRight className="text-paraColor hover:bg-btnColor hover:text-white hover:border-none rounded-full border border-paraColor p-3"/></div>
    )
}

export default RightArrow