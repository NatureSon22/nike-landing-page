const ShoeCard = ({ imgUrl, shoeIndex, setShoeIndex, index }) => {

  const handleClick = () => {
    setShoeIndex(index)  
  }

  return (
    <div className={`border-2 rounded-xl ${shoeIndex === index ? "border-coral-red" : "border-transparent" } cursor-pointer`} onClick={() => handleClick()} >
        <div className="size-[120px] flex justify-center items-center sm:size-40 bg-card bg-center bg-cover rounded-xl" >
            <img width={127} height={103} className="object-contain" src={imgUrl.thumbnail} alt="" />
        </div>
    </div>
  )
}

export default ShoeCard