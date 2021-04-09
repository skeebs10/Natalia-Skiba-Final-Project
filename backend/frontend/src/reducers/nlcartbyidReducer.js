import { GetnlcartbyidConstants } from "../actions/constants";

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
    case GetnlcartbyidConstants.GetnlcartbyidRequest: {
      state = {
        ...state,
        loading: true,
      };
      break;
    }
    case GetnlcartbyidConstants.GetnlcartbyidSuccess: {
      state = {
        ...state,
        item: action.payload.item,
        loading: false,
      };
      break;
    }
    case GetnlcartbyidConstants.GetnlcartbyidFailure: {
      state = {
        ...state,
        message: action.payload.message,
        loading: false,
      };
    }
  }
  return state;
};
