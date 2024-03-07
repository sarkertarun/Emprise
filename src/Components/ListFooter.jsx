import { Link } from "react-router-dom"

const ListFooter = ({text,className,to}) => {
  return (
    <li><Link className={`${className} text-grayColor font-Poppins text-base font-normal inline-block`} to={to}>{text}</Link></li>
  )
}

export default ListFooter