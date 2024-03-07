
import { Outlet } from 'react-router-dom'
import Footer from './Layouts/Home/Footer'
import Nav from './Layouts/Home/Nav'


const RouteLayout = () => {
  return (
    <>
    <Nav />
    <Outlet />
    <Footer />
    </>
  )
}

export default RouteLayout