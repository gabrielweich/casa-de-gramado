import * as types from '../actions/types';

const initialState = {
    reservarLoading: false,
    reservarFail: null,
    idReserva: null,
    datasReservadasLoading: false,
    datasReservadasFail: null,
    datasReservadas: new Set(),
    minhasReservasLoading: false,
    minhasReservasFail: null,
    minhasReservas: [],
}


const reservarStart = (state) => {
    return {
        ...state,
        reservarLoading: true,
        reservarFail: false
    }
}

const reservarFail = (state, error) => {
    return {
        ...state,
        reservarLoading: false,
        reservarFail: error
    }
}

const reservarSuccess = (state, idReserva) => {
    return {
        ...state,
        reservarLoading: false,
        idReserva,
    }
}



const datasReservadasStart = (state) => {
    return {
        ...state,
        datasReservadasLoading: true,
        datasReservadasFailr: false
    }
}

const datasReservadasFail = (state, error) => {
    return {
        ...state,
        datasReservadasLoading: false,
        datasReservadasFail: error
    }
}

const datasReservadasSuccess = (state, datasReservadas) => {
    return {
        ...state,
        datasReservadasLoading: false,
        datasReservadas: new Set(datasReservadas),
    }
}




const minhasReservasStart = (state) => {
    return {
        ...state,
        minhasReservasLoading: true,
        minhasReservasFail: null
    }
}

const minhasReservasFail = (state, error) => {
    return {
        ...state,
        minhasReservasLoading: false,
        minhasReservasFail: error
    }
}

const minhasReservasSuccess = (state, minhasReservas) => {
    return {
        ...state,
        minhasReservasLoading: false,
        minhasReservas,
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESERVAR_START: return reservarStart(state);
        case types.RESERVAR_FAIL: return reservarFail(state, action.error)
        case types.RESERVAR_SUCCESS: return reservarSuccess(state, action.idReserva)
        case types.DATAS_RESERVADAS_START: return datasReservadasStart(state);
        case types.DATAS_RESERVADAS_FAIL: return datasReservadasFail(state, action.error)
        case types.DATAS_RESERVADAS_SUCCESS: return datasReservadasSuccess(state, action.datasReservadas)
        case types.MINHAS_RESERVAS_START: return minhasReservasStart(state);
        case types.MINHAS_RESERVAS_FAIL: return minhasReservasFail(state, action.error)
        case types.MINHAS_RESERVAS_SUCCESS: return minhasReservasSuccess(state, action.minhasReservas)
        default: return state;
    }
}

export default reducer;