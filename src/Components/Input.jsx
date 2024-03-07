

const Input = ({type,placeholder , className, name, value,id}) => {
  return (
   
    <input type={type} id={id} className={`${className} font-Poppins text-base text-secondaryColor  focus:outline-none  `} placeholder={placeholder} name={name} value={value}/>

  )
}

export default Input