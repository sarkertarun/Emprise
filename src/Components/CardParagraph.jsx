import React from 'react'

const CardParagraph = ({className,text}) => {
  return (
    <p className={`${className} text-grayColor font-Poppins text-base  font-normal`}>{text}</p>
  )
}

export default CardParagraph