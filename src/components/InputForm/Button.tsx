import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMessage } from "../hooks/message.hooks";

interface IButton {
  value: string;
  state: (value:string)=>void;
}

export default function Button({value, state}: IButton){
  const message = useMessage()

  const buttonHandler = () => {
    console.log(value)
    if(!value){
      message("Пожалуйста, введите значение")
    }
    state('')
  }

  return(
    <button 
    className="btn" 
    type="submit" 
    id="button"
    onClick={buttonHandler}
    >
      <span>ЗАКАЗАТЬ</span>
      <FontAwesomeIcon icon={faCoffee} />
    </button>
  )
}