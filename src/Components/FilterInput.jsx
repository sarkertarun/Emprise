import React from 'react'

const FilterInput = ({inType, inPh, className, inName, inValue,id}) => {
  return (
    <input type={inType} id={id} className={`${className} font-Poppins text-base text-secondaryColor`} placeholder={inPh} name={inName} value={inValue}/>
  )
}

export default FilterInput