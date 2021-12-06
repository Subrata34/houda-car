import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form";

const Admin = () => {

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{ 
         console.log(data);
         axios.post('https://protected-reef-29529.herokuapp.com/carService',data)
         .then(res=>{
             console.log(res);
             if(res.data.insertedId){
                 alert('Added successfully')
                 reset();
             }
         })
    }
    return (
        <div >
           <h1> Please add products</h1>
           <form onSubmit={handleSubmit(onSubmit)} 
           style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
      <input style={{width:"40%",margin:"10px"}} {...register("Name", { required: true, maxLength: 20 })} 
       placeholder="Name"  />
      <textarea style={{width:"40%",margin:"10px"}} {...register("description")} placeholder="Description" />
      <input style={{width:"40%",margin:"10px"}} type="price" {...register("price ")} placeholder="price" />
      <input style={{width:"40%",margin:"10px"}} {...register("img")} placeholder="image url" />

      <input style={{backgroundColor:"green"}} type="submit" />
    </form>

        </div>
    )
}

export default Admin
