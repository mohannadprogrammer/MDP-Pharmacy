import { getInvoiceDetails,disposeInvoice,sale} from "../api";



export function getInvoiceDetailsAction (id){
    const data = getInvoiceDetails (id).then (res=>res.data.data)
    return{
        type:"GET_INVOICE_DETAILS",
        payload:data
    }
}

export async function disposeInvoiceAction (id){
    const data= await disposeInvoice(id).then(res=>res.data.data)
    
    return{
        type:"DISPOSE_INVOICE",
        payload:data
    }

}
export async function addInvoice (bill){
    const data=await sale(bill).then(res=>res.data.data)
    return{
        type:"ADD_INVOICE",
        payload:data
    }

}