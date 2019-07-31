import React ,{Component} from "react"

//import css 
import './index.css'
class pgF extends Component{
    
    render(){
        return (
            <div className ="fluid">
                
                {this.props.children}
            </div>
        )
    }
}


export default pgF;