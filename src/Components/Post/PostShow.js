import React from "react";
import { connect } from "react-redux";
import { postGet } from "../../Store/Action/Action"
import "./Post.css"
import {Link} from "react-router-dom";


class PostShow extends React.Component {

    componentDidMount() {
        this.props.postGet()

    }


    render() {
        return (
            <div className="AdMainDiv">
                <div className="AdDivHeading">
                    <h3>{`FRESH RECOMMENDATIONS`}</h3>
                </div>
                <div className="AdCard2Div">
                {this.props.postget.map((v,i) => {
                    return <div className="AdCardDiv" >
                        <div className="card" style={{ width: '12rem', marginLeft: "25px", marginRight: "25px" }}>
                        <Link to={{pathname: `/adview`, query:{v} }} >
                            <img key={i} src={v.url} dataUrl={v.url} className="card-img-top" alt="" />
                            <div className="card-body" >
                                <h5 className="card-title priceHeading">Rs : </h5><span className="card-title"  >{v.price}</span>
                                <p className="card-text"  >{v.tittle}</p>
                            </div>
                        </Link>
                        </div>
                        </div>
                })}
                </div>
            </div>
            // </Route>
                // </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    postget: state.postget,
    // current_user:state.current_user
})

const mapDispatchToProps = (dispatch) => ({

    postGet: () => dispatch(postGet())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);