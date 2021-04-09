import { RemovenlitemConstants } from "../actions/constants";

const intialstate = {
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case RemovenlitemConstants.RemovenlitemRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case RemovenlitemConstants.RemovenlitemSuccess: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
        break;
    }
    case RemovenlitemConstants.RemovenlitemFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
    }
    }
    return state;
};
