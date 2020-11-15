import React from "react";
import FooterBanner from "./FooterContainers/FooterBanner";
import FooterCategories from "./FooterContainers/FooterCategories";
import Foot from "./FooterContainers/Foot"

class Footer extends React.Component{
    render(){
        return(
            <div>
                <FooterBanner/>
                <FooterCategories/>
                <Foot/>
                {/* <h1>Footer</h1> */}
            </div>
        )
    }
}

export default Footer;