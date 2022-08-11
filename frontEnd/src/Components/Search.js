import axios from 'axios';
import {React, useState} from 'react';
// import Data from '../Data/data.json';
 





function Search({ setData}) {
    const[name, setName]= useState([]);
    const[location, setLocation]= useState([]) ;
    const searchname=(e)=>{
        console.log("name", e.target.value);
        setName(e.target.value)

    }

    const searchlocation=(e)=>{
        console.log("location", e.target.value);
        setLocation(e.target.value)
        
    }
    const submitHandler= async (e)=>{
        e.preventDefault();
        let {data} = await axios.get (`http://localhost:9801/`)
        console.log("ser", data)
        setData(data);
        }
    
  

  return (
    
    <div className="container">
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search "
            name="s" 
            value={name} 
            onChange={searchname} 
        />
        <input
            type="text"
            id="header-search"
            placeholder="Location"
            name="s" 
            value={location}  onChange={searchlocation}  
        />
        <button onClick={submitHandler}
        >search</button>

    </form>
    </div>

  )
  }
;

export default Search





