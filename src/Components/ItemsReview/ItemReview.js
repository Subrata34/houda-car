import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';



const ItemReview = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} >
        <Grid item xs={4} style={{width:"100%"}}>
          <img style={{width:"200px",borderRadius:"30px"}} src="https://i.ibb.co/W2Y9B7j/Audi-Car-24.jpg"  />
          <h4>VOLVO</h4>
          
        </Grid>
        <Grid item xs={4} style={{width:"100%"}}>
          <img style={{width:"200px",borderRadius:"30px"}} src="https://i.ibb.co/485mL5R/download.jpg" alt="" />
          <h4>JAKURA</h4>
          
        </Grid>
        <Grid item xs={4} style={{width:"100%"}}>
          <img style={{width:"200px",borderRadius:"30px",height:"120px"}} src="https://i.ibb.co/WtZwJnY/OIP.jpg" alt=""  />
          <h4>TATA</h4>
          
        </Grid>
      </Grid>
    </Box>
    )
}

export default ItemReview
