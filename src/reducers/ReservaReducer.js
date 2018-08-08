import * as types from '../actions/types';

const initialState = {
    reservarLoading: false,
    reservarFail: null,
    idReserva: null,
    datasReservadasLoading: false,
    datasReservadasFail: null,
    datasReservadas: new Set(),
    idReserva: null,
}


const reservarStart = (state) => {
    return {
        ...state,
        reservarLoading: true,
        reservarError: false
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
        datasReservadasError: false
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


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESERVAR_START: return reservarStart(state);
        case types.RESERVAR_FAIL: return reservarFail(state, action.error)
        case types.RESERVAR_SUCCESS: return reservarSuccess(state, action.idReserva)
        case types.DATAS_RESERVADAS_START: return datasReservadasStart(state);
        case types.DATAS_RESERVADAS_FAIL: return datasReservadasFail(state, action.error)
        case types.DATAS_RESERVADAS_SUCCESS: return datasReservadasSuccess(state, action.datasReservadas)
        default: return state;
    }
}

export default reducer;