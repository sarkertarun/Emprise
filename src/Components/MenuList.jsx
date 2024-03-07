import { Link } from "react-router-dom"

const MenuList = ({text,className,to}) => {
  return (
    <li><Link className={`${className} text-primaryColor font-Poppins text-xl font-medium `} to={to}>{text}</Link></li>
  )
}

export default MenuList