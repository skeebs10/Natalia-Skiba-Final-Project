import { GetnlcartbyidConstants } from "../actions/constants";
import axios from "axios";
export const Getnlcart = (Cid) => {
    return async (dispatch) => {
    dispatch({ type: GetnlcartbyidConstants.GetnlcartbyidRequest });
    await axios.get(`http://localhost:8080/nlcartbyid/${Cid}`).then((res) => {
        if (res.status === 201) {
        const { item } = res.data;
        dispatch({
            type: GetnlcartbyidConstants.GetnlcartbyidSuccess,
            payload: {
            item,
            },
        });
        } else if (res.status === 200) {
        const { message } = res.data;
        dispatch({
            type: GetnlcartbyidConstants.GetnlcartbyidFailure,
            payload: {
            message,
            },
        });
        }
    });
    };
};
