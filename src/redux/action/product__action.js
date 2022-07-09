import axios from "axios"
import { adminUrl, publicUrl } from "../../apis/apiUrl";
import { GET__PRODUCT, GET__PRODUCTS } from "../redux__const";

export const get__products__action = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${adminUrl}product`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch({
                type: GET__PRODUCTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__product__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${adminUrl}product/detail/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch({
                type: GET__PRODUCT,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}



export const delete__product__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.delete(`${adminUrl}product/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

}

export const save__product__action = (data) => {
    return async (dispatch) => {
        try {
            const res = await axios.post(`${adminUrl}product`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }

}

export const update_product__action = (id, data) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`${adminUrl}product/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.assign("/product");
        } catch (error) {
            console.log(error);
        }
    }

}

export const get__public__product__by__rating__action = () => {
    return async (dispatch) => {
        try {
            const res = await 
            axios.get(`${publicUrl}product/rating`);
            dispatch({
                type: GET__PRODUCTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__public__product__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${publicUrl}product/detail/${id}`);
            dispatch({
                type: GET__PRODUCT,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__public__products__action = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${publicUrl}product`);
            dispatch({
                type: GET__PRODUCTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__public__product__by__cate__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${publicUrl}product/category/${id}`);
            dispatch({
                type: GET__PRODUCTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__public__product__by__brand__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${publicUrl}product/brand/${id}`);
            dispatch({
                type: GET__PRODUCTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}