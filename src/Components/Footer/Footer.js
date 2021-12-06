import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }} style={{textDecoration:'none', backgroundColor:'Darkgray',listStyle:'none'}}>
        <Grid container spacing={2}>
          <Grid item xs={4} >
          <ul style={{listStyle:'none',font:'20px'}}>
            <li><p>LOCAL ADDRESS</p></li>
            <li>MOHAKHALI,DHAKA-1212</li>
            <li>DHAKA,BANGLADESH</li>
        </ul>
           
          </Grid>
          <Grid item xs={4}>

             <ul style={{listStyle:'none',font:'20px'}}>
              <li>Service</li>
              <li>Verify</li>
              <li>Buy</li>
             <li>Company</li>
             <li>Discussion</li>
             </ul>
           
          </Grid>
          <Grid item xs={4} >
          <ul style={{listStyle:'none',font:'20px'}}>
            <li> <p>CONTRACT US</p> </li>
            <li><p>PHONE NUMBER:+880175236478</p> </li>
            <li><p>EMAIL ADDRESS:motorcars@gmail.com</p></li>
         
          </ul>
            
          </Grid>
          
        </Grid>
      </Box>
    )
}

export default Footer
