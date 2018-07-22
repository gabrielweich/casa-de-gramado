import React from 'react'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MaskedInput from 'react-text-mask'

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            mask={['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
        />
    );
}

export default class Cadastro extends React.Component {
    state = {
        textmask: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

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
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
                            <Input
                                margin="dense"
                                fullWidth
                                value={this.state.textmask}
                                onChange={this.handleChange('textmask')}
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                            />
                        </FormControl>
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
                        <TextField
                            margin="dense"
                            label="Código de verificação"
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