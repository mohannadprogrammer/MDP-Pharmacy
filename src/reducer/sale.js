export const sales = (
  state = {
    requist: {
      transtype: "sale",
      itemsDetail: [],
      storeid: 0,
      discount: 0
    },
    dispose: {
      "transtype": "dispose",
      "itemsDetail": [{ "id": 1, "quantity": 1, "batch": 15 }],
      "storeid": 0
    }
  },
  action
) => {
  switch (action.type) {
    case "GET_ITEM_TO_SALE":
      console.log(action.payload)
      if (action.payload) {
        if (action.payload.id) {
          let index = isAddIt(action.payload, state.requist.itemsDetail);
          if (index === -1) {
            if (action.payload.available > 0) {
              state.requist.itemsDetail.push({ ...action.payload, quantity: 1 });
            } else {
              alert("the item is unavailable");
            }
          } else {
            if (
              action.payload.available >
              state.requist.itemsDetail[index].quantity + 1
            ) {
              state.requist.itemsDetail[index].quantity++;
            } else {
              alert("this quantity of item is unavailable");
            }
          }
        } else {
          alert("not found");
        }
      } else {
        alert("not found");
      }
      return { ...state };
    case "DELETE_FROM_ITEMSDETAILS":
      console.log(action.payload);
      state.requist.itemsDetail.splice(action.payload, 1);
      return { ...state };
    case "SALE":
      state = {
        requist: {
          transtype: "sale",
          itemsDetail: [],
          storeid: 0,
          discount: 0
        }
      };
      return state;
      case "DISPOSE":
        state = {
          dispose: {
            transtype: "dispose",
            itemsDetail: [],
            storeid: 0
          }
        };
        return state;
    case "ADD_INVOICE":
      return state;
    default:
      return state;
  }
};
function isAddIt(item, itemDetail) {
  for (var i = 0; i < itemDetail.length; i++) {
    if (item.id === itemDetail[i].id) {
      return i;
    }
  }
  return -1;
}
