export const notification = (
    state = {
     mini:[],
     exp:[]
    },
    action
  ) => {
    switch (action.type) {
      case "GET_NOTIFICATION":
        console.log(action.payload, "---------------------");
        if (!action.payload.done){
          return state;
        }else
       { return{ ...state, mini:action.payload.min , exp: action.payload.exp  }; }
       
       case "DISPOSE":
        console.log(action.payload, "---------------------");
        return{ ...state};
      case "ADD_NOTIFICATION_ITEM":
        return state;
      default:
        return state;
    }
  };
  