import { getInvoiceDetails,rejectInvoice,addInvoice} from "../api";



export function getInvoiceDetailsAction (id){
    const data = getInvoiceDetails (id).then (res=>res.data.data)
    return{
        type:"GET_INVOICE_DETAILS",
        payload:data
    }
}

export async function rejectInvoiceAction (id){
    const data= await rejectInvoice(id).then(res=>res.data.data)
    
    return{
        type:"REGECT_INVOICE",
        payload:data
    }

}
export async function addInvoiceAction (bill){
    const data=await addInvoice(bill).then(res=>res.data.data)
    return{
        type:"ADD_INVOICE",
        payload:data
    }

}