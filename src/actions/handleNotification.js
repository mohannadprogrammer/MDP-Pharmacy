import {getAllNot,addInvoice}from "../api"

export function getNotification2Handle(){
    let data =getAllNot().then((res)=>res.data.data)
    return{
        type:"GET_NOTIFICATION",
        payload:data
    }
}

export function dispose(item , storeid ){
    let request = {
        type:"dispose",
        itemsDetail:{id:item.id , quantity:1,batch:item.batch},
        storeid:44
    }

     console.log("dispose ", request)
    let data =addInvoice(request).then(res=>res)
    console.log("dispose 33", data)
    
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