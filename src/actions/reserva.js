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
        dispatch(minhasReservas(idUsuario))
        dispatch(reservarSuccess(res.data.id_reserva));
    }
    catch (error) {
        dispatch(reservarFail(error))
    }
}




export const datasReservadas = () => async dispatch => {
    try {
        dispatch(datasReservadasStart())
        const res = await axios.get('/datasreservadas')
        console.log(res)
        const datas = res.data.datas.map(d => moment(d).locale("en").utcOffset(0).format("DD/MM/YYYY"))
        dispatch(datasReservadasSuccess(datas))
    }
    catch (error) {
        dispatch(datasReservadasFail(error))
        console.log(error)
    }
}



const minhasReservasStart = () => {
    return {
        type: types.MINHAS_RESERVAS_START
    }
}

const minhasReservasFail = (error) => {
    return {
        type: types.MINHAS_RESERVAS_FAIL,
        error,
    }
}

const minhasReservasSuccess = (minhasReservas) => {
    return {
        type: types.MINHAS_RESERVAS_SUCCESS,
        minhasReservas,
    }
}


export const minhasReservas = (idUsuario) => async dispatch => {
    try {
        dispatch(minhasReservasStart())
        const reservas = await axios.post('/getreservas', {'id_usuario': idUsuario})
        const datas = [...reservas.data.reservas['1'].map(r => [moment(r[0]), moment(r[1])])].sort((a,b) => b[0] - a[0])
        dispatch(minhasReservasSuccess(datas.map(d => [d[0].utcOffset(0).format("DD/MM/YYYY"), d[1].utcOffset(0).format("DD/MM/YYYY")])))
    }
    catch (error) {
        dispatch(minhasReservasFail(error))
        console.log(error)
    }
}