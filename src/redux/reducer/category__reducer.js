import { GET__CATEGORIES, GET__CATEGORY } from './../redux__const';
const initialState = {

    categories: [],
    category: {}

}

const category__reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case GET__CATEGORIES:
            state.categories = payload;
            return { ...state }
        case GET__CATEGORY:
            state.category = payload;
            return { ...state }


        default:
            return state
    }
}
export default category__reducer