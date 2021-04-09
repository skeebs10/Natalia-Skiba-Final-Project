import { OrderLoginConstants } from "../actions/constants";

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
    case OrderLoginConstants.OrderLoginRequest: {
        state = {
        ...state,
        authenticating: true,
        };
        break;
    }
    case OrderLoginConstants.OrderLoginSuccess: {
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
    case OrderLoginConstants.OrderLoginFailure: {
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
