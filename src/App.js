import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

import Home from './screens/Home';
import Reservas from './screens/Reservas'


class App extends Component {
    render() {
        let routes = (
            <Switch>
                <Route path="/" exact component={Home} />
                <Redirect to="/" />
            </Switch>
        );

        if (this.props.isAuthenticated) {
            routes = (
                <Switch>
                    <Route path="/reservas" component={Reservas} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/" />
                </Switch>
            );
        }
        return (
            <div>
                {routes}
            </div >
        );
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
        isAuthenticated: true,
    }
}



export default withRouter(connect(mapStateToProps)(App));