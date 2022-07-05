import { combineReducers } from "redux";
import account__reducer from './account__reducer';
import order__reducer from './order__reducer';

const root__reducer = combineReducers({
    account__reducer,
    order__reducer
})

export default root__reducer;
