import { AddtocartConstants } from "../actions/constants";

const intialstate = {
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case AddtocartConstants.AddtocartRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case AddtocartConstants.AddtocartSuccess: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
        break;
    }
    case AddtocartConstants.AddtocartFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
    }
    }
    return state;
};
