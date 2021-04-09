import { GetlcartbyidConstants } from "../actions/constants";

const intialstate = {
    item: {
    user: "",
    cartItems: [
        {
        quantity: "",
        product: {
            name: "",
            productImage: [
            {
                _id: "",
                img: "",
            },
            ],
            price: "",
            category: "",
            description: "",
        },
        price: "",
        },
    ],
    },
    message: "",
    error: null,
    loading: false,
};

export default (state = intialstate, action) => {
    switch (action.type) {
    case GetlcartbyidConstants.GetlcartbyidRequest: {
        state = {
        ...state,
        loading: true,
        };
        break;
    }
    case GetlcartbyidConstants.GetlcartbyidSuccess: {
        state = {
        ...state,
        item: action.payload.item,
        loading: false,
        };
        break;
    }
    case GetlcartbyidConstants.GetlcartbyidFailure: {
        state = {
        ...state,
        message: action.payload.message,
        loading: false,
        };
    }
    }
    return state;
};
