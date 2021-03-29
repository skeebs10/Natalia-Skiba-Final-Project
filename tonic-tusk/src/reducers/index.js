import { combineReducers } from "redux";
import addtocartReducer from "./addtocartReducer";
import allproductsReducer from "./allproductsReducer";
import loginReducer from "./loginReducer";
import productbyidReducer from "./productbyidReducer";
import userReducer from "./userReducer";
import addtologincartReducer from "./addtologincartReducer";
import lcartbyidReducer from "./lcartbyidReducer";
import nlcartbyidReducer from "./nlcartbyidReducer";
import removelitemReducer from "./removelitemReducer";
import removenlitemReducer from "./removenlitemReducer";

const RootReducer = combineReducers({
    user: userReducer,
    auth: loginReducer,
    allP: allproductsReducer,
    PbyID: productbyidReducer,
    AddtoC: addtocartReducer,
    AddtolC: addtologincartReducer,
    nlCart: nlcartbyidReducer,
    lCart: lcartbyidReducer,
    Removenl: removenlitemReducer,
    Remvovel: removelitemReducer,
});

export default RootReducer;
