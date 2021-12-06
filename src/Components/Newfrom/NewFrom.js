import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const NewFrom = () => {
    return (
    
            <Box
      component="form" style={{marginTop:"60px"}}

    >
        <h1>Your Review</h1>
      <TextField
      style={{width:"600px"}}
       id="outlined-basic" 
       label="Name" 
       type="name"
       variant="outlined" />
       <br />
      <TextField 
      style={{width:"600px"}}
      id="outlined-basic" 
      label="Your Email" 
      type="Email"
      variant="filled" />
      <br />
      <TextField
      style={{width:"600px"}}
       id="standard-basic" 
      label="Address" 
      type="address"
      variant="standard" />
      <br />
      <Button variant="contained" style={{width:"300px"}}>Submit</Button>

    </Box>
        
    )
}

export default NewFrom
