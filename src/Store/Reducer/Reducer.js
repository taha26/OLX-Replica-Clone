
const Intitial_State ={
    current_user:{},
    postget:[],
    user:[],
}

export default (state = Intitial_State,action)=>{
    // console.log("action............",action)
    switch(action.type){
        case "SETUSER":
            return({
                ...state,
                // current_user:[...state.current_user,action.payload]
                current_user:action.payload
            })
        case "POSTGET":
            return({
                ...state,
                postget:[...state.postget,action.payload]
                // postget:action.payload
            })
        case "FIREBASEUSER":
            return({
                ...state,
                // user:[...state.user,action.payload]
                user:action.payload
            })
        }
        return state;
}