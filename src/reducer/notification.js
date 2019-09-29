export const notification = (
    state = {
     mini:[{}],
     exp:[{}]
    },
    action
  ) => {
    switch (action.type) {
      case "GET_NOTIFICATION":
        console.log(action.payload, "---------------------");
        return{ ...state, stockmovement: action.payload };
        case "DISPOSE":
        console.log(action.payload, "---------------------");
        return{ ...state, stockStatus: action.payload };
      case "ADD_NOTIFICATION_ITEM":
        return state;
      default:
        return state;
    }
  };
  