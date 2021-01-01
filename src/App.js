import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import SentimentOutput from "./components/sentiment-data.component";
import InsertItem from "./components/insert-item.component"

class App extends Component{
    // console.log(props.itemName)

    // state = {
    //     name: {}
    // };
    //
    // onSubmit = name => {
    //     this.setState({ name })
    //     // console.log('App comp got ' , fields)
    // }
    render() {
        return (
            <Router >
                <div className = "container" >
                    <Navbar/>
                    <br/> <br/>
                    <Route path="/" exact component={InsertItem} />
                    <Route path="/dashboard" component={SentimentOutput}/>
                </div>
            </Router >
        );
    }

}

export default App;
