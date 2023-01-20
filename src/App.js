import React, { Component } from "react";
import SearchBox from './SearchBox.js' 
import CardList from "./CardList";
import { robots } from "./robots.js";
import './App.css'

// const state={
//     'robots':robots,
//     'searchField':''
// }

class App extends Component{
    constructor(){
        super()
        this.state={
            robots:robots,
            searchField:''
           
        }
    }
    
    onsearchChange=(event)=>{
                this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobo=this.state.robots.filter(robots =>{
            return robots.Name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f2"> ROBOT FRIENDS</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <CardList robots={filteredRobo}/>
              
            </div>
            
        );
    }
    
}
export default App;