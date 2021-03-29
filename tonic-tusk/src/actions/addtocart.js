import { AddtocartConstants } from "../actions/constants";
import axios from "axios";
export const AddtonlCart = (item) => {
    return async (dispatch) => {
    dispatch({ type: AddtocartConstants.AddtocartRequest });
    await axios
        .post("http://localhost:8080/addtonlcart", { ...item })
        .then((res) => {
        if (res.status === 201) {
            const { message } = res.data;
            dispatch({
            type: AddtocartConstants.AddtocartSuccess,
            payload: {
                message,
            },
            });
        } else if (res.status === 200) {
            const { message } = res.data;
            dispatch({
            type: AddtocartConstants.AddtocartFailure,
            payload: {
                message,
            },
            });
        }
        });
    };
};
