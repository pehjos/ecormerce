import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
function Login() {
    const history=useHistory();
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[name,setName]=useState('')
const signIn=e=>{
e.preventDefault()
//firebase 
auth 
.signInWithEmailAndPassword(email,password)
.then(auth=>{
history.push('/')

})
.catch(error=>alert(error.message))
}
const register=e=>{
    e.preventDefault()
    //firebase 
    auth 
    .createUserWithEmailAndPassword(email,password,name)
    .then((auth)=>{
console.log(auth)
if (auth){
history.push('/')

}
    })
    .catch(error=>alert(error.message))
    }
    return (
        <div className="Login">
            <Link to="/">
            <img className="image_logo" src="https://purepng.com/public/uploads/medium/amazon-logo-rgp.png"/>
            </Link>
            <div className="login__container">
<h1>Sign In</h1>
<form>
<h5>Name</h5>
<input type="text" value={name} onChange={e=>setName(e.target.value)}/>
<h5>E-mail</h5>
<input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
<h5>Password</h5>
<input type="password"value={password} onChange={e=>setPassword(e.target.value)}/>
<button type="submit" className="loginsign"onClick={signIn}>Sign In</button>

</form>
<p>
By sigging in you agree to hookite terms and condiction
,You doing any unlawful atttitude in our website will hold you up.
your privacy is protected.
FAKE CLONE FROM ME PEH JOSEPH


</p>
<button type="submit" className="loginregis"onClick={register}>Create your Hookite Account</button>

            </div>
        </div>
    )
}

export default Login
