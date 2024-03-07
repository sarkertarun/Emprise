
const Label = ({labelName, className,idfor }) => {
  return (
 
        <label  className={`${className} font-Poppins text-[28px] font-semibold text-secondaryColor block`} for={idfor}>{labelName}</label>
   
  )
}

export default Label