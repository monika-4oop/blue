import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import {Card} from './Components/Card';
import {useState} from 'react';
// import Data from '../src/Data/data.json';

function App() {
  const[data, setData]= useState([]);

  return (
    <div className="App">

     <Search setData={setData} />
      {  data.length>0 &&   data.map((item, index)=>{
      return <Card item={item} key={index}/>
     })} 
    </div>
  );
}

export default App;
