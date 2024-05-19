import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating, delayFactor }) => {
  return (
    <div className="relative flex flex-1 items-center xl:items-start flex-col w-full cursor-pointer group" data-aos="fade-left" data-aos-offset="500" data-aos-delay={`${150 * delayFactor}`}>
        <img src={imgURL} alt={name} className="size-[280px] group-hover:scale-105 transition-all duration-500" />
        <div className="group-hover:scale-90 group-hover:opacity-65 transition-all duration-300">
            <div className="mt-8 flex justify-start gap-2.5">
                <img src={star} alt="rating" className="size-[24]" />
                <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
            </div>
            <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
            <p className="font-montserrat text-xl leading-normal text-coral-red">{price}</p>
        </div>
       
    </div>
  )
}

export default PopularProductCard