import * as types from './types'
import axios from '../axios'

import moment from 'moment'

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



const datasReservadasStart = () => {
    return {
        type: types.DATAS_RESERVADAS_START
    }
}

const datasReservadasFail = (error) => {
    return {
        type: types.DATAS_RESERVADAS_FAIL,
        error,
    }
}

const datasReservadasSuccess = (datasReservadas) => {
    return {
        type: types.DATAS_RESERVADAS_SUCCESS,
        datasReservadas,
    }
}

export const reservar = (idUsuario, inicio, fim) => async dispatch => {
    dispatch(reservarStart())
    const data = {
        'id_usuario': idUsuario,
        'data_checkin': inicio,
        'data_checkout': fim,
    }
    console.log(data)
    try {
        const res = await axios.post('/reserva', data)
        console.log("embaixo")
        console.log(res)
        dispatch(datasReservadas())
        dispatch(reservarSuccess(res.data.id_reserva));
    }
    catch (error) {
        dispatch(reservarFail(error))
    }
}




export const datasReservadas = () => async dispatch => {
    try{
        dispatch(datasReservadasStart())
        const res = await axios.get('/datasreservadas')
        console.log(res)
        const datas = res.data.datas.map(d => moment(d).locale("en").utcOffset(900).format("DD/MM/YYYY"))
        dispatch(datasReservadasSuccess(datas))
    }
    catch (error) {
        dispatch(datasReservadasFail(error))
        console.log(error)
    }
}