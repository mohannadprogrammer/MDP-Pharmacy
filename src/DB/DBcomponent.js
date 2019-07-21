import React from 'react'
import getData from './connect'

export default class printdata extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        getData((data) => {
            this.setState({ data })
        })
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}