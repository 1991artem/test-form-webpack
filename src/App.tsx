import { Normalize } from 'styled-normalize';
import InputForm from './components/InputForm/InputForm';
import 'materialize-css';

function App() {

  return (
    <>
    <Normalize />
        <div className="wrapper">
          <InputForm />
        </div>
    </>
  );
}

export default App;
