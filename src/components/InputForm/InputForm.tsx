import { useState } from 'react';
import Button from "./Button";
import Input from "./Input";

export default function InputForm(){
  const [value, setValue] = useState('');
  const [clear, setClear] = useState(false);

  const clearInput = () => {
    setValue('')
    setClear((prev)=>!prev)
    console.log(value)
  }
  
  return(
    <div className="background-img">
      <div className="input-group skew">
        <Input state={setValue} clear={clear}/>
        <Button value={value} clearInput={clearInput} />
      </div>
    </div>
  )
}