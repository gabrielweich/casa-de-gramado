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
    usuario = {...usuario, telefone: usuario.telefone.replace(/[(\s)]/g, '')}
    console.log(usuario)
    dispatch(cadastroStart());
    try {
        const res = await axios.post('/cadastra', usuario)
        console.log(res)
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
    try {
        const res = await axios.post('/login', {email, senha})
        dispatch(loginSuccess(res.data.id_usuario));
    }
    catch (error) {
        dispatch(loginFail(error))
    }
}

export const logout = () => {
    return {
        type: types.LOGOUT
    }
}




