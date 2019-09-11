import { stockMovement,stockMovementDownload ,stockStatus} from "../api";


export function stockMovementAction (info){
    const data = stockMovement (info).then (res=>res.data.report[0])
    console.log(data,")))))))))))))))))))))))))")
    return{
        type:"REPORT_STOCK_MOVEMENT",
        payload:data
    }
}
export function stockMovementDownloadAction (info){
    const data = stockMovementDownload (info).then (res=>res.data)
    console.log(data)
    return{
        type:"DOWNLOAD_REPORT",
        payload:data
    }
}
export function stockStatusAction (info){
    const data = stockStatus (info).then (res=>res.data.report)
    return{
        type:"REPORT_STOCK_STATUS",
        payload:data
    }
}
