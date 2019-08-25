export default (
  state = {
    items: [],
    stock: [],
    invoice: [],
    units: [],
    stores: [],
    suppliers: []
  },
  action
) => {
  switch (action.type) {
    case "GET_ITEMS":
      return { ...state, items: action.payload };
    case "GET_ITEMS_UNIT":
      return { ...state, units: action.payload };
      case "GET_STORES":
      return { ...state, stores: action.payload };
      case "GET_SUPPLIERS":
      return { ...state, suppliers: action.payload };
    case "ADD_USER":
      const { newusername, ...rest } = action.payload;
      const user = {
        ...rest,
        username: newusername
      };
      console.log(user, newusername, { ...rest });

      state.items.push(user);
      return { ...state };

    case "ADD_ITEM":
      state.items.push(action.payload);
      return { ...state };
    case "ADD_STORE":
      state.items.push(action.payload);
      return { ...state };
    case "ADD_SUPPLIER":
      state.items.push(action.payload);
      return { ...state };
    case "GET_STOCK":
      return { ...state, stock: action.payload };

    case "GET_INVOICE":
      return { ...state, invoice: action.payload };

    default:
      return state;
  }
};
