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
import guestorderReducer from "./guestorderReducer";
import orderLoginReducer from "./orderLoginReducer";
import searchReducer from "./searchReducer";

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
    GuestO: guestorderReducer,
    orderL: orderLoginReducer,
    searchit: searchReducer,
});

export default RootReducer;
