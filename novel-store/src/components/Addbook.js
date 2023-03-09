import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import {FormLabel,TextField,Box, Button,FormControlLabel,Checkbox} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const Addbook = () => {
  const history = useNavigate();
const [inputs, setInputs] = useState({

  name:"",
  author:"",
  description:"",
  price:"",
  
  image:""

});
const [checked, setChecked] = useState(false)
const handleChange = (e) =>{
  setInputs((prevState) =>({
    ...prevState,
    [e.target.name] : e.target.value
  }))
  // console.log(e.target.name,"Value",e.target.value)
}
const sendRequest = async() =>{
  await axios.post("http://localhost:1800/scripts/",{
    name : String(inputs.name),
    author : String(inputs.author),
    description : String(inputs.description),
    price : Number(inputs.price),
    image: String(inputs.image),
    available:Boolean(checked)
  }).then(res => res.data) 
}
const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(inputs,checked);
  sendRequest().then(() =>history('/books'))
}

  return (
    <Box display="flex" flexDirection="column" justifyContent={"center"} 
    maxWidth={700} alignContent={"center"} alignSelf={"center"}
    marginRight="auto" marginTop={5} marginLeft="auto">
    <form onSubmit={handleSubmit}>
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
       <Button variant='contained' type='submit'>Add Book</Button>
    </form>
    
    </Box>
  )
  
}

export default Addbook