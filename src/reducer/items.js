
export default (state = { items: [], stock: [], invoice: [] }, action) => {
    switch (action.type) {
        case "GET_ITEMS":
            return { ...state, items: action.payload }
        case "ADD_USER":
            const { newusername, ...rest } = action.payload;
            const user = {
                ...rest, username: newusername,

            }
            console.log(user, newusername, { ...rest })

            state.items.push(user)
            return { ...state }
        case "GET_STOCK":
            return { ...state, stock: action.payload }

        case "GET_INVOICE":
            return { ...state, invoice: action.payload }

        default:
            return state
    }
}