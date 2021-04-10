import { RemovenlitemConstants } from "../actions/constants";
import axios from "axios";
export const removenlitem = (item) => {
    return async (dispatch) => {
    dispatch({ type: RemovenlitemConstants.RemovenlitemRequest });
    await axios
        .post("/deletenlItem", { ...item })
        .then((res) => {
        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
            type: RemovenlitemConstants.RemovenlitemSuccess,
            payload: {
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: RemovenlitemConstants.RemovenlitemFailure,
            payload: {
                message,
            },
            });
        }
        });
    };
};
