import { stockMovement,stockMovementDownload ,stockStatus ,stockStatusDownload} from "../api";
import FileSaver from 'file-saver';

export function stockMovementAction (info){
    const data = stockMovement (info).then (res=>res.data.report[0])
    console.log(data,")))))))))))))))))))))))))")
    return{
        type:"REPORT_STOCK_MOVEMENT",
        payload:data
    }
}
export function stockMovementDownloadAction (info){
    const data = stockMovementDownload (info).then (res=>{
    console.log(res.data,"_________________++___+_+_+_+_+")
    
    
      FileSaver.saveAs(
        new Blob([res.data], { type: 'application/pdf' }),
        `MovementReport.pdf`
      );
    
        return res.data})
    
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
export function stockStatustDownloadAction (info){
    const data = stockStatusDownload (info).then (res=>{
      FileSaver.saveAs(
        new Blob([res.data], { type: 'application/pdf' }),
        `StatusReport.pdf`
      );
    
        return res.data})
    
    return{
        type:"DOWNLOAD_REPORT",
        payload:data
    }
}