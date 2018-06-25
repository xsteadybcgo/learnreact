import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import {BrowserRouter as Router, Link, Route, Switch, Redirect} from "react-router-dom";
import Home from "pages/home/index.jsx"
import Layout from "component/layout/index.jsx"

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  
        return (
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" component={Home} />
                        <Redirect from="*" to="/" />
                    </Switch>
                </Layout>
            </Router>
        )
    }
}
ReactDOM.render(
    <App />,  
    document.getElementById("app")
);
