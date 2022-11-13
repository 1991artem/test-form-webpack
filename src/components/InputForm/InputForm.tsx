import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

export default function InputForm(){
  const [value, setValue] = useState('');
  
  return(
    <div className="background-img">
      <div className="input-group skew">
        <Input state={setValue} />
        <Button value={value} state={setValue} />
      </div>
    </div>
  )
}