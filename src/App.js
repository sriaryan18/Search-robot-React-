import React, { useState,useEffect } from "react";
import SearchBox from './SearchBox.js' 
import CardList from "./CardList";
// import { robots } from "./robots.js";
import Scroll from './Scroll'
import './App.css'
import ErrorBoundry from './ErrorBoundry';


function App(){
    // constructor(){
    //     super()
    //     this.state={
    //         robots:[],
    //         searchField:''
           
    //     }
    //     // console.log("cons")
    // }
    // componentDidMount(){
    //     // this.setState({robots:robots})
    //     // console.log("cdm")
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //    .then(res=> res.json())
    //    .then(users=> this.setState({robots:users}))
    //     // console.log(this.robots+"rb")

    // }

    const [robots,setRobots]=useState([]);
    const [searchField,setSearchField]=useState('')
    const onsearchChange=(event)=>{
                setSearchField(event.target.value)
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=> res.json())
       .then(users=> setRobots(users))
    //    console.log(robots,searchField);
    },[]);

   
        const filteredRobo=robots.filter(robots =>{
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        // console.log("render")
        // console.log(this.state.robots);
       
        return robots.length===0?<h1>Loading the robots</h1>:
        <div className="tc">
            <h1 className="f2"> ROBOT FRIENDS</h1>
            <SearchBox searchChange={onsearchChange}/>
            <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredRobo}/>
                </ErrorBoundry>
            
            </Scroll>
            
        </div>
            
    }
    
export default App;