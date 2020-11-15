import React from "react";
import FooterImg from "../../../Assets/FooterBanner.PNG"

export default class FooterBanner extends React.Component{
    render(){
        return(
            <div>
                <img src={FooterImg} alt="" />
            </div>
        //     <div className="card mb-3">
        //     <img src={FooterImg} className="card-img-top" alt="..." />
        //   </div>
        )
    }
}