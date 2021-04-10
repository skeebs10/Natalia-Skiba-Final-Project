import { RegisterConstants } from "../actions/constants";
import Axios from "axios";

export const Registers = (user1) => {
    return async (dispatch) => {
    dispatch({ type: RegisterConstants.RegisterRequest });
    await Axios.post("/register", { ...user1 })
        .then((res) => {
        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
            type: RegisterConstants.RegisterSuccess,
            payload: {
                message,
            },
                });
            } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: RegisterConstants.RegisterFailure,
            payload: {
                message,
            },
            });
        }
        })
        .catch((error) => {});
    };
};
