import type { Testismonios } from "../type/types"
import { Test } from "../utility/constants"


const Testimonios = () => {
  return (
    <div className="flex flex-col gap-6 items-center relative w-[320px] md:w-120 mx-auto pb-80 md:pb-90 xl:flex-row xl:w-240 xl:mx-auto">

        <img  className="size-6 absolute -top-5 left-6" src="/public/images/bg-quotes.png" alt="" />

        {Test.map(({name,role,image,comment}:Testismonios)=>(
            <div key={name} className="bg-Navy-800 rounded-sm p-6 w-70 md:w-120 ">
                <blockquote className="text-[0.75rem] mb-4">{comment} </blockquote>
                <div className="flex gap-2 items-center">
                    <img className="size-8 rounded-full" src={image} alt={name} />
                    <div>
                        <h3 className="font-bold text-[0.75rem]">{name} </h3>
                        <p className="text-[0.625rem]">{role} </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Testimonios