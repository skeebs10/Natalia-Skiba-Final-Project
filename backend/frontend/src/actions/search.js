import { SearchConstants } from "./constants";

import Axios from "axios";
export const Searchs = (query) => {
    return async (dispatch) => {
    dispatch({ type: SearchConstants.SearchRequest });
    await Axios.get(`http://localhost:8000/searchproducts?query=${query}`).then(
        (res) => {
        const { products } = res.data;
        if (res.status === 201) {
            dispatch({
            type: SearchConstants.SearchSuccess,
            payload: {
                products,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: SearchConstants.SearchFailure,
            payload: {
                message,
            },
            });
        }
        }
    );
    };
};
import { SearchConstants } from "./constants";

import Axios from "axios";
export const Searchs = (query) => {
    return async (dispatch) => {
    dispatch({ type: SearchConstants.SearchRequest });
    await Axios.get(`http://localhost:8000/searchproducts?query=${query}`).then(
        (res) => {
        const { products } = res.data;
        if (res.status === 201) {
            dispatch({
            type: SearchConstants.SearchSuccess,
            payload: {
                products,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: SearchConstants.SearchFailure,
            payload: {
                message,
            },
            });
        }
        }
    );
    };
};
