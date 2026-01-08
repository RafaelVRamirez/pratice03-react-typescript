import Boton from './Boton';


const Form = () => {
  return (
    <div className="text-center absolute left-0 right-0 -top-55 xl:-top-35 py-10 px-6 bg-Navy-800 rouded-2.5 w-75 md:w-120 mx-auto xl:w-180 ">
        <h2 className="font-bold mb-4">Get early access today</h2>

        <p className="text-sm mb-8">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>

        <form className="flex flex-col gap-6 xl:flex-row" action="">

            <input className="bg-white rounded-3xl h-12 placeholder:text-gray-400 xl:flex-1" type="email" placeholder="email@example.com" />

            <Boton style='xl:w-50' text='Get Started For Free'/>
        </form>
    </div>
  )
}

export default Form