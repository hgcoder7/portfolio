import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import './SignUp.css'

const SignUp = ({setLogin,login}) => {
  const [name,setName]=useState('')
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
    

    // const deleteproduct= async (vc)=>{
     
       
    //          const userdata={name:name,username:username,password:password}
    //       fetch(url+'/user/create',{
    //        method:'POST',
    //        headers:{"Accept":'application/json',
    //          "Content-Type": "application/json"},
    //        body:JSON.stringify(userdata)
           
    //      }).then(()=>{
    //       console.log("SIGNUP SUCCESS");
    //      window.location.reload();
    //      }).
    //      catch(
    //        console.log("SIGNUP, ERROR OCCURED")
    //   )
    // }

  return (
    <div>

       <div className='signup-desktop' style={{display:'flex',background:'black'}}>
         


           <div style={{height:'100vh',width:'50%',background:'black'}}>
           {/* <h1 style={{display:'block',margin:'auto',marginTop:70}}>Chat Application</h1> */}
           
           
         <div style={{height:500,width:400,boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',margin:'auto',borderRadius:15,background:'whitesmoke',paddingTop:20,marginTop:30,marginTop:100}}>
        

          <h2 style={{marginTop:35,marginLeft:80}}>Contact Form</h2>

          <div>
       <TextField style={{display:'block',margin:'auto',marginTop:20,width:300,marginLeft:80}} id="outlined-basic" type="text" label="Name" variant="outlined" value={name} onChange={(e)=>setName(e.target.value)}/>
       </div>

       <div>
        <TextField style={{display:'block',margin:'auto',marginTop:20,width:300,marginLeft:80}} id="outlined-basic" type='text' label="Username" variant="outlined" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        </div>

        <div>
        <TextField style={{display:'block',margin:'auto',marginTop:20,width:300,marginLeft:80}} id="outlined-basic" type="password" label="Password" variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>

        <button style={{padding:18,paddingLeft:100,paddingRight:100,marginTop:20,fontSize:20,borderRadius:8,color:'wheat',background:'black',outline:'none',border:'none',boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',cursor:'pointer',display:'block',marginLeft:80}}>Send</button>
   
      
        </div>  
           
            </div>  
       </div>

      


        {/* <h3>Sign Up</h3>
   <form onSubmit={signupuser}>
        <input type='text' name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input type='text' name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
        <input type='password' name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        <button type="submit">  Send</button>
      </form>
      <button onClick={()=>setLogin(!login)}>Login</button> */}
    </div>
  )
}

export default SignUp
