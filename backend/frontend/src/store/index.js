import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import RootReducer from "../reducers/index";

const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(Thunk))
);

export default store;
