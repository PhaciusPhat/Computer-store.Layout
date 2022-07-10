import { GET__CART } from './../redux__const';



const initialState = {

    cartItems: []
}

const cart__reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET__CART:
            state.cartItems = payload;
            return { ...state }

        default:
            return state
    }
}
export default cart__reducer;
