import { ProductbyIdConstants } from "../actions/constants";

const intialstate = {
    product: {
    name: "",
    productImage: [],
    price: "",
    description: "",
    benefits: "",
    specs: "",
    },
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case ProductbyIdConstants.ProductbyIdRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case ProductbyIdConstants.ProductbyIdSuccess: {
        state = {
        ...state,
        product: action.payload.product,
        loading: false,
        };
        break;
    }
    case ProductbyIdConstants.ProductbyIdFailure: {
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
