import { getInvoiceDetails,disposeInvoice} from "../api";


export function getInvoiceDetailsAction (id){
    const data = getInvoiceDetails (id).then (res=>res.data.data)
    console.log(data)
    return{
        type:"GET_INVOICE_DETAILS",
        payload:data
    }
}

export function disposeInvoiceAction (id){
    console.log(id)
    const data=disposeInvoice(id).then(res=>res.data.data)
    console.log(data)
    return{
        type:"DISPOSE_INVOICE",
        payload:data
    }

}