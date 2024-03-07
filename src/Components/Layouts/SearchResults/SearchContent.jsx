import React from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import SideBarFilter from '../SideBarFilter'
import ResultsItem from '../ResultsItem'

const SearchContent = () => {
  return (
    <>
    <section>
        <Container>
            <Flex className="gap-x-16">
                <div className='pl-10'>
                <SideBarFilter />
                </div>
                <div>
                <ResultsItem />
                </div>
            </Flex>
        </Container>
    </section>
    </>
  )
}

export default SearchContent