import React from 'react'

const Badge = ({text,className}) => {
  return (
    <div className={`${className} py-2 px-5 bg-badgeBgColor text-yellowColor font-Poppins font-medium text-lg inline-block rounded-full`}>{text}</div>
  )
}

export default Badge