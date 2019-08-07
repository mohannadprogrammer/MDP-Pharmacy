
export default (state = {items:[]}, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return {...state, items: action.payload}
        case "ADD_USER":
        const {newusername,...rest} = action.payload;
            const user  ={
                ...rest,username :newusername,
                
            }
            console.log(user,newusername,{...rest})

            state.items.push(user)
            return {...state}
       
        default:
            return state
    }
}