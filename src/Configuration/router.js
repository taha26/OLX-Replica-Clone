import React from "react";
import {BrowserRouter as Router , Route} from "react-router-dom";
// import Header from "../Components/Header/Header";
// import Login from "../Components/Header/Login"
import Sell from "../Components/Header/ComponentsContainers/Sell";
import Home from "../Components/Home/Home"
import PostView from "../Components/Post/PostView"
import PostShow from "../Components/Post/PostShow"
// import App from "../App"

class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/sell' component={Sell}></Route>
                {/* <Route exact path='/adview' component={PostView}></Route> */}
                {/* <Route exact path='/login' component={Login}></Route> */}
            </Router>
        )
    }
}

class PostRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={PostShow}></Route>
                <Route exact path='/adview' component={PostView}></Route>
            </Router>
        )
    }
}

export{

    AppRouter,
    PostRouter,
}