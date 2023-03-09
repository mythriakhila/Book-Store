import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import {FormLabel,TextField,Box, Button,FormControlLabel,Checkbox} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookDetails = () => {
    const history = useNavigate();
    const [inputs,setInputs] = useState({});
    const [checked,setChecked] = useState(false);
    const id = useParams().id;
    
    useEffect(() => {
      
    const fetchHandler = async() =>{
        await axios.get(`http://localhost:1800/scripts/${id}`)
        .then((res) =>res.data)
        .then((data) =>setInputs(data.book))
    };
    fetchHandler();
      
    }, [id]);
    const handleChange = (e) =>{
        setInputs((prevState) =>({
          ...prevState,
          [e.target.name] : e.target.value
        }))
        // console.log(e.target.name,"Value",e.target.value)
      }
    
    const sendRequest = async() =>{
        await axios.put(`http://localhost:1800/scripts/${id}`,{
          name : String(inputs.name),
          author : String(inputs.author),
          description : String(inputs.description),
          price : Number(inputs.price),
          image: String(inputs.image),
          available:Boolean(checked)
        }).then(res => res.data) 
      };

    
     
      const handleSubmit = (e) =>{
        e.preventDefault();
        sendRequest().then(() =>history('/books'))
    }
  return (
    <div>
       {inputs &&   <form onSubmit={handleSubmit}>
       <Box display="flex" flexDirection="column" justifyContent={"center"} 
    maxWidth={700} alignContent={"center"} alignSelf={"center"}
    marginRight="auto" marginTop={5} marginLeft="auto">
      <FormLabel >name</FormLabel>
      <TextField value={inputs.name} onChange={handleChange}
       type="text" margin="normal" fullWidth variant="outlined" name="name" />
      <FormLabel >author</FormLabel>
      <TextField value={inputs.author} onChange={handleChange}
       type="text" margin="normal" fullWidth variant="outlined" name="author"/>
      <FormLabel >description</FormLabel>
      <TextField value={inputs.description} onChange={handleChange}
       type="text" margin="normal" fullWidth variant="outlined" name="description"/>
      <FormLabel >price</FormLabel>
     
      <TextField value={inputs.price} onChange={handleChange} type="number" margin="normal" fullWidth variant="outlined" name="price"/>
      <FormLabel >image</FormLabel>
  
      <TextField value={inputs.image} onChange={handleChange}
       type="text" margin="normal" fullWidth variant="outlined" name="image"/>
      <FormControlLabel control={<Checkbox checked={checked} 
       onChange={() => setChecked(!checked)} />} label="available" />
       <Button variant='contained' type='submit'>Update Book</Button>
       </Box>
    </form>
}
    </div>
  )
}

export default BookDetails