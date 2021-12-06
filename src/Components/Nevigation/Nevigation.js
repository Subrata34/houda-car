import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {  NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Nevigation = () => {
  const {user,logout}=useAuth();
  

  console.log(user);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft:'-800px'}}>
                TATA 
            </Typography>
            <NavLink to="/booking" style={{textDecoration:'none',color:'white'}} >  
            <Button color="inherit"  >Booking</Button> 
             </NavLink>
            <NavLink to="/booking" style={{textDecoration:'none',color:'white'}} >  
            <Button color="inherit"  >Dashboard</Button> 
             </NavLink>
            {
              user?.email?
             <NavLink to='/login'>
            <Button color="inherit" 
            style={{textDecoration:'none',color:'white'}} onClick={logout}>
              Logout</Button>

            </NavLink>
            :
            <NavLink style={{textDecoration:'none',color:'white'}} to='/login'>
            <Button color="inherit">Login</Button>

            </NavLink>
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Nevigation
