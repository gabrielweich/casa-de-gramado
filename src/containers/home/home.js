import React from 'react'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import titleImage from '../../images/6.jpg'
import './home.css'
import Login from '../login/login'
import Register from '../register/register'

export default class Home extends React.Component {
    state = {
        login: false,
        register: false
    }

    handleReservar = () => {
        this.setState({ login: true })
    }

    handleCloseLogin = () => {
        this.setState({ login: false })
    }

    handleLoginToRegister = (e) => {
        e.preventDefault();
        this.setState({ login: false, register: true })
    }

    handleCloseRegister = () => {
        this.setState({ register: false })
    }

    render() {
        return (
            <div>
                <Login
                    open={this.state.login}
                    handleClose={this.handleCloseLogin}
                    handleRegister={this.handleLoginToRegister} />

                <Register
                    open={this.state.register}
                    handleClose={this.handleCloseRegister} />

                <div className="title-container">
                    <div className="title-text">Casa de Gramado</div>
                    <img className="title-image" src={titleImage} />
                    <Button
                        style={{ backgroundColor: "#729050", borderRadius: 35 }}
                        size="large"
                        className="title-button"
                        variant="raised"
                        color="primary"
                        onClick={this.handleReservar}>
                        RESERVAR
                    </Button>
                </div>
                <div>
                    <Grid container spacing={24}>
                        <Grid className="resource-unit" item xs={12} sm={4}>
                            <Paper >xs=6 sm=3</Paper>
                        </Grid>
                        <Grid className="resource-unit" item xs={12} sm={4}>
                            <Paper >xs=6 sm=3</Paper>
                        </Grid>
                        <Grid className="resource-unit" item xs={12} sm={4}>
                            <Paper >xs=6 sm=3</Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}