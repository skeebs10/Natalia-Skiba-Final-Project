import { GuestOrderConstants } from "../actions/constants";
import axios from "axios";
export const Guestorder = (items) => {
    return async (dispatch) => {
    dispatch({ type: GuestOrderConstants.GuestOrderRequest });
    await axios
        .post("http://localhost:8000/guestorder", { ...items })
        .then((res) => {
        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
            type: GuestOrderConstants.GuestOrderSuccess,
            payload: {
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: GuestOrderConstants.GuestOrderFailure,
            payload: {
                message,
            },
            });
        }
        });
    };
};
