import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import { render } from "react-dom";
// import InsertItem from "./insert-item.component";
import { Link } from 'react-router-dom'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import "../App.css";
// import template from "../charts.components/template";
import Dashboard from "../charts.components/Dashboard.js";
import dataProcessing, {
    overallItem,
    featureOne,
    featureTwo,
    featureThree
} from "../charts.components/dataProcessing";

const Items = props =>
    <tr>
        <td> { props.item._id } </td>
        <td> { props.item.item } </td>
        <td> { props.item.positive } </td>
        <td> { props.item.negative } </td>
    </tr>
// )

// class name : this.props
export default class SentimentOutput extends Component {
    constructor(props){
        super(props);
        // console.log(this.props.itemname)

        this.state = {
            name: '',
            items: [],
            selectedItem: {}
        };
    }

    onSubmit = name => {
        this.setState({ name })
            // console.log('App comp got ' , name)
    }




    componentDidMount(props) {
        const selectedItemName = this.props.name
        console.log('in sentiment data', this.props.name)
            // url which is node output the data
        axios.get('https://malindu-fas.herokuapp.com/')

        .then(response => {
            // filtering
            const outputArrayObject = response.data
            const filteredArray = outputArrayObject.find(nameOfItem => nameOfItem.item === selectedItemName)
            console.log(filteredArray)

            this.setState({
                items: response.data,
                selectedItem: filteredArray
            })
            console.log(this.state.selectedItem.positive)

        })

        // .then(function (response){
        //     return response.json()
        //     })
        // .then(function(myJson) {
        //     console.log(myJson)
        // })

        .catch((error) => {
            console.log(error);
        })

        dataProcessing();
        this.copyDataSeries();
    }

    sentimentDataList() {
        return this.state.items.map(currentItems => {
            return <Items item = { currentItems }
            key = { currentItems._id }
            />;
        })
    }

    // highChart() {
    //     return <Highcharts highcharts={Highcharts} options={options}/>
    // }


    // dashboard code
    // state = template;

    copyDataSeries = (obj = {}) => {
        this.setState({
            charts: [
                { serie: overallItem, title: `Overall ${this.props.name}`},
                { serie: featureOne, title: `I phone 7 :Battery` },
                { serie: featureTwo, title: `I phone 7: Display` },
                { serie: featureThree, title: `Gender` }
            ]
        });
    };
    // componentDidMount() {
    //
    // }




    render(props) {
        var pos = parseInt(this.state.selectedItem.positive)
        var neg = parseInt(this.state.selectedItem.negative)

        // var batteryPos = parseInt(this.state.selectedItem.features.battery.positive)
        // var batteryNeg = parseInt(this.state.selectedItem.features.battery.negative)
        //
        // var displayPos = parseInt(this.state.selectedItem.features.display.positive)
        // var displayNeg = parseInt(this.state.selectedItem.features.display.negative)



        const itemOptions = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: "pie"
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    },
                    colors: [
                        '#FFC154',
                        '#47B39C'
                    ]
                }
            },
            series: [{
                name: 'Sentiment',
                colorByPoint: true,
                data: [{
                        name: 'Positive',
                        y: pos
                    },
                    {
                        name: 'Negative',
                        y: neg
                    }
                ]
            }],
            title: {
                text: `Sentiment Analyzed data of ${this.props.name}`
            }
        };

        // const batteryOptions = {
        //     chart: {
        //         plotBackgroundColor: null,
        //         plotBorderWidth: null,
        //         plotShadow: false,
        //         type: "pie"
        //     },
        //     tooltip: {
        //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        //     },
        //     plotOptions: {
        //         pie: {
        //             allowPointSelect: true,
        //             cursor: 'pointer',
        //             dataLabels: {
        //                 enabled: true,
        //                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        //             },
        //             colors: [
        //                 '#FFC154',
        //                 '#4D3683'
        //             ]
        //         }
        //     },
        //     series: [{
        //         name: 'Sentiment',
        //         colorByPoint: true,
        //         data: [{
        //                 name: 'Positive',
        //                 y: 44
        //             },
        //             {
        //                 name: 'Negative',
        //                 y: 56
        //             }
        //         ]
        //     }],
        //     title: {
        //         text: `Sentiment Analyzed data of ${this.props.name}`
        //     }
        // };

        // const displayOptions = {
        //     chart: {
        //         plotBackgroundColor: null,
        //         plotBorderWidth: null,
        //         plotShadow: false,
        //         type: "pie",
        //     },
        //     credits: {
        //         enabled: false
        //     },
        //     exporting: {
        //         enabled: false
        //     },
        //     tooltip: {
        //         pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        //     },
        //     plotOptions: {
        //         pie: {
        //             allowPointSelect: true,
        //             cursor: 'pointer',
        //             dataLabels: {
        //                 enabled: true,
        //                 format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        //             },
        //             colors: [
        //                 '#830A68',
        //                 '#238B6D'
        //             ]
        //         }
        //     },
        //     series: [{
        //         name: 'Sentiment',
        //         colorByPoint: true,
        //         data: [{
        //                 name: 'Positive',
        //                 y: 56
        //             },
        //             {
        //                 name: 'Negative',
        //                 y: 44
        //             }
        //         ]
        //     }],
        //     title: {
        //         text: `Sentiment Analyzed data of ${this.props.name}`
        //     }
        // };

        // const chartsStyle = {
        //     display: "flex",
        //     margin: "10px"
        //
        // }


        return (
            <div>
            <br/>
            <h3> Analyzed Feedback Report </h3>
            <table className = "table" >
                <thead className = "thead-light" >
                <tr>
                    <th> ID </th>
                    <th> Item </th>
                    <th> Positive </th>
                    <th> Negative </th>
                </tr>
                </thead>
                <tbody>{ this.sentimentDataList() }</tbody>
            </table >
            <br/>
            <h4> Item name: { this.props.name } </h4>
            <br/> { /*<InsertItem onSubmit={name => this.onSubmit(name)}/>*/ }
            <p> Selected Item data: </p>
            <p> { JSON.stringify(this.state.selectedItem, null, 2) } </p>
            <br/> <br/>
            <hr/>
            <HighchartsReact highcharts = { Highcharts }
            options = { itemOptions }
            />
            <br/>
            <hr/>
            <div className = "row" >
                <HighchartsReact className = "col-md-6"
                highcharts = { Highcharts }
                // options = { batteryOptions }
                />
                <HighchartsReact className = "col-md-6"
                // highcharts = { Highcharts }
                // options = { displayOptions }
                />
            </div>
            <hr/>
                {/*<Link*/}
                {/*    to={{*/}
                {/*        pathname: ".",*/}
                {/*        data: data // your data array of objects*/}
                {/*    }}*/}
                {/*/>*/}


                <div className="container bg-light">
                    <h1 className="text-center mt-5">Feedback Analysis System</h1>
                    <p className="text-center">Ebay</p>
                </div>
                <div className="container  mb-5 pb-3 bg-light">
                    <Dashboard
                        // userConfig={this.state.userConfig}
                        charts={this.state.charts}
                    />
                </div>


            <div className = "row" >
                <h3> footer </h3>
            </div>


            </div>
        )
    }
}
// render(<SentimentOutput />, document.getElementById("root"));
