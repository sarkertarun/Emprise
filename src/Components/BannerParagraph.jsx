import React from 'react'

const BannerParagraph = ({className,text}) => {
  return (
    <p className={`${className} text-white font-Poppins text-2xl  font-normal`}>{text}</p>
  )
}

export default BannerParagraph