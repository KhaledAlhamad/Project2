const initialState={ search:{}};


const search = (state=initialState,{type,payload})=>{
    switch (type) {
        case "SET_SEARCH":
            return{search:payload}
        case "CLEAR_SEARCH":
            return{search:""}
        default:
            return state;
    }
}

export default search;

export const setSearch = (current_id)=>{
    return{
        type:"SET_SEARCH",
        payload:current_id
    }
}
export const clearSearch = (current_id)=>{
    return{
        type:"CLEAR_SEARCH",
        payload:current_id
    }
}