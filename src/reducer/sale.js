import { isEmptyOrSpaces } from "builder-util";

export const sales = (state ={
    requist:{
        transtype: "sale",
        itemsDetail: [],
        storeid: 0,
        discount: 0
    }
}, action) => {
    switch (action.type) {
        case "GET_ITEM_TO_SALE":
            if(action.payload.id)
                {
                    let index =isAddIt(action.payload,state.requist.itemsDetail);
                    console.log('index =',index)
                    if(index==-1)
                        {state.requist.itemsDetail.push({...action.payload,quantity:1})}
                    else
                       { state.requist.itemsDetail[index].quantity++;}
                } 
            else
                {alert("not found")}
            return { ...state  }
        case "DELETE_FROM_ITEMSDETAILS":
            state.requist.itemsDetail.pop(action.payload)
            return state
        case "SALE":
            return state
        default:
            return state
    }
}
function isAddIt(item,itemDetail){
    
    for(var i=0;i<itemDetail.length;i++){
      if(item.id===itemDetail[i].id){
        return i;
      }
    }
    return -1;
}