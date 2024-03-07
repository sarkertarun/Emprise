import React from 'react'

const ParagraphTwo = ({text,className}) => {
  return (
    <p className={`${className} text-secondaryColor font-Poppins text-lg font-Medium `}>{text}</p>
  )
}

export default ParagraphTwo