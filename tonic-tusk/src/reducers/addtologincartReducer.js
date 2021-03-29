import { AddtoLogincartConstants } from "../actions/constants";

const intialstate = {
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case AddtoLogincartConstants.AddtoLogincartRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case AddtoLogincartConstants.AddtoLogincartSuccess: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
        break;
    }
    case AddtoLogincartConstants.AddtoLogincartFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
    }
    }
    return state;
};
