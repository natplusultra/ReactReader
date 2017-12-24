import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Search from "./components/Search";
import Saved from "./components/Saved";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Navbar />
                    <Main>
                        <Switch>
                            <Route exact path="/" component={Search} />
                            <Route exact path="/Saved" component={Saved} />
                        </Switch>
                    </Main>
                </div>
            </Router>
        );
    }
}

export default App;