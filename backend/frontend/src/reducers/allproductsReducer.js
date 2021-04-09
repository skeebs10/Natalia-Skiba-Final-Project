import { AllProductConstants } from "../actions/constants";

const intialstate = {
    products: [],
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case AllProductConstants.AllProductRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case AllProductConstants.AllProductSuccess: {
        state = {
        ...state,
        products: action.payload.products,
        loading: false,
        };
        break;
    }
    case AllProductConstants.AllProductFailure: {
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
