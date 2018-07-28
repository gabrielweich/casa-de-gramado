import * as types from '../actions/types';

const initialState = {
    reservarLoading: false,
    reservarFail: null,
    idReserva: null
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
        reservarError: error
    }
}

const reservarSuccess = (state, idReserva) => {
    return {
        ...state,
        reservarLoading: false,
        idReserva,
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.RESERVAR_START: return reservarStart(state);
        case types.RESERVAR_FAIL: return reservarFail(state, action.error)
        case types.RESERVAR_SUCCESS: return reservarSuccess(state, action.idReserva)
        default: return state;
    }
}

export default reducer;