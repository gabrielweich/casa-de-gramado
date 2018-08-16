import React from 'react'

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import titleImage from '../images/6.jpg'
import './Gesiel/styles.css'
import Login from '../components/Login'
import Cadastro from '../components/Cadastro'

export default class Home extends React.Component {
    state = {
        login: false,
        cadastro: false
    }

    handleReservar = () => {
        this.setState({ login: true })
    }

    handleCloseLogin = () => {
        this.setState({ login: false })
    }

    handleLoginToCadastro = (e) => {
        e.preventDefault();
        this.setState({ login: false, cadastro: true })
    }

    handleCloseCadastro = () => {
        this.setState({ cadastro: false })
    }

    render() {
        return (
            <div>
                <Login
                    open={this.state.login}
                    handleClose={this.handleCloseLogin}
                    handleCadastro={this.handleLoginToCadastro} />

                <Cadastro
                    open={this.state.cadastro}
                    handleClose={this.handleCloseCadastro} />

                <div style={{ position:'relative', textAlign: 'center'}}>
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