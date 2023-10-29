const INITIAL_STATE ={
    carts:[],
}

export const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case "ADD_TO_CART" :
            const itemIndex = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(itemIndex >= 0 ){
                state.carts[itemIndex].qnty +=1
            }else{
                const temp = {...action.payload,qnty:1}
                return {
                    ...state,
                    carts:[...state.carts,temp]
                };
            }
        case "REMOVE_FROM_CART" : 
        const delet = state.carts.filter((element)=>element.id !==action.payload)
        return {
            ...state,
            carts:delet
        }
        case "REMOVE_ONE": 
        const itemDec = state.carts.findIndex((item)=>item.id === action.payload.id);
            if(state.carts[itemDec].qnty >=1 ){
                const delet = state.carts[itemDec].qnty -=1;
                // console.log([...state.carts,delet]);
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[itemDec].qnty ===1 ){
                const delet = state.carts.filter((element)=>element.id !==action.payload)
                return {
                    ...state,
                    carts:delet
                } 
            }
        default:
            return state
    }
    
}