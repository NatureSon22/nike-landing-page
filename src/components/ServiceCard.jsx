const ServiceCard = ({ imgURL, label, subtext, delayFactor }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl px-10 py-16" data-aos="fade-right" data-aos-offset="500" data-aos-delay={`${100 * delayFactor}`}>
        <div className="size-14 justify-center items-center flex bg-coral-red rounded-full">
            <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
        <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard