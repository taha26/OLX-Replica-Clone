import React from "react";
import "./Categories.css"
import Dropdownimg from "../../Assets/dropdownicon.png"


class Categories extends React.Component{
    render(){
        return(
            <ul className="nav nav-pills ulbox">
            <span className="drop">
            <li className="nav-item ">
              <a className="nav-link"  href="#" role="button" aria-haspopup="true" aria-expanded="false">ALL CATEGORIES <img width="35px" src={Dropdownimg} alt="" /> </a>
            </li>
            </span>
            <li className="nav-item">
              <a className="nav-link catList" href="#">Mobile Phones</a>
            </li>
            <li className="nav-item">
              <a className="nav-link catList" href="#">Cars</a>
            </li>
            <li className="nav-item">
              <a className="nav-link catList" href="#">Motorcycles</a>
            </li>
            <li className="nav-item">
              <a className="nav-link catList" href="#">Houses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link catList" href="#">TV-Video-Audio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link catList" href="#">Tablets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link catList" href="#">Lands & Plots</a>
            </li>
          </ul>
        )
    }
}

export default Categories;