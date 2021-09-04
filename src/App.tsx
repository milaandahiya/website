import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import NotFound from "./Pages/NotFound";

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
