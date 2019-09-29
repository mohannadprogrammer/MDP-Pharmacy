import React, { Component } from 'react'
import './lineChart.css'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'


class LineChartAPI extends Component {
    state = {
        
    }

    render() {
        const clears = [
            "red",
            "blue",
            "green",
            "gray"
        ];
        return (
            <div className="col-lg-12 card card-block card-type chart-card">

                <h4>{this.props.name}</h4>

                <LineChart width={1000} height={400} data={this.props.data}  margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                }}>
                    <XAxis dataKey="month" />
                    <YAxis/>
                    {
                        Object.keys(this.props.data[0]).map((object, index) =>
                            (object !== "month" ?
                                <Line type="monotone" dataKey={object} stroke={clears[index]} activeDot={{ r: 8 }} /> : null)

                        )
                    }

                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

                     <Tooltip />  
                     <Legend />
                </LineChart>
            </div>
        )
    }


}

export default LineChartAPI;