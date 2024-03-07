import React from 'react'

const SearchInput = ({type,placeholder , className, name, value,id}) => {
  return (
    <input type={type} id={id} className={`${className} font-Poppins text-base text-secondaryColor outline-none py-2.5 rounded-full border border-grayColor  `} placeholder={placeholder} name={name} value={value}/>

  )
}

export default SearchInput