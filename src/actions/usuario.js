import * as types from './types'
import axios from '../axios'

const cadastroStart = () => {
    return {
        type: types.CADASTRO_START
    }
}

const cadastroFail = (error) => {
    return {
        type: types.CADASTRO_FAIL,
        error,
    }
}

const cadatroSuccess = (id) => {
    return {
        type: types.CADASTRO_SUCCESS,
        id,
    }
}

export const cadastro = (usuario) => async dispatch => {
    usuario.senha = parseInt(usuario.senha)
    console.log(usuario)
    dispatch(cadastroStart());
    try {
        const res = await axios.post('/cadastra', usuario)
        dispatch(cadatroSuccess(res.id_usuario));
    }
    catch (error) {
        dispatch(cadastroFail(error))
    }
}




const loginStart = () => {
    return {
        type: types.LOGIN_START
    }
}

const loginFail = (error) => {
    return {
        type: types.LOGIN_FAIL,
        error,
    }
}

const loginSuccess = (id) => {
    return {
        type: types.LOGIN_SUCCESS,
        id,
    }
}

export const login = (email, senha) => async dispatch => {
    dispatch(loginStart())
    const data = {
        senha: parseInt(senha),
        email
    }
    try {
        const res = await axios.post('/login', data)
        console.log(res)
        dispatch(loginSuccess(res.id_usuario));
    }
    catch (error) {
        dispatch(loginFail(error))
    }
}