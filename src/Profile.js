import React, { useState } from 'react'
import './profile.css'
import logo from './images/logo2.jpg'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
function Login() {
const history = useHistory();
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const provider = new GoogleAuthProvider();
const signIn = e => {
e.preventDefault();


signInWithEmailAndPassword(auth ,email, password)
.then((userCredetial) => {
const user=userCredetial.user;
console.log(user,"from google signin method")
history.push('/')
})
.catch(error => alert(error.message))
}

const register = e => {
e.preventDefault();

createUserWithEmailAndPassword(auth ,email, password)
.then((userCredetial) => {
// it successfully created a new user with email and password
if (userCredetial) {
history.push('/')
}
})
.catch(error => alert(error.message))
}
const windowSign=()=>{
signInWithPopup(auth,provider )
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
history.push('/')
const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
console.log(user, "window signin")
// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
});





}

return (
<div className="Login">
<Link to="/">
<img className="image_logo" src={logo}/>
</Link>
<div className="login__container">
<h1>Sign In </h1>
<form>
    
<h5>E-mail</h5>
<input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
<h5>Password</h5>
<input type="password"value={password} onChange={e=>setPassword(e.target.value)}/>

<button type="submit" className="loginsign"onClick={signIn}>Sign In</button>
<h6>OR</h6>
<h4 onClick={windowSign}>Sign With Google</h4>
</form>
<p >
By sigging in you agree to Hookite terms and condiction
,You doing any unlawful atttitude in our website will lead you to account blockage .
your privacy is protected.
We trust all our custmers


</p>

<button type="submit" className="loginregis"onClick={register}>Create your Hookite Account</button>

</div>
</div>
)
}

export default Login
