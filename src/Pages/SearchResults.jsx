import React from 'react'
import SearchCounter from '../Components/Layouts/SearchResults/SearchCounter'
import TopFilters from '../Components/Layouts/SearchResults/TopFilters'
import SearchContent from '../Components/Layouts/SearchResults/SearchContent'
import RecentlyViewed from '../Components/Layouts/SearchResults/RecentlyViewed'

const SearchResults = () => {
  return (
    <>
    <SearchCounter />
    <TopFilters />
    <SearchContent />
    <RecentlyViewed />
    </>
  )
}

export default SearchResults