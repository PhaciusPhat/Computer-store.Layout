import { GET__BRAND, GET__BRANDS } from "../redux__const";

const initialState = {
    brands: [],
    brand: {}
}

const brand__reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET__BRANDS:
            state.brands = payload;
            return { ...state };

        case GET__BRAND:
            state.brand = payload;
            return { ...state };

        default:
            return state
    }
}

export default brand__reducer