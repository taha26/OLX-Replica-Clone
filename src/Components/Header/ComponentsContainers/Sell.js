import React from "react";
import "../ComponentsContainers/Sell.css"
import Foot from "../../../Components/Footer/FooterContainers/Foot";
import OLXADDLOGO from "../../../Assets/OLXADDLOGO.webp"
import { connect } from "react-redux"
import {postNow} from "../../../Store/Action/Action"


class Sell extends React.Component {
    constructor(props){
        super(props)
        this.state={
            name:this.props.current_user.name,
            profile:this.props.current_user.profile,
            uid:this.props.current_user.uid,
        }
    }



    // postNow=()=>{
    //     console.log(this.state)
    // }
    render() {
        // console.log(this.state)
        return (
            <div className="Main">
                <div className="OLXADDLOGO">
                    <img src={OLXADDLOGO} className="OLXADDLOGOIMG" alt="" />
                </div>
                <div className="formHeading">
                    <h1>POST YOUR AD</h1>
                </div>
                <div className="form">
                    <div className="detailsHeadingDiv">
                        <h4>INCLUDE SOME DETAILS</h4>
                        <div className="detailsDiv" >
                            <h6>Ad Tittle</h6>
                            <input onChange={(e)=>this.setState({tittle:e.target.value})} type="text" className="detailsDivInput" />
                        </div>
                        <br />
                        <div className="detailsDiv">
                            <h6>Decription</h6>
                            <textarea onChange={(e)=>this.setState({description:e.target.value})} className="teaxtArea" cols="50" rows="5" ></textarea>
                        </div>
                    </div>
                    <div className="detailsHeadingDiv">
                        <h4>SET A PRICE</h4>
                        <div className="detailsDiv">
                            <h6>Price</h6>
                            <input onChange={(e)=>this.setState({price:e.target.value})} type="text" className="detailsDivInput" />
                        </div>
                    </div>
                    <div className="detailsHeadingDiv">
                        <h4>CONTACT DETAILS</h4>
                        <div className="detailsDiv">
                            <h6>Phone Number</h6>
                            <input onChange={(e)=>this.setState({contact:e.target.value})} type="number" className="detailsDivInput" />
                        </div>
                    </div>
                    <div className="detailsHeadingDiv">
                        <h4>UPLOAD A PHOTO URL</h4>
                        <div className="detailsDiv">
                            <h6>Add A Photo URL</h6>
                            <input onChange={(e)=>this.setState({url:e.target.value})} type="url" className="detailsDivInput" />
                        </div>
                    </div>
                    <br />
                    <div>
                        <button onClick={()=>this.props.postNow(this.state,this.props.history)} className="postNow">POST NOW</button>
                        {/* <button onClick={()=>this.props.postNow(this.state,this.props.history),()=>this.setState({name:this.props.current_user.name,profile:this.props.current_user.profile,uid:this.props.current_user.uid,})} className="postNow">POST NOW</button> */}
                    </div>
                </div>
                <div className="foot">
                    <Foot />
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    current_user : state.current_user
  })
  
  const mapDispatchToProps = (dispatch) => ({
    // set_data:(data)=>dispatch(set_data(data)),
    // facebook_login: () => dispatch(facebook_login()),
    // sell: (props) => dispatch(sell(props))
    postNow: (state,history) => dispatch(postNow(state,history))
  })

export default connect(mapStateToProps, mapDispatchToProps)(Sell);