import { LoginConstants } from "../actions/constants";
import Axios from "axios";

export const Logins = (user) => {
    return async (dispatch) => {
    dispatch({ type: LoginConstants.LoginRequest });
    await Axios.post("http://localhost:8080/login", { ...user })
        .then((res) => {
        if (res.status === 201) {
            const { token, user, message } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            dispatch({
            type: LoginConstants.LoginSuccess,
            payload: {
                token,
                user,
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: LoginConstants.LoginFailure,
            payload: {
                message,
            },
            });
        }
        })
        .catch((error) => {});
    };
};
