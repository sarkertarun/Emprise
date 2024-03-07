
import Banner from '../Components/Layouts/Home/Banner'
import BestSell from '../Components/Layouts/Home/BestSell'
import Cta from '../Components/Layouts/Home/Cta'
import Destination from '../Components/Layouts/Home/Destination'
import SelectCategory from '../Components/Layouts/Home/SelectCategory'
import Subscribe from '../Components/Layouts/Home/Subscribe'
import TourGuide from '../Components/Layouts/Home/TourGuide'
import Trending from '../Components/Layouts/Home/Trending'
import Patners from '../Components/Layouts/Home/Patners'
import Support from '../Components/Layouts/Home/Support'

const Home = () => {
  return (
    <>
      
      <Banner />
      <SelectCategory />
      <Trending/>
      <Destination />
      <BestSell />
      <TourGuide />
      <Cta />
      <Subscribe />
      <Patners />
      <Support />
      
    </>
  )
}

export default Home
