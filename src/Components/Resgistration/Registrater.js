import React,{useState} from 'react'
import { CircularProgress, TextField, Typography } from '@mui/material'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import AlertTitle from '@mui/material/AlertTitle';



const Registrater = () => {
    const [LoginData,setLoginData]= useState({})
const {user,resgisterUser,isloading,autherror}=useAuth();

    const handleOnBlur=(e)=>{
        
     const field =e.target.name;
     const value =e.target.value;
      const newLoginData={...LoginData}
      newLoginData[field]=value;
      console.log(newLoginData);
      setLoginData(newLoginData);
    }
    const handleLoginSubmit=(e)=>{
         e.preventDefault();
        console.log(LoginData)
    //  if(LoginData.password!==LoginData.password2){
    //      Alert('your passwoprd did not match');
    //  }
     resgisterUser(LoginData?.Email,LoginData?.password)
    

    }
   
    return (
        <div style={{marginLeft:'400px'}}>
<Typography variant='body1'gutterBottom style={{marginRight:'350px'}}> <h1>Please Registration</h1></Typography>
   {!isloading && <form onSubmit={handleLoginSubmit} style={{width:'500px'}}>
   <TextField 
   sx={{width:'75%',m:1}}
   id="standard-basic" 
   label="Your Email" 
   name="Email"
   onBlur={handleOnBlur}
   variant="standard" />
   <TextField 
   sx={{width:'75%',m:1}}
   id="standard-basic" 
   label="Your Name" 
   name="name"
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
   <TextField 
   sx={{width:'75%',m:1}}
   id="standard-basic" 
   label="Your Retype Password" 
   type="password"
   name="password2"
   onBlur={handleOnBlur}
   variant="standard" />
   
   
    <Button variant='contained' type='submit' sx={{width:'75%',m:1}}
> Registered</Button>
<NavLink style={{textDecoration:'none'}}
    to="/registrater">
   <Button variant="text">New user? Please Register</Button>
  </NavLink>
 

   </form>}
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
   </div>
    )
}

export default Registrater
