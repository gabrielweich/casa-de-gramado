import * as types from '../actions/types';

const initialState = {
    id: null,
    cadastroLoading: false,
    cadastroFail: null,
    loginLoading: false,
    loginFail: null
}

const cadastroStart = (state) => {
    return {
        ...state,
        cadastroLoading: true,
        cadastroError: false
    }
}

const cadastroFail = (state, error) => {
    return {
        ...state,
        cadastroLoading: false,
        cadastroError: error
    }
}

const cadastroSuccess = (state, id) => {
    return {
        ...state,
        cadastroLoading: false,
        id,
    }
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CADASTRO_START: return cadastroStart(state);
        case types.CADASTRO_FAIL: return cadastroFail(state, action.error)
        case types.CADASTRO_SUCCESS: return cadastroSuccess(state, action.id)
        default: return state;
    }
}

export default reducer;