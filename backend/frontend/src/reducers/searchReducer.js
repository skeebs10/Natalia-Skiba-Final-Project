import { SearchConstants } from "../actions/constants";

const intialstate = {
    products: [],
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case SearchConstants.SearchRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case SearchConstants.SearchSuccess: {
        state = {
        ...state,
        products: action.payload.products,
        loading: false,
        };
        break;
    }
    case SearchConstants.SearchFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
        break;
    }
    }
    return state;
};
