const initialState={ details:{}};


const details = (state=initialState,{type,payload})=>{
    switch (type) {
        case "SET_ID":
            return{details:payload}
        case "REMOVE_ID":
            return{details:""}
        default:
            return state;
    }
}

export default details;

export const setID = (current_id)=>{
    return{
        type:"SET_ID",
        payload:current_id
    }
}
export const removeID = (current_id)=>{
    return{
        type:"REMOVE_ID",
        payload:current_id
    }
}