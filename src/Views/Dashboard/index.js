import React, { Component } from 'react';
import Dashboard from '../../hoc/Dashboard'
import SummaryCard from '../../components/Summary/summaryCard'
class index extends Component {
    render() {
        return (
            <div>
                <Dashboard>
                <div className="row">
                    <SummaryCard data={ {value:"",typeName:"mohannad"}} type="3"/>
                    <SummaryCard data={ {value:"",typeName:"mohannad"}} type="1"/>
                    </div>
                </Dashboard>
            </div>
        );
    }
}

export default index;