
export const sales = (state ={}, action) => {
    switch (action.type) {
        case "GET_ITEM_TO_SALE":
            console.log(action.payload,"---------------------")
            return {...state ,sales:action.payload }
        case "SALE":
            return state
        default:
            return state
    }
}