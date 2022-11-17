import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMessage } from "../hooks/message.hooks";

interface IButton {
  value: string;
  clearInput: ()=>void;
}

interface IData {
  phone: string;
  date: string;
}

export default function Button({value, clearInput}: IButton){
  const message = useMessage();

  const buttonHandler = async () => {
    console.log('click')
    if(!value){
      message("Пожалуйста, введите значение")
    } else {
      const response = await fetch('http://localhost:4200/api/phone',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({phone: value})
      })
      const object: IData = await response.json();
      if(response.ok){
        message(`${response.status}`)
        message(`date: ${object.date}, phone: ${object.phone}`)
      }
      clearInput()
    }
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