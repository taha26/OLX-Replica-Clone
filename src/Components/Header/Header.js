import React from "react";
import "./Header.css"
import OlxLogo from "./ComponentsContainers/OlxLogo"
import searchicon from "../../Assets/searchicon.png"
import { connect } from "react-redux"
import { facebook_login, sell } from "../../Store/Action/Action"
import bellicon from "../../Assets/bellicon.png"
// import Dropdownimg from "../../Assets/dropdownicon.png"
// import chaticon from "../../Assets/chaticon.png"
import firebase from "../../Configuration/Firebase"

class Header extends React.Component {
  constructor(){
    super()
    this.state={
      LogIn:false,
      profile:"",
    }
  }
    
componentDidMount(){

  var user = this.props.current_user;
  firebase.auth().onAuthStateChanged((user)=>{
  if (user) {
    // console.log("User is signed in")
    this.setState({
      LogIn:true,
      profile:user.profile,
    })
  } else {
    // console.log("No User is signed in")
  }
  });
}

logOut=()=>{
  firebase.auth().signOut().then(function() {
      // console.log("Sign-out successful.")
    }).catch(function(error) {
      // An error happened.
    });
    this.setState({
        LogIn:false,
    })
}
  
    
    render() {
    return (
      <div className="Header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand logo" href="#">
            <OlxLogo className="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <div className="input-group input-group-lg location mr-4">
                <input type="text" className="form-control" placeholder="Pakistan" />
                <div className="input-group-btn">
                  <img src={searchicon} alt="" className="fas fa-search ico searchicon" />

                </div>
              </div>
              <div className="input-group input-group-lg search">
                <input type="text" className="form-control" placeholder="Find Cars, Mobile Phones and more...  " />
                <div className="input-group-btn">
                  <img src={searchicon} alt="" className="fas fa-search ico searchicon" />
                </div>
              </div>
            </ul>
            {this.state.LogIn===false ?
              <div className="form-inline my-2 my-lg-0">
                <h6 onClick={() => this.props.facebook_login()} className="mr-sm-2 login">Login</h6>
                <button onClick={() => this.props.facebook_login()} className="my-2 my-sm-0 fas fa-plus sell">&nbsp;+ SELL</button>
              </div>
              :
              <div className="form-inline my-2 my-lg-0">
                <img src={bellicon} className="mr-sm-2 login" width="35px" alt="" />
                <img src={this.props.current_user.profile} alt="" className="avatar" />
                <h6 onClick={this.logOut}  className="mr-sm-2 logout">Logout</h6>

                <button className="my-2 my-sm-0 fas fa-plus sell" onClick={() => this.props.sell(this.props.props)}  >&nbsp;+ SELL</button>
              </div>
            }
          </div>
        </nav>
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  current_user: state.current_user
})

const mapDispatchToProps = (dispatch) => ({
  facebook_login: () => dispatch(facebook_login()),
  sell: (props) => dispatch(sell(props)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);