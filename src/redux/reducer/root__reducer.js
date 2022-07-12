import { combineReducers } from "redux";
import account__reducer from './account__reducer';
import order__reducer from './order__reducer';
import category__reducer from './category__reducer';
import brand__reducer from './brand__reducer';
import product__reducer from './product__reducer';
import cart__reducer from './cart__reducer';

const root__reducer = combineReducers({
    account__reducer,
    order__reducer,
    category__reducer,
    brand__reducer,
    product__reducer,
    cart__reducer,
})

export default root__reducer;
