
const Paragraph = ({text,className}) => {
  return (
    <p className={`${className} text-paraColor font-Poppins text-2xl  font-normal leading-9`}>{text}</p>
  )
}

export default Paragraph