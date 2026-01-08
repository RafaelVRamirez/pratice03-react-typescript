import type { Feature } from "../type/types"
import { Feat } from "../utility/constants"


const Features = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-20 md:gap-5 mt-35 max-w-240 mx-auto ">
        {Feat.map(({title,description,iconUrl}:Feature) =>(
            <div key={title} className="bg-Navy-800 m-3 p-6 md:p-5 md:m-2 flex flex-col md:flex-2 items-center text-center">
                <img src={iconUrl} alt={title} />
                <div>
                    <h3 className="font-bold mb-2">{title} </h3>
                    <p>{description} </p>
                </div>
            </div>

          ))
        }
    </div>
  )
}

export default Features