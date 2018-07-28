import * as types from './types'
import axios from '../axios'



const reservarStart = () => {
    return {
        type: types.RESERVAR_START
    }
}

const reservarFail = (error) => {
    return {
        type: types.RESERVAR_FAIL,
        error,
    }
}

const reservarSuccess = (idReserva) => {
    return {
        type: types.RESERVAR_SUCCESS,
        idReserva,
    }
}

export const reservar = (idUsuario, inicio, fim) => async dispatch => {
    dispatch(reservarStart())
    const data = {
        'id_usuario': idUsuario,
        'data_checkin': inicio,
        'data_checkout': fim,
        'valor': 100,
        'valor_final': 90,
        'desconto': 10
    }
    
    console.log(data)
    try {
        const res = await axios.post('/reserva', data)
        console.log(res)
        dispatch(reservarSuccess(res.id_reserva));
    }
    catch (error) {
        dispatch(reservarFail(error))
    }
}