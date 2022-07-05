import { GET__INFO } from "../redux__const"

const initialState = {
    localAccount: {},
    Accounts: [],
    Account: {}
}

const account__reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET__INFO:
            state.localAccount = payload;
            return { ...state }

        default:
            return state
    }
}

export default account__reducer;