const initialState={ watch:[]};


const watch = (state=initialState,{type,payload})=>{
    switch (type) {
        case "ADD_WATCH":
            return {watch: [...state.watch , payload]}
        case "DELETE_WATCH":
            return{watch:{}}
        default:
            return state;
    }
}

export default watch;

export const addWatch = (payload)=>{
    return{
        type:"ADD_WATCH",
        payload:payload
    }
}
export const clearWatch = (payload)=>{
    return{
        type:"CLEAR_WATCH",
        payload:payload
    }
}