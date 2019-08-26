import React from "react"
import './summaryCard.css'

class SummaryCard extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props.data)
    }
   
    state={
        type:this.props.type,
        
    }
    render() {
        return (
            <div className="col-xl-3 col-md-6">
                <div className={this.state.type==="1" ?
                    "card green-card"
                    : this.state.type==="2"? "card orange-card":
                    this.state.type==="3"?"card red-card":"card blue-card"
                    } >
                    <div className="card-block">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="card-value">{this.props.data.value}</h1>
                                <p className="card-type">{this.props.data.typeName}</p>
                            </div>
                            <div className="col-4">
                                
                            </div>
                        </div>
                    </div>
                    <div className="card-footer">
                    <p>update {this.props.data.time}</p>
                    
                    </div>
                </div>
            </div>
        )
    }
}


export default SummaryCard;