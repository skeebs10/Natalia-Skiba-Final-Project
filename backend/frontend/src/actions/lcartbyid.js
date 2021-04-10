import { GetlcartbyidConstants } from "../actions/constants";
import axios from "axios";
export const Getlcart = (Cid) => {
    return async (dispatch) => {
    dispatch({ type: GetlcartbyidConstants.GetlcartbyidRequest });
    await axios.get(`/lcartbyid/${Cid}`).then((res) => {
        if (res.status === 201) {
        const { item } = res.data;
        dispatch({
            type: GetlcartbyidConstants.GetlcartbyidSuccess,
            payload: {
            item,
            },
        });
        } else if (res.status === 200) {
        const { message } = res.data;
        dispatch({
            type: GetlcartbyidConstants.GetlcartbyidFailure,
            payload: {
            message,
            },
        });
        }
    });
    };
};
