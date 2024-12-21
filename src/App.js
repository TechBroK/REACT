import logo from './logo.svg';
import './App.css';
import Greet from './component/greet';
import Welcome from './component/welcome';
import Message from './component/message';

function App() {
  return (
    <div className="App">
     <Greet name="Adebayo" nameCharacter="My Family Name" />
     <Welcome />
     <Greet name="Adetoun" nameCharacter="My Family Third/Last Daughter" />
     <Greet name="Adedamola" nameCharacter="My Family Secons Daughter" />
     <Greet name="Modupe" nameCharacter="My Family First Daughter"> 
        <button> Submit </button>
      </Greet>
      <Message />
    </div>
  );
}

export default App;
