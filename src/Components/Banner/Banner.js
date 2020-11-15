import React from "react";
import bannerimg from "../../Assets/banner.jpg"

export default class Banner extends React.Component{
    render(){
        return(
            <div>
               <img src={bannerimg} style={{marginTop:"4px"}} width="100%" alt="" />
            </div>
        //     <div className="card mb-3">
        //     <img src={bannerimg} className="card-img-top" alt="..." />
        //   </div>
        )
    }
}
