import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Aboutus from './components/Aboutus';
import SingUp from './components/SingUp';
import Contact from './components/Contact';
import '../src/css/homepage.css';
import '../src/css/header.css';
import Payment from './components/Payment';
import Home from './components/Home';
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";
import {useEffect} from 'react';
import MyTickets from './components/MyTickets';


function App() {

  const [{user},dispatch]=useStateValue();
  
  useEffect(() => {
    //will only once when app component loads
    auth.onAuthStateChanged(authUser=>{
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
      }
      else{
        //the user is logged out
        dispatch({
          type:'SET_USER',
          user:null
        })
      }
    })
    
  }, [dispatch])

  return (
    <div className="Main">
       <Router>
         <Header />
        <Switch>
        <Route exact path="/payment">
          <Payment/>
        </Route>
        <Route exact path="/aboutus">
          <Aboutus/>
        </Route>
        <Route exact path="/singup">
          <SingUp/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/mytickets">
          <MyTickets/>
        </Route>s
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>
    
    </div>
  );
}

export default App;
