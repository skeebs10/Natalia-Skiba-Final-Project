import { RemovelitemConstants } from "../actions/constants";

const intialstate = {
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case RemovelitemConstants.RemovelitemRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case RemovelitemConstants.RemovelitemSuccess: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
        break;
    }
    case RemovelitemConstants.RemovelitemFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
    }
    }
    return state;
};
