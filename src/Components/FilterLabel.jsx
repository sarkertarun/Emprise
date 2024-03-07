import React from 'react'

const FilterLabel = ({className, idfor, labelName}) => {
  return (
    <label className={`${className} font-Poppins text-base text-secondaryColor font-normal block`} for={idfor}>{labelName}</label>
  )
}

export default FilterLabel