import { ProductbyIdConstants } from "./constants";

import Axios from "axios";
export const ProductById = (PId) => {
    return async (dispatch) => {
    dispatch({ type: ProductbyIdConstants.ProductbyIdRequest });
    await Axios.get(`/productbyId/${PId}`).then((res) => {
        const { product } = res.data;
        if (res.status === 201) {
        dispatch({
            type: ProductbyIdConstants.ProductbyIdSuccess,
            payload: {
            product,
            },
        });
        } else if (res.status === 200) {
        const { message } = res.data;
        dispatch({
            type: ProductbyIdConstants.ProductbyIdFailure,
            payload: {
            message,
            },
        });
        }
    });
    };
};
