import React from 'react'
import SelectDate from './SelectDate'
import Popular from './Popular'
import DurationTour from './DurationTour'
import TourRating from './TourRating'
import AgeGroup from './AgeGroup'
import Specials from './Specials'
import PriceRange from './PriceRange'

const SideBarFilter = () => {
  return (
    <>
    <div className='w-[424px] border border-bottomBorder p-10 rounded-lg inline-block'>
        <SelectDate />
        <Popular />
        <PriceRange />
        <DurationTour />
        <TourRating />
        <AgeGroup />
        <Specials />
        
    </div>
    </>
  )
}

export default SideBarFilter