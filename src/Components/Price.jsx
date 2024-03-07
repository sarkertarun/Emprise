import React from 'react'

const Price = ({text,className}) => {
  return (
    <p className={`${className} text-primaryColor text-[32px] font-Poppins font-semibold pt-1 `}>{text}</p>
  )
}

export default Price