import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Home from "./Components/Home/Home"
// import Header from "./Components/Header/Header"
import {AppRouter} from "../src/Configuration/router"
class App extends React.Component{
  render(){
    return(
      <div>
      {/* <Header /> */}
      {/* <Home /> */}
        <AppRouter/>
        {/* </AppRouter> */}
      </div>
    )
  }
}


export default App;
