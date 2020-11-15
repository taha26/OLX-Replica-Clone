import React from "react";
import "./PostView.css"
import { Card } from "react-bootstrap"
import { connect } from "react-redux"
import { user_chat } from "../../Store/Action/Action"
import firebase from "../../Configuration/Firebase"

class PostView extends React.Component {
    constructor() {
        super()
        this.state = {
            chat_user: {},
            chats: [],
            message: "",
        }
    }

    chat = (user) => {
        this.setState({
            chat_user: user,
        })

        let filter= this.props.user.filter((a)=>{
            return a.uid !== this.props.current_user.uid
        })
        let merge;
        for(var i =0; i<filter.length;i++){

        merge = this.merge(this.props.current_user.uid,filter[i].uid);
        }

        // let merge = this.merge(this.props.current_user.uid, this.props.user.uid);
        this.firebase_message(merge)
    }

    message = () => {
        let filter= this.props.user.filter((a)=>{
            return a.uid !== this.props.current_user.uid
        })

    let merge;
    for(var i =0; i<filter.length;i++){

    merge = this.merge(this.props.current_user.uid,filter[i].uid);
    }

        firebase.database().ref('/').child(`chat/${merge}`).push({
            message: this.state.message,
            name: this.props.current_user.name,
            uid: this.props.current_user.uid,
        })

        this.setState({
            message: ""
        })
        
    }

    firebase_message = (uid) => {
        firebase.database().ref('/').child(`chat/${uid}`).on("child_added", (messages) => {
            this.state.chats.push(messages.val())
            this.setState({
                chats: this.state.chats
            })
        })
    }



    componentDidMount() {
        this.props.user_chat()
    }

    merge(uid1, uid2) {

        if (uid1 < uid2) {
            return uid1 + uid2
        } else {
            return uid2 + uid1
        }
    }

    render() {
        // console.log("FIRE PROPS>>>>>", this.props.user)
        return (
            <div className="MainDi">
                <span className="Maindiv">
                    <Card className="Card" >
                        <Card.Img className="cardimgtop" variant="top" src={this.props.location.query.v.url} />
                    </Card>
                    <div className="descriptionDiv">
                        <h3 className="Heading" >Description</h3>
                        <p className="despara">{this.props.location.query.v.description}</p>
                    </div>
                </span>
                <span className="MainDiv2">

                    <div className="tittleDiv">
                        <h3 className="Heading" >Tittle</h3>
                        <h5 className="pricepara">{this.props.location.query.v.tittle}</h5>

                    </div>
                    <div className="priceDiv">
                        <h3 className="Heading" >Price</h3>
                        <h5 className="pricepara"><span>Rs :</span>{this.props.location.query.v.price}</h5>
                    </div>
                    <div className="SellerDiv">
                        <h3 className="Heading" >Seller Description</h3>
                        <h5 className="pricepara"><span><img src={this.props.location.query.v.profile} alt="" className="avatar" /> : </span>{this.props.location.query.v.name}</h5><br />
                        <h5 className="pricepara"><span>Contact No. : </span>{this.props.location.query.v.contact}</h5><br />
                        
                        <br />

                        <div className="BTN">

                            <button onClick={() => this.chat(this.props.user)} className="ChatBTN">Chat With Seller</button>
                        </div>
                    </div>
                    <div>

                    {Object.keys(this.state.chat_user).length ? this.state.chat_user.uid !== this.props.current_user.uid &&
                        <div>

                            {this.state.chat_user.map((v, i) => {
                                return v.uid !== this.props.current_user.uid && 
                                <div className="ChatDiv">
                                
                                <h5><img src={v.profile} alt=""className="avatar" />{v.name}</h5>
                        <div>
                    {this.state.chats.map((v,i)=>{return   <p key={i}><img src={this.props.current_user.profile} alt=""className="avatar" />{v.message}</p>})}
                    </div>
                    
                    <input className="chatInp" value={this.state.message} onChange={(e)=>this.setState({message:e.target.value})} placeholder="Enter Message" type="text" />
                    <button className="SendBTN" onClick={()=>this.message()} >Send</button>
                        </div>
                            })}
                    </div>
                        :
                        <h5>______________________________________</h5>
                    } 
                    </div>
                </span>
            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    current_user: state.current_user,
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    user_chat: () => dispatch(user_chat())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostView);