import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Cadastro extends React.Component {

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                >
                    <DialogTitle style={{ textAlign: 'center' }}>Cadastro</DialogTitle>
                    <DialogContent>
                        <TextField
                            margin="dense"
                            label="Nome Completo"
                            fullWidth
                        />
                        <TextField
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
                        <Button onClick={this.props.handleClose} variant="raised" color="primary">
                            Enviar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}