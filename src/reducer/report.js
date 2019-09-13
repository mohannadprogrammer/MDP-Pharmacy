 export const report = (
  state = {
    stockmovement: { storeid: "", storename: "", invoices: [] },
    stockStatus:[ ],
  },
  action
) => {
  switch (action.type) {
    case "REPORT_STOCK_MOVEMENT":
      console.log(action.payload, "---------------------");
      return{ ...state, stockmovement: action.payload };
      case "REPORT_STOCK_STATUS":
      console.log(action.payload, "---------------------");
      return{ ...state, stockStatus: action.payload };
    case "DOWNLOAD_REPORT":
      return state;
    default:
      return state;
  }
};
