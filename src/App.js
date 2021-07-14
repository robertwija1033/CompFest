import React from "react";
import Register from "./components/Register/Register";
import Homes from "./components/Home/Home";
import Appointment from "./components/Appointment/Appointment";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homes} />
                <Route exact path="/Appointment" component={Appointment} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    );
}

export default App;