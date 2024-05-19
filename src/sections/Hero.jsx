import { useEffect, useRef, useState } from "react"
import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import ShoeCard from "../components/ShoeCard"
import { shoes, statistics } from "../constants"

const Hero = () => {
  const [shoeIndex, setShoeIndex] = useState(0);
  const carousel = useRef(null);


  useEffect(() => {
    carousel.current.scrollTo({
      left: shoeIndex * carousel.current.clientWidth,
      behavior: 'smooth',
    });
  }, [shoeIndex])

  return (
    <section id="home" className="w-full min-h-screen flex xl:flex-row flex-col justify-center gap-10 max-container">
      
      <div data-aos="fade-right" className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:bg-clip-padding max-lg:padding-x pt-28 z-10">
        <p className="text-xl font-montserrat text-coral-red" >Our Summer Collection</p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10" >The New Arrival</span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike </span> Shoes
        </h1>

        <p className="font-montserrat text-slate-gray text-base leading-7 mt-6 mb-14 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>

        <Button label="Shop Now" icon={arrowRight}></Button>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {
            statistics.map((item, index) => {
              return (
                <div key={index}>
                  <p className="text-4xl font-palanquin font-bold">{item.value}</p>
                  <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
                </div>
              )
            })
          }
        </div>
      </div>

      <div data-aos="fade-left" className="relative flex-1 flex justify-center items-center min-h-screen max-sm:py-40 bg-primary bg-hero bg-cover bg-center">
        
        <div className="flex overflow-x-scroll snap-x snap-mandatory no-scrollbar" ref={carousel} >
          {
            shoes.map((item, index) => (
              <div key={index} className="flex-none w-full grid place-items-center snap-center">
                <img className="" src={item.bigShoe} alt="" />
              </div>
            ))
          }
        </div>

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] left-[50%] -translate-x-[50%]">
          {
            shoes.map((item, index) => {
              return (
                <div key={index}>
                  <ShoeCard imgUrl={item} shoeIndex={shoeIndex} setShoeIndex={setShoeIndex} index={index} ></ShoeCard>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Hero