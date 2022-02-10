import { combineReducers } from "redux";
import CartReducer from "./Cart/CartReducer";
import productReducer from "./Product/ProductReducer";

const rootReducer = combineReducers({
    products: productReducer,
    carts: CartReducer
})

export default rootReducer