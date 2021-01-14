export const alertReducer = (state={message:"",status:true,show:false},action) => {
    switch(action.type){
        case "SHOW_ERROR":
            return {message:action.payload,show:true,status:true}
        case "REMOVE_ERROR":
            return {...state,show:false}
        case "ERROR":
            return {message:action.payload,show:true,status:false}
        default:
            return {...state}
    }
}