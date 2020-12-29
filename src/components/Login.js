import React,{useState} from 'react';
import '../css/login.css'
import {auth} from '../firebase';
import {useHistory} from "react-router-dom";

function Login(){
  const history=useHistory();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const signInfuc = (event) => {
    event.preventDefault();
    auth
    .signInWithEmailAndPassword(email, password)
    .then((auth)=>{
      if(auth){
        history.push('/');
      }
    })
    .catch((error) => alert(error.message));
  };
    return (
    <div>
        <div className="bg-image"></div>
        <div className="bg-text">
        <h1>Giriş Yap</h1>
  <form className="logİnForm" action="" method="post">
    <label htmlFor="email">E-Posta</label>
    <input type="email" className="form-control" id="email" placeholder="E-Posta..." name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
    <label htmlFor="password">Parola</label>
    <input type="password" className="form-control" id="password" placeholder="Parola..." name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
    
        <button type="submit" onClick={signInfuc} className="btn-login" name="btn-login" id="login">Giriş Yap</button>
    
    
  </form>
  </div>
    </div>
    )
}
export default Login;