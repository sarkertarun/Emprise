import React from 'react'
import Container from '../../Container'
import TourHeader from '../TourHeader'
import SubMenu from '../SubMenu'
import OverView from '../OverView'
import Itinenary from '../Itinenary'
import Inclusion from '../Inclusion'
import Reviews from '../Reviews'
import FAQ from '../FAQ'
import TourFrom from '../TourFrom'
import Flex from '../../Flex'

const TourItem = () => {
  return (
    <>
    <section>
        <Container>
            <div className='pl-[270px]'>
                <Flex>
                  <div>
                    <TourHeader />
                    <SubMenu />
                    <OverView />
                    <div className="pt-10">
                    <Itinenary />
                    <Inclusion />
                    <Reviews />
                    <FAQ />
                    </div>

                  </div>
                  <div className='pl-20 pt-10'>
                     <TourFrom />
                  </div>
                </Flex>

            </div>
            
        </Container>
    </section>
    </>
  )
}

export default TourItem