import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Layout/Navbar';
import  Header  from './Components/Layout/Header';
import Routing from './Components/Layout/Routing';

function App() {
  return (
    <div className="App">
     <Routing></Routing>
     {/* <Navbar></Navbar> */}
    </div>
  );
}

export default App;
