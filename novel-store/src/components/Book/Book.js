import {Button} from '@mui/material'
import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Book.css'

const Book = (props) => {
    const history = useNavigate();
    const deleteHandler = async() =>{
        await axios.delete(`http://localhost:1800/scripts/${_id}`)
        .then((res) =>res.data)
        .then(() =>history("/books"))
    };
    const {_id,name,author,description,price,available,image} = props.book;
  return (
     <div className='card'>
        <img className='images' src={image} alt={name}/>
        <p style={{color:"black",fontFamily:"sans-serif",fontSize:"16px"}}>By {author}</p>
        <h4 style={{color:"black",fontFamily:"sans-serif",textTransform:"uppercase"}}>{name}</h4>
        <p style={{color:"black",fontFamily:"sans-serif",fontSize:"14px"}}>{description}</p>
        <h4>Rs {price} /-</h4>
        <p>{available}</p>
       <div> <Button style={{backgroundColor:"black",color:"white"}} LinkComponent={Link} to={`/books/${_id}`}>Update</Button></div>
       <div style={{marginTop:"5px"}}> <Button style={{backgroundColor:"black",color:"white"}} onClick={deleteHandler}>Delete</Button></div>

    </div>
  )
}


export default Book