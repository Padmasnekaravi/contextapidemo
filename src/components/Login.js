import React from 'react'
import { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
//import { useState } from 'react'
function Login() {
  const {name,setName,pwd,setPwd,profileinfo,setProfileInfo}=useContext(LoginContext)
  //const [name,setName]=useState("")
  //const [profileinfo,setProfileInfo]=useState(false)
  const show=()=>{
    if(name==="padmasneka" && pwd==="admin@123")
     setProfileInfo(true)
    else
      setProfileInfo(false)
  }
  return (
    <div>
 <input type="text" onChange={(e)=>setName(e.target.value)}  placeholder="enter the name"></input>
        <br></br>
  <input type="password" onChange={(e)=>setPwd(e.target.value)}  placeholder="enter the password"></input>
<br></br>
<input type="button" onClick={()=>show()} value="Login"></input>
<br></br>
  {profileinfo===false && <font color='red'> "Invalid User!!!"</font>}
   </div>
  )
}

export default Login
