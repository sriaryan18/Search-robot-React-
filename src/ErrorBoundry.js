import React, { Component } from "react";


class ErrorBoundry extends Component{
constructor(props){
    super();
    this.state={
        hasError:false
    }
};

componentDidCatch(){
    this.setState({hasError:true});
}
    render(){
        if(this.props.hasError){
            return <h1>ERROR ENCOUNTERD</h1>
        }
       return this.props.children
    }
}
export default ErrorBoundry;