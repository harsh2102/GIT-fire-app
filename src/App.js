import React,{useState} from 'react';
import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";

//react router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import {ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import "@firebase/auth"
import firebase from "@firebase/app"

//pages
// import Home from './Pages/Home';
// import Signin from './Pages/Signin';
// import Signup from './Pages/Signup';
// import PageNotFound from './Pages/PageNotFound';

// converted above lines into one that reduce the redundancy of the code.
// object destructuring

import {Home,PageNotFound,Signin,Signup} from "./Pages";

//user context
import {UserContext} from './Context/UserContext';

//components
import Footer from './Layout/Footer';
import Header from './Layout/Header';

//init firebase
import firebaseConfig from './Config/firebaseConfig';

// var firebase = require('@firebase/app');
firebase.initializeApp(firebaseConfig);

const App = () => {

const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer/>
      <UserContext.Provider value={{user,setUser}}>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/Signin" component={Signin}/>
          <Route exact path="/Signup" component={Signup}/>
          <Route exact path="*" component={PageNotFound}/>

        </Switch>
        <Footer/>
      </UserContext.Provider>
      
    </Router>
  );
}

export default App;
