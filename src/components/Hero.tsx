import Boton from "./Boton"
const Hero = () => {
  return (
    <section className="relative z-10 -mt-18 md:-mt-30 max-w-240 mx-auto  ">
        <h1 className=" text-center text-2xl font-Raleway font-bold p-4">All your files in one secure location, accessible anywhere.</h1>
        <p className="text-center text-sm mt-6 p-4">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.
        </p>
        <div className="text-center mt-6 mb-10">
          <Boton text="Get Started" style="w-[280px] " />
        </div>
    </section>
    
  )
}

export default Hero