import * as types from '../actions/types';

const initialState = {
    id: 1,
    cadastroLoading: false,
    cadastroFail: null,
    loginLoading: false,
    loginFail: null,
}

const cadastroStart = (state) => {
    return {
        ...state,
        cadastroLoading: true,
        cadastroFail: null
    }
}

const cadastroFail = (state, error) => {
    return {
        ...state,
        cadastroLoading: false,
        cadastroFail: error
    }
}

const cadastroSuccess = (state, id) => {
    return {
        ...state,
        cadastroLoading: false,
        id,
    }
}



const loginStart = (state) => {
    return {
        ...state,
        loginLoading: true,
        loginFail: null
    }
}

const loginFail = (state, error) => {
    return {
        ...state,
        loginLoading: false,
        loginFail: error
    }
}

const loginSuccess = (state, id) => {
    return {
        ...state,
        loginLoading: false,
        id,
    }
}

const logout = (state) => {
    return {
        ...state,
        id: null
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CADASTRO_START: return cadastroStart(state);
        case types.CADASTRO_FAIL: return cadastroFail(state, action.error)
        case types.CADASTRO_SUCCESS: return cadastroSuccess(state, action.id)
        case types.LOGIN_START: return loginStart(state);
        case types.LOGIN_FAIL: return loginFail(state, action.error)
        case types.LOGIN_SUCCESS: return loginSuccess(state, action.id)
        case types.LOGOUT: return logout(state)
        default: return state;
    }
}

export default reducer;