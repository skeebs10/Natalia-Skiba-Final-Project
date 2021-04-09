import { RegisterConstants } from "../actions/constants";

const initialstate = {
    message: "",
    error: null,
    loading: false,
};

export default (state = initialstate, action) => {
    switch (action.type) {
    case RegisterConstants.RegisterRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case RegisterConstants.RegisterSuccess: {
        state = {
        ...state,
        loading: false,
        message: action.payload.message,
        };
        break;
    }
    case RegisterConstants.RegisterFailure: {
        state = {
        ...state,
        loading: false,
        message: action.payload.message,
        };
    }
    }
    return state;
};
