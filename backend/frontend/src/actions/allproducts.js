import { AllProductConstants } from "../actions/constants";

import Axios from "axios";
export const AllProduct = () => {
    return async (dispatch) => {
    dispatch({ type: AllProductConstants.AllProductRequest });
    await Axios.get("/allproducts").then((res) => {
        const { products } = res.data;
        if (res.status === 201) {
        dispatch({
            type: AllProductConstants.AllProductSuccess,
            payload: {
            products,
            },
        });
        } else if (res.status === 200) {
        const { message } = res.data;
        dispatch({
            type: AllProductConstants.AllProductFailure,
            payload: {
            message,
            },
        });
        }
    });
    };
};
