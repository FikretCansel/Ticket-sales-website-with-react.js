import React from 'react';
import '../css/header.css';
import { Link } from 'react-router-dom'
import { useStateValue } from "../context/StateProvider";
import { auth } from '../firebase';

function Header() {

  const [{ user }, dispath] = useStateValue();

  const Logout = () => {

    auth.signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      // An error happened.
    });

    dispath({
      type: 'LOG_OUT'
    })
  }
  return (
    <div>
      <header>
        <Link to="/" className="logo">BIBİLET</Link>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/mytickets">Biletlerim</Link></li>
          <li><Link to="/contact">Iletişim</Link></li>
          <li><Link to="/aboutus">Hakkımızda</Link></li>
          {user !== null ? <div><li style={{ color: "yellow" }}>{user.displayName}</li>
          <li style={{ color: "white" ,cursor:"pointer"}} onClick={Logout}>Çıkış Yap</li></div> : 
          <div><li><Link to="/singup">Kayıt Ol</Link></li>
            <li><Link to="/login">Giriş Yap</Link></li></div>}
        </ul>
      </header>
      <div className="sizeBox">
      </div>
    </div>
  );
}
export default Header;