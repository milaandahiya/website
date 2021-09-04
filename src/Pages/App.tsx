import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Resume from "./Resume";
import NotFound from "./NotFound";

function App() {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/resume' exact component={Resume} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
