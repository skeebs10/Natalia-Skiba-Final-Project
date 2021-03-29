import { RemovelitemConstants } from "../actions/constants";
import axios from "axios";
export const removelitem = (item) => {
    return async (dispatch) => {
    dispatch({ type: RemovelitemConstants.RemovelitemRequest });
    await axios
        .post("http://localhost:8080/deletelItem", { ...item })
        .then((res) => {
        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
            type: RemovelitemConstants.RemovelitemSuccess,
            payload: {
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: RemovelitemConstants.RemovelitemFailure,
            payload: {
                message,
            },
            });
        }
        });
    };
};
