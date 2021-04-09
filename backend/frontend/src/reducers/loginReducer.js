import { LoginConstants } from "../actions/constants";

const initialstate = {
    user: {
    name: "",
    email: "",
    _id: "",
    },
    token: "",
    message: "",
    error: null,
    authenticating: false,
    authenticated: false,
};

export default (state = initialstate, action) => {
    switch (action.type) {
    case LoginConstants.LoginRequest: {
        state = {
        ...state,
        authenticating: true,
        };
        break;
    }
    case LoginConstants.LoginSuccess: {
        state = {
        ...state,
        authenticating: false,
        authenticated: true,
        message: action.payload.message,
        user: action.payload.user,
        token: action.payload.token,
        };
        break;
    }
    case LoginConstants.LoginFailure: {
        state = {
        ...state,
        authenticating: false,
        authenticated: false,
        message: action.payload.message,
        };
    }
    }
    return state;
};
