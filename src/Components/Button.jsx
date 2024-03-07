
const Button = ({text,className,onClick}) => {
  return (
    <button onClick={onClick} className={`${className}font-Poppins text-xl font-medium w-[104px] rounded-3xl duration-300 py-2.5  hover:bg-btnColor  hover:text-white` }>{text}</button>
  )
}

export default Button