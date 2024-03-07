import Jump from '../Icons/Jump'
import City from '../Icons/City'
import Hiking from '../Icons/Hiking'
import Jungle from '../Icons/Jungle'
import Beach from '../Icons/Beach'

const CategoryData = () => {

    const cateData =[
        {
            badge:"4.9",
            title: "Beach Activity",
            text:"196 Activities",
            icon:<Beach />
          },
          {
            badge:"4.5",
            title: "Bungee Jump",
            text:"196 Activities",
            icon:<Jump />
          },
          {
            badge:"3.8",
            title: "City Tours",
            text:"196 Activities",
            icon:<City />
          },
          {
            badge:"4.8",
            title: "Hiking Trips",
            text:"196 Activities",
            icon:<Hiking />
          },
          {
            badge:"4.8",
            title: "Jungle Tours",
            text:"196 Activities",
            icon:<Jungle />
          },
          
    ]
  return (
    cateData
  )
}

export default CategoryData