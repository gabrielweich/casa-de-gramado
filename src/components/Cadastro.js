import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Input from '@material-ui/core/Input';
import MaskedInput from 'react-text-mask'

import { connect } from 'react-redux';

import * as actions from '../actions/usuario'

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

class Cadastro extends React.Component {
    state = {
        nome: '',
        telefone: '',
        email: '',
        senha: '',
        codigo: '',
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleEnviar = () => {
        console.log(this.state)
        const { nome, telefone, email, senha, codigo } = this.state
        const usuario = {
            nome,
            telefone,
            email,
            senha,
            codigo
        }

        console.log(usuario)
        this.props.cadastrar(usuario)
    }

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
                            onChange={this.handleChange('nome')}
                        />
                        <FormControl fullWidth margin="dense">
                            <InputLabel htmlFor="formatted-text-mask-input">Telefone</InputLabel>
                            <Input
                                margin="dense"
                                fullWidth
                                value={this.state.telefone}
                                onChange={this.handleChange('telefone')}
                                id="formatted-text-mask-input"
                                inputComponent={TextMaskCustom}
                            />
                        </FormControl>
                        <TextField
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
                        <TextField
                            margin="dense"
                            label="Código de verificação"
                            fullWidth
                            onChange={this.handleChange('codigo')}
                        />
                    </DialogContent>
                    <DialogActions style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        {this.props.loading
                            ? <CircularProgress/>
                            : <Button onClick={this.handleEnviar} variant="raised" color="primary">
                                Enviar
                              </Button>
                        }
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.usuario.cadastroLoading,
        error: state.usuario.cadastroError
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        cadastrar: (usuario) => dispatch(actions.cadastro(usuario))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);