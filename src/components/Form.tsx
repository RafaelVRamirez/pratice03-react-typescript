import type { FormEvent } from "react";
import { useState } from "react";

import Boton from "./Boton";

const Form = () => {
  const [imputValue, SetImputValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSubmmit = (e: FormEvent) => {
    e.preventDefault();

    const regEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    const isValid = regEx.test(imputValue);

    if (isValid){
      console.log("Correo enviado satisfactoriamente");
      setError(false);
    }else{
      setError(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    SetImputValue(value);
  }

  return (
    <div className="text-center absolute left-0 right-0 -top-55 xl:-top-35 py-10 px-6 bg-Navy-800 rouded-2.5 w-75 md:w-120 mx-auto xl:w-180 ">
      <h2 className="font-bold mb-4">Get early access today</h2>

      <p className="text-sm mb-8">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>

      <form
        onSubmit={handleSubmmit}
        className="flex flex-col gap-6 xl:flex-row"
        action=""
      >
        <input
          onChange={handleChange}
          className="bg-white rounded-3xl h-12 placeholder:text-gray-800 text-Navy-950 text-center xl:flex-1"
          type="email"
          required
          placeholder="email@example.com"
          value={imputValue}
        />
        {
          error && (<p className="text-red-700 text-sm -mt-6">Please provid email invalue</p>)
        }
        

        <Boton style="xl:w-50" text="Get Started For Free" />
      </form>
    </div>
  );
};

export default Form;
