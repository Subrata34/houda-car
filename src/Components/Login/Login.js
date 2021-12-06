import { TextField, Typography,CircularProgress,Alert,AlertTitle } from '@mui/material'
import React,{useState} from 'react'
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


const Login = () => {

    const {user,isloading,autherror,loginUser}=useAuth();
    const [loginData,setLoginData]=useState({});
    const location =useLocation();
    const history=useHistory();


    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newloginData={...loginData};
        newloginData[field]=value;
        setLoginData(newloginData)

    }

    const handleLoginSubmit=e=>{
        loginUser(loginData.email,loginData.password,location,history)
        console.log(loginData.email)
        e.preventDefault();
    }
   
    
    
    return (
        <div style={{marginLeft:'400px'}}>
             <Typography variant='body1'gutterBottom style={{marginRight:'350px'}}> <h1>Please Login</h1> </Typography>
        <form onSubmit={handleLoginSubmit} style={{width:'500px'}}>
        <TextField 
        sx={{width:'75%',m:1}}
        id="standard-basic" 
        label="Your Email" 
        name="email"
        onBlur={handleOnBlur}
        variant="standard" />
        <TextField 
        sx={{width:'75%',m:1}}
        id="standard-basic" 
        label="Your Password" 
        type="password"
        name="password"
        onBlur={handleOnBlur}
        variant="standard" />
        
        
         <Button variant='contained' type='submit' sx={{width:'75%',m:1}}
   > Login</Button>
   <NavLink style={{textDecoration:'none'}}
         to="/register">
        <Button variant="text">New user? Please Register</Button>
       </NavLink>
      
       {     
   isloading  && <CircularProgress />
}
{user?.email &&  <Alert severity="success">user created successfully</Alert>
}
{
    autherror  && <Alert severity="error">
    <AlertTitle>Error</AlertTitle>
    This is an error alert — <strong>check it out!</strong>
  </Alert>
}
        </form>
        </div>
    )
}

export default Login;
