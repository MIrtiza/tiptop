import React from 'react'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './Login'
import Panel from './Panel'
const Navigation = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <Login /> </Route>
                <Route path="/panel"> <Panel /> </Route>
            </Switch>
        </Router>
    )
}

export default Navigation
