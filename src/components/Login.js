import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import { connect } from 'react-redux'
import { Redirect } from 'react-router'

import * as actions from '../actions/usuario'

class Login extends React.Component {
    state = {
        email: '',
        senha: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleEntrar = () => {
        const { email, senha } = this.state
        this.props.logar(email, senha)
    }

    render() {
        return (
            <div>
                {this.props.isAuthenticated && this.props.open && <Redirect to="/reservas" />}
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle style={{ textAlign: 'center' }}>Login</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Email"
                            type="email"
                            fullWidth
                            onChange={this.handleChange('email')}
                        />
                        <TextField
                            id="password-input"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            margin="dense"
                            fullWidth
                            onChange={this.handleChange('senha')}
                        />
                    </DialogContent>
                    <DialogActions style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ margin: 0, padding: 0, justifyContent: 'row' }}>

                            <p>
                                Ainda não tem uma conta?
                                <a href="" onClick={(e) => this.props.handleCadastro(e)} style={{ float: 'right', marginLeft: 5 }}>
                                    Cadastre-se aqui
                                </a>
                            </p>


                        </div>

                        {this.props.loading
                            ? <CircularProgress/>
                            : <Button onClick={this.handleEntrar} variant="raised" color="primary">
                                Entrar
                              </Button>
                        }
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        loading: state.usuario.loginLoading,
        error: state.usuario.loginError,
        isAuthenticated: Boolean(state.usuario.id)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        logar: (email, senha) => dispatch(actions.login(email, senha))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login);
