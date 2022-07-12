import { GET__ACCOUNT, GET__INFO } from "../redux__const"
import { GET__ACCOUNTS } from './../redux__const';

const initialState = {
    localAccount: {},
    accounts: [],
    account: {}
}

const account__reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET__INFO:
            state.localAccount = payload;
            return { ...state }

        case GET__ACCOUNTS: 
            state.accounts = payload;
            return { ...state }

        case GET__ACCOUNT:
            state.account = payload;
            return { ...state }

        default:
            return state
    }
}

export default account__reducer;