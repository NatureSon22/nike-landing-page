import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section className="max-container mx-auto p-8 flex justify-between items-center flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:w-auto font-palanquin font-bold text-center">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      <form className="flex-1 w-full flex max-sm:flex-col items-center gap-5 p-2.5 border border-slate-gray rounded-full">
        <input 
          type="text" 
          placeholder="subscribe@nike.com" 
          className="input w-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth ></Button>
        </div>
      </form>
    </section>
  );
}

export default Subscribe;
