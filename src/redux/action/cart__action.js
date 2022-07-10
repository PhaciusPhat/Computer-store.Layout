import axios from "axios";
import { publicUrl } from './../../apis/apiUrl';
import { GET__CART } from './../redux__const';

export const add__cart__action = (data) => {
    return async () => {
        try {
            await axios
                ({
                    method: 'post',
                    url: `${publicUrl}cart`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    data: data
                })
        } catch (error) {
            console.log(error);
        }
    }
}

export const delete__cart__action = (id) => {
    return async () => {
        try {
            const data = [];
            data.push(id);
            await axios
                ({
                    method: 'delete',
                    url: `${publicUrl}cart`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    data: data
                })
                window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__cart__action = () => {
    return async (dispatch) => {
        try {
            const res = await axios
                ({
                    method: 'get',
                    url: `${publicUrl}cart`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
            dispatch({
                type: GET__CART,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}