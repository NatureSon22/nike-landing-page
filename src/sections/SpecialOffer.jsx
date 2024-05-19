import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-between flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1" data-aos="zoom-in" data-aos-duration="1000">
        <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-full">
          <span className="text-coral-red"> Special </span> Offer
        </h2>

        <p className="mt-4 lg:max-w-xl info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier quality to superior comfort, we have it all. We offer a wide range of products to suit your needs.</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of style, comfort, and innovation with our exclusive offers. Your journey to a world of comfort and style begins here.</p>
    
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" icon={arrowRight} />
          <Button label="Learn more" style="bg-white border-slate-gray text-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer