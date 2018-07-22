import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './login.css'

export default class Login extends React.Component {

    render() {
        return (
            <div>
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
                        />
                        <TextField
                            id="password-input"
                            label="Senha"
                            type="password"
                            autoComplete="current-password"
                            margin="dense"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <div style={{ margin: 0, padding: 0, justifyContent: 'row' }}>

                            <p>
                                Ainda não tem uma conta? 
                                <a href="" onClick={(e) => this.props.handleCadastro(e)} className="disabled" style={{ float: 'right', marginLeft: 5 }}>
                                    Cadastre-se aqui
                                </a>
                            </p>


                        </div>

                        <Button onClick={this.props.handleClose} variant="raised" color="primary">
                            Entrar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}