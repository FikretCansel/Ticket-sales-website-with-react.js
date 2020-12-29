import React,{useState} from 'react';
import '../css/signup.css'
import {auth} from '../firebase';
import {useHistory} from "react-router-dom";

function SingUp() {
  const history=useHistory();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [contract,setcontract]=useState(0);
  const SingUpfuc = (event) => {
    event.preventDefault();
    if(contract){
      auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth)=>{
        if(auth){
          history.push('/');
        }
        return auth.user.updateProfile({
          displayName:name,
          phoneNumber:phoneNumber
        });
      })
      .catch((error) => alert(error.message));
    }
    else{
      alert("gizlilik sözleşmesini kabul ediniz!!");
    }
    
  };

  
  return (
      <div className="col-sm-4">
    <div className="bg-textt">
  <h1>Kayıt Ol</h1>
  <form className="signUpForm" action="" method="post">
    <label htmlFor="name">Ad</label>
    <input type="name" className="form-control" id="name" placeholder="Adınız ve Soyadınız" name="name" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
    <label htmlFor="email">E-Posta</label>
    <input type="email" className="form-control" id="email" placeholder="E-Posta..." name="email" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
    <label htmlFor="password">Parola</label>
    <input type="password" className="form-control" id="password" placeholder="Parola..." name="password" value={password} onChange={(e)=>setPassword(e.target.value)} /><br/>
    <label htmlFor="tel">Cep Telefonu</label>
    <input type="tel" className="form-control" id="tel" size="11" placeholder="0___ ___ ____" name="tel" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} />
    <input type="checkbox" id="contract" name="contract" value={contract} onChange={(e)=>setcontract(!contract)} /><br/>
    <label htmlFor="contract">Kullanım Şartları'nı ve Gizlilik Sözleşmesi'ni okudum ve onaylıyorum.</label><br/>
    <button type="submit" onClick={SingUpfuc} className="btn-signup btn-success" name="btn-signup" id="signup">Kayıt Ol</button>
  </form>
    </div>
    </div>
  );
}
export default SingUp;