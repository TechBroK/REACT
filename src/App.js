import logo from './logo.svg';
import './App.css';
import Greet from './component/greet';
import Welcome from './component/welcome';

function App() {
  return (
    <div className="App">
     <Greet name="Adebayo" nameCharacter=" Family Name" />
     <Welcome />
     <Greet name="Adetoun" nameCharacter=" Family Third/Last Daughter" />
     <Greet name="Adedamola" nameCharacter=" Family Secons Daughter" />
     <Greet name="Modupe" nameCharacter=" Family First Daughter"> <button> Submit </button></Greet>
    </div>
  );
}

export default App;
