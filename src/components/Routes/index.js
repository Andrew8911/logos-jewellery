import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


const Routes = () => {

    return (
        <Router>
            <Switch>
                <Route
                    path="/"
                    exact
                    component=""
                />
                      
            </Switch>
        </Router>
    );
}

export default Routes;
