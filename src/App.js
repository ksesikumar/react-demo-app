import logo from './logo.svg';
import './App.css';
import Overview from './Overview';
import Greet from './greet';
import { element1, element2, element3, element4 } from './Elements';
import ClassComponetDemo from './ClassComponentDemo';
import FunctionComponentDemo from './FunctionComponentDemo';
import PropsFunDemo from './PropsFunDemo';
import PropsClassDemo from './PropsClassDemo';
import ProductPage from './ProductPage';
import SetStateParent from './Components/SetStateParent';
import UseStateParent from './Components/UseStateParent';
import SetState from './Components/SetState';



function App() {
  return (
    <div className="App">
      {/*
      <h1>Hello This Is My First React Page</h1>
      <Overview></Overview>
      <Greet param="MRV Tach"></Greet>
      {element1}
      {element2}
      {element3}
      {element4}
      <ClassComponetDemo></ClassComponetDemo>
      <FunctionComponentDemo></FunctionComponentDemo>
      <PropsFunDemo name="Sesi"></PropsFunDemo>
      <PropsClassDemo rollNumber="MRV02305"></PropsClassDemo>
      <ProductPage></ProductPage>
      <SetStateParent></SetStateParent>
      <UseStateParent></UseStateParent>
      */}
      <SetState></SetState>
    </div>
  );
}

export default App;
