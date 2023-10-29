export const ADD = (items)=>{
    return{
        type : "ADD_TO_CART",
        payload:items
    }
}
export const REMOVE = (id)=>{
    return{
        type:"REMOVE_FROM_CART",
        payload:id
    }

}
export const REM_ONE = (element)=>{
    return{
        type:"REMOVE_ONE",
        payload:element
    }
    
}