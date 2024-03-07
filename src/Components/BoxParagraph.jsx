import React from 'react'

const BoxParagraph = ({className,text}) => {
  return (
    <p className={`${className} text-paraColor font-Poppins text-base font-Medium`}>{text}</p>
  )
}

export default BoxParagraph