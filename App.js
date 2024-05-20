import logo from './logo.svg';
import './App.css';
import mysty from './Mystyle';
import  frame from './images/person_4.jpg'
import { AiFillAlert } from "react-icons/ai";
function App() {
  
  return (
    <div className="App">
      {/* inline styling */}
      <h1 style={{backgroundColor:"black", color:"cyan"}}>Welcome</h1>
      {/* external styling */}
      <div style={mysty}></div>
      <div style={mysty.header}></div>
      <p className='p'>New React Class</p>
      {/* method 1 of adding an images */}
      <img src={require("./images/person_2.jpg")} alt="" />
      {/* method 2 of adding an images */}
      <img src={frame} alt="" />
      <button className='btn btn-success'>Click</button>
      <i className='fa fa-user'></i>
      <i className='fa fa-home'></i>
      <AiFillAlert />
    </div>
  );
}

export default App;
