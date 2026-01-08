import Header from "./components/Header"
import Hero from './components/Hero';
import Features from './components/Features';
import Productive from "./components/Productive";
import Testimonios from "./components/Testimonios";
import Form from "./components/Form";
import Footer from "./components/footer/Footer";

function App() {
  

  return (
    <main className=" m-auto">
      <section className="bg-Navy-950  p-4 xl:px-20">
        <Header/>
      </section>
      
      <section className="bg-Navy-800 p-6 max-w-240 mx-auto xl:px-20 sm:h-105 md:h-180 relative ">
        
        <img className="relative z-10 mt-18  " src="/public/images/illustration-intro.png" alt="illustration intro" />
        <img className="absolute bottom-0 h-1/3 left-0 " src="/public/images/bg-curvy-desktop.svg" alt="curvy mobile" />
      </section>
      <section className="p-6">
        <Hero/>
        <Features/>
        <Productive/>
        <Testimonios/>
      </section>
      <section className="bg-Navy-950 relative p-6 xl:px-20">
        <Form/>
        <Footer/>
        
      </section>
      
    </main>
  )
}

export default App
