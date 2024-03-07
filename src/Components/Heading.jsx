const Heading = (props) => {
    let pattern = /#([^#]+)#/g
    let findtext = props.text.replace(pattern, "<span class='one'>$1</span>")
  return (
    <props.as className={` ${props.className} font-Poppins text-primaryColor text-[40px] font-bold`} dangerouslySetInnerHTML={{ __html: findtext}}></props.as>
  )
}

export default Heading