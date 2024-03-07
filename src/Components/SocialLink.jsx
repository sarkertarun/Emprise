import React from 'react'
import { Link } from 'react-router-dom'

const SocialLink = ({className,to,text}) => {
  return (
    <Link className={`${className}font-Poppins text-2xl font-normal `} to={to}>{text}</Link>
  )
}

export default SocialLink