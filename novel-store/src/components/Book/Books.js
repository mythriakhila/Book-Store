import axios from 'axios';
import React, { useEffect,useState } from 'react';
import Book from './Book';
import './Book.css'


const URL = "http://localhost:1800/scripts/"; 
const fetchHandler = async() =>{
 return  await axios.get(URL).then((res) => res.data)
}

const Books = () => {
    const [scripts,setScripts] = useState();
    useEffect(() =>{
fetchHandler().then( data => setScripts(data.scripts));
    },[]);
    console.log(scripts);
  return <div>
       <ul>
        {scripts && 
        scripts.map((book,i) =>(
          <div className='book' key={i}>

            <Book book={book}/>

          </div>
        )) }
      </ul>
      </div>
  
}

export default Books