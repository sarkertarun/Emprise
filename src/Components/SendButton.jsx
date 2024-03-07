

const SendButton = ({className, text, onClick}) => {
    return (
      <button onClick={onClick} className={`${className} font-Poppins text-[24px] font-normal py-2.5 px-6  hover:text-white hover:bg-btnColor`}>{text}</button>
    )
  } 
  
  export default SendButton