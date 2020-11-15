import firebase from "../../Configuration/Firebase";


const facebook_login=()=>{
    // console.log("history..",history)
    return (dispatch)=>{
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            // var token = result.credential.accessToken;
            var user = result.user;

            let data_user={
                name : user.displayName,
                profile : user.photoURL,
                uid : user.uid,
            }
        
            
        firebase.database().ref('/').child(`user/${user.uid}`).set(data_user)
        .then(()=>{
            dispatch({type:"SETUSER",payload:data_user})

        })


          }).catch(function(error) {
            // Handle Errors here.
            // var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            // ...
            console.log(errorMessage)
          });

    }
    
}

// const logOut=()=>{
//     firebase.auth().signOut().then(function() {
//         console.log("Sign-out successful.")
//       }).catch(function(error) {
//         // An error happened.
//       });
//     //   this.setState({
//     //       LogIn:false,
//     //   })
// }

const sell = (props)=>{
    return(dispatch)=>{
        // console.log("running",props.history)
        props.history.push('/sell')
    }

    
}

// var key = firebase.database().ref('/').child(`post/`).push().key


const postNow=(state,history)=>{
    return(dispatch)=>{
        // console.log("STATE>>>>>>>>>",state)
        // console.log("HISTORY>>>>>>>>>",history)
        var key = firebase.database().ref('/').child(`post/`).push().key
        let stateKey = {
            ...state,
            key:key
        }
        firebase.database().ref('/').child(`post/${key}`).set(stateKey)

        setTimeout(()=>{
            history.push('/')
        },2000)
    }
}

const postGet =()=>{
    return(dispatch)=>{
        // let post_get_data_array = []
        firebase.database().ref('/').child(`post/`).on("child_added",(data)=>{
            // let post_get_data=[]
            // console.log(data.key)
            // let key = data.val().key

            let post_get_data=
            {

                
                    tittle: data.val().tittle,
                    description: data.val().description,
                    price: data.val().price,
                    contact: data.val().contact,
                    url: data.val().url,
                    key:data.val().key,
                    name:data.val().name,
                    profile:data.val().profile,
                    uid:data.val().uid,
                
            }
            // post_get_data_array.push(post_get_data)
            // post_get_data.push(data.val())
            // console.log("POST ARRAY>>>>>>>>",post_get_data)
            // console.log(key)
            dispatch({type:"POSTGET",payload:post_get_data})
        })
    }
}


// const chat = (props)=>{
//     return(dispatch)=>{
//         console.log("running",props.history)
//         // props.history.push('/chat')
//     }

    
// }
const user_chat = ()=>{
    return(dispatch)=>{
        let user=[]
        firebase.database().ref('/').child(`user/`).on("child_added",(data)=>{
            // console.log("fire",data.val())
            // let user={
            //     name:data.val().name,
            //     profile:data.val().profile,
            //     uid:data.val().uid,
            // }
            user.push(data.val())
        })
        dispatch({type:"FIREBASEUSER",payload:user})
        // console.log("FIRE USER<<<<",user)
    }

    
}

export{
    facebook_login,
    sell,
    postNow,
    postGet,
    user_chat,
}