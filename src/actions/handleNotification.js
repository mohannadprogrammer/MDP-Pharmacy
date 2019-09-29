import {}from "../api"

export function getNotification2Handle(){
    return{
        type:"GET_NOTIFICATION",
        payload:""
    }
}

export function dispose(item , storeid ){
    let request = {
        type:"dispose",
        itemsDetail:{item},
        storeid
    }
    // console.log("dispose ", item)
    
    return{
        type:"DISPOSE",
        payload:""
    }
}

export function addNotificationItem(item){
    console.log("add ", item)
    return{
        type:"ADD_NOTIFICATION_ITEM",
        payload:""
    }
}