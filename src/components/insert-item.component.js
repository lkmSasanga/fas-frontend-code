import '../App.css';
import React from 'react';
// import Navbar from "./navbar.component";
// import axios from "axios";
// import ReactDOM from "react-dom";

import { Link } from 'react-router-dom'

import ItemNameOutput from './sentiment-data.component'

class InsertItem extends React.Component{
    constructor(props) {
        super(props);

        this.onChangeItemName = this.onChangeItemName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            itemName: '',
            // item: []
        }
    }

    onChangeItemName(e){
        e.preventDefault()
        console.log("target value:",e.target.value)

        this.setState({
            // [e.target.itemName]: e.target.value
            itemName: e.target.value

        })
    }

    onSubmit = (e) => {
        e.preventDefault();

        // this.props.onSubmit(this.state)
        console.log('on submit : ',this.state)

        const data = this.state
        console.log("Final data is : ",data)
        // this.setState({
        //     itemName: ''
        // })

        // this.props.history.push('/dashboard');

        return (<p>Item name is: {this.state.itemName}</p>)
    }

    componentDidMount() {
        this.setState({
            itemName: ''
        })
        return ( <ItemNameOutput name={this.state.itemName}/>)

    }

    // async componentDidMount(props) {
    //
    //     // url which is node output the data
    //     axios.get('http://localhost:5000/sentiment')
    //
    //         .then(response => {
    //             // filtering
    //             const outputArrayObject = response.data
    //             const filteredArray = outputArrayObject.find(nameOfItem => nameOfItem.item == this.props.itemName)
    //             console.log(filteredArray)
    //
    //             this.setState({
    //                 items: response.data
    //             })
    //         })
    //         .then(json => this.setState({ data: json }))
    //
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }

    runSentimentDataComponent(props) {
        const itemNameCheck = this.state.itemName
        if(itemNameCheck === 'tv' || itemNameCheck === 'phone' || itemNameCheck === 'laptop'){
            return <ItemNameOutput name={this.state.itemName}/>
        } else {
            // return <p>Enter 'tv' or 'phone'</p>
        }
    }

    render() {
        const itemName = this.state.itemName
        console.log(itemName)
        return (
            <div>
                <h3>Search Items</h3>
                <form onSubmit={this.onChangeItemName}>
                    <div className="form-group">
                        <label>Items available: tv, phone </label>
                        <input  type="text"
                                required
                                // autocomplete="off"
                                placeholder="Enter item Name"
                                name='itemName'
                                className="form-control"
                                defaultValue={this.state.itemName}
                                onChange={this.onChangeItemName}
                        />
                    </div>
                    <div className="form-group">


                        <Link to="/dashboard">
                            <input
                                type="submit"
                                value="Search"
                                className="btn btn-primary"
                                // onSubmit={this.onChangeUsername}
                                onClick={e => this.onSubmit(e)}
                            >
                            </input>
                        </Link>
                    </div>
                    {/*<p>Item name is: {this.state.itemName}</p>*/}

                    {/*<ItemNameOutput name={this.state.itemName}/>*/}
                    { this.runSentimentDataComponent() }

                    {/*{ this.componentDidMount() }*/}
                    {/*{this.onSubmit()}*/}
                </form>

            </div>
        )
    }
}
export default InsertItem;

