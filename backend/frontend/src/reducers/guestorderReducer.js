import { GuestOrderConstants } from "../actions/constants";

const intialstate = {
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case GuestOrderConstants.GuestOrderRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case GuestOrderConstants.GuestOrderSuccess: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
        break;
    }
    case GuestOrderConstants.GuestOrderFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
    }
    }
    return state;
};
