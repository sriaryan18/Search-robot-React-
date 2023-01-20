import React, { Component } from "react";
import SearchBox from './SearchBox.js' 
import CardList from "./CardList";
// import { robots } from "./robots.js";
import Scroll from './Scroll'
import './App.css'


class App extends Component{
    constructor(){
        super()
        this.state={
            robots:[],
            searchField:''
           
        }
        // console.log("cons")
    }
    componentDidMount(){
        // this.setState({robots:robots})
        // console.log("cdm")
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=> res.json())
       .then(users=> this.setState({robots:users}))
        // console.log(this.robots+"rb")

    }
    
    onsearchChange=(event)=>{
                this.setState({searchField: event.target.value})
    }

    render(){
        const filteredRobo=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        // console.log("render")
        // console.log(this.state.robots);
        return (
            <div className="tc">
                <h1 className="f2"> ROBOT FRIENDS</h1>
                <SearchBox searchChange={this.onsearchChange}/>
                <Scroll>
                <CardList robots={filteredRobo}/>
                </Scroll>
              
            </div>
            
        );
    }
    
}
export default App;