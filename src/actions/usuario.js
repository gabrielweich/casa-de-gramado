import * as types from './types'
import axios from '../axios-manuel'

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
    dispatch(cadastroStart());
    try {
        const res = await axios.post('/cadastra', usuario)
        dispatch(cadatroSuccess(res.id_usuario));
    }
    catch (error) {
        dispatch(cadastroFail(error))
    }
}