import logo from './logo.svg';
import './App.css';
import Overview from './Overview';
import Greet from './greet';
import { element1, element2, element3, element4 } from './Elements';

function App() {
  return (
    <div className="App">
      <h1>Hello This Is My First React Page</h1>
      <Overview></Overview>
      <Greet param="MRV Tach"></Greet>
      {element1}
      {element2}
      {element3}
      {element4}
    </div>
  );
}

export default App;
