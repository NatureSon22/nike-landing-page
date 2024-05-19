import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

const Services = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {
        services.map((item, index) => {
          return (
            <ServiceCard key={index} {...item} delayFactor={index} ></ServiceCard>
          )
        })
      }

    </section>
  )
}

export default Services