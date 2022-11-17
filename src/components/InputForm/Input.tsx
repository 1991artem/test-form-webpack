import { useEffect, useRef } from "react";

interface IInput {
  clear: boolean;
  state: (value: string) =>void;
}

export default function Input({clear, state}: IInput){
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if(ref.current){
      ref.current.value = '';
    }
  }, [clear])

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if(ref.current){
      state(ref.current.value)
    }
  }

  return(
      <div>
          <input 
          type="tel" 
          className="form-control" 
          placeholder="Ваш номер..."
          minLength={1}
          ref={ref}
          onKeyPress={keyPressHandler}
          />
      </div>
  )
}