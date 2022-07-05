import { GET__ORDER, GET__ORDERS, GET__USER__ORDER, GET__USER__ORDERS } from './../redux__const';

const initialState = {
    localAccountOrders: {},
    localAccountOrder: [],
    orders: {},
    order: [],
}

const order__reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET__ORDERS:
            state.orders = payload;
            return { ...state }

        case GET__ORDER:
            state.order = payload;
            return { ...state }

        case GET__USER__ORDERS:
            state.localAccountOrders = payload;
            return { ...state }

        case GET__USER__ORDER:
            state.localAccountOrder = payload;
            return { ...state }

        default:
            return state
    }
}

export default order__reducer;
