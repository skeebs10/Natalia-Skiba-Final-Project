import { AddtoLogincartConstants } from "../actions/constants";
import axios from "axios";
export const AddtolCart = (item) => {
    return async (dispatch) => {
    dispatch({ type: AddtoLogincartConstants.AddtoLogincartRequest });
    await axios
        .post("http://localhost:8000/addtolcart", { ...item })
        .then((res) => {
        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
            type: AddtoLogincartConstants.AddtoLogincartSuccess,
            payload: {
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: AddtoLogincartConstants.AddtoLogincartFailure,
            payload: {
                message,
            },
            });
        }
        });
    };
};
