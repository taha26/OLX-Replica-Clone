import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Categories from "../Categories/Categories"
import Banner from "../Banner/Banner"
// import PostShow from "../Post/PostShow"
// import Sell from "../Header/ComponentsContainers/Sell"

import {PostRouter} from "../../Configuration/router"

class Home extends React.Component{
    render(){
        // console.log("HOME>>>>>>",this.props)
        return(
            <div>
                <Header props={this.props}/>
                {/* <AppRouter/> */}
                <Categories/>
                <Banner/>
                <PostRouter props={this.props} />
                {/* <Sell/> */}
                <Footer />
            </div>
        )
    }
}

export default Home;