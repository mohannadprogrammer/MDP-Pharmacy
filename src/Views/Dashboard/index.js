import React, { Component } from 'react';
import Dashboard from '../../hoc/Dashboard'
import SummaryCard from '../../components/Summary/summaryCard'
import LineChart from '../../components/LineChart/lineChart'
class index extends Component {
    render() {
        const users =[{
            mohannad: "2",
            ali: "1",
            khaled: "3",
            marwan: "4",
            month: "1"
        }, {
            mohannad: "4",
            ali: "14",
            month: "2", khaled: "31",
            marwan: "2",

        }, {
            mohannad: "11",
            month: "3",
            khaled: "133",
            marwan: "11222",
            ali: "27",
        }, {
            mohannad: "10",
            ali: "88",
            month: "4",
            khaled: "14",
            marwan: "44",

        }, {
            mohannad: "122",
            ali: "100",
            month: "5", khaled: "12",
            marwan: "22",

        }

        ];
        const stores=[{
            omdurman: "222",
            bahry: "2221",
            khartoum: "2223",
            month: "1"
        }, {
            omdurman: "224",
            bahry: "1224",
            khartoum: "3221",
            month: "22", 

        }, {
            omdurman: "1221",
            month: "23",
            bahry: "12333",
            khartoum: "112222"
        }, {
            omdurman: "120",
            bahry: "82",
            khartoum: "314",
            month: "4",

        }, {
            omdurman: "1422",
            bahry: "188",
             khartoum: "122",
             month: "5",

        }

        ]
        return (
            <div>
                <Dashboard>
                <div className="row">
                    <SummaryCard data={ {value:"2",typeName:"Total Items"}} type="3"/>
                    <SummaryCard data={ {value:"3",typeName:"Total Supliers"}} type="1"/>
                    <SummaryCard data={ {value:"44",typeName:"Daily Sales"}} type="2"/>
                    <SummaryCard data={ {value:"12",typeName:"Daily Burchase"}} type="4"/>
                </div>
                <div className="row">
                    <div className="col" >  <LineChart name ="Stores progress" data={stores}/></div>
                    <div className="col" ><LineChart name ="User progress" data ={users}/></div>
                </div>
                </Dashboard>
            </div>
        );
    }
}

export default index;