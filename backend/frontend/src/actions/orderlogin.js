import { OrderLoginConstants } from "../actions/constants";
import Axios from "axios";

export const orderLogin = (user) => {
    return async (dispatch) => {
    dispatch({ type: OrderLoginConstants.OrderLoginRequest });
    await Axios.post("http://localhost:8000/guestorderlogin", { ...user })
        .then((res) => {
        if (res.status === 201) {
            const { token, user, message } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
            type: OrderLoginConstants.OrderLoginSuccess,
            payload: {
                token,
                user,
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: OrderLoginConstants.OrderLoginFailure,
            payload: {
                message,
            },
            });
        }
        })
        .catch((error) => {});
    };
};
