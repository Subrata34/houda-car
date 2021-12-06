import React, { useEffect, useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Button } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';



const Products = () => { 
 const [products,setProducts]=  useState([]);
 useEffect(()=>{
   fetch('https://protected-reef-29529.herokuapp.com/carService')
   .then(res=>res.json())
   .then(data=>setProducts(data))
   
 },[])
  
    
    return (
        <Box>
          <h1 style={{textAlign:'center'}}>Our Products </h1>
           <ImageList>
      {products.map((item) => (
        <ImageListItem key={item.img} style={{margin:'20px'}}>
          <img
          style={{borderRadius:'80px'}}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
          
          />
          <ImageListItemBar
            title={item.name}
            subtitle={<span> {item.description}</span>}
            Price={item.price}
            position="below"
          />
         
        
         <Link to={`/booking/${item.id}`} style={{width:'150px',marginLeft:'240px',textDecoration:'none'}}>
         <Button  variant="contained">Buy Now</Button>
         </Link>
        </ImageListItem>
      ))}
      

    </ImageList>
    </Box>
    
    
        
    )
}

export default Products
