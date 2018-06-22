import css from "./index.css";
import scss from "./index.scss";
import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
class A extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  
        return (
            <h1>Component A</h1>
        );
    }
}
class B extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  
        return (
            <h1>Component b</h1>
        );
    }
}
class Tab extends React.Component{
    constructor(){
        super()
    }
    render() {
        return (
            <div>
                <Link to="/a">A组件</Link>
                <Link to="/a/123">A带参数组件</Link>                
                <Link to="/b">B组件</Link>
                <h1>{this.props.children}</h1>
            </div>
        )
    }
}
class App extends React.Component{
    constructor(){
        super()
    }
    componentWillMount()  {

    }
    componentDidMount() {

    }
    componentWillReceiveProps() {

    }
    componentWillUpdate() {

    }
    componentWillReceiveProps() {}

    render(){
        return (
            <div>
                <Title>
                    <span> children component !!! </span>
                </Title>
            </div> 
        );
    }
}
ReactDOM.render(
    <Router>
        <Tab>
            <Route path="/a" component={A} />
            <Route path="/b" component={B} />   
        </Tab>
    </Router>,
  document.getElementById("app")
);
