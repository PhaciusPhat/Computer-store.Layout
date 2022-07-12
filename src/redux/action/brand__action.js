import axios from "axios"
import { adminUrl, publicUrl } from "../../apis/apiUrl";
import { error__handler } from "../../utils/error__handler";
import { GET__BRAND, GET__BRANDS } from "../redux__const";

export const get__brands__action = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${adminUrl}brand/`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch({
                type: GET__BRANDS,
                payload: res.data
            });
        } catch (error) {
            error__handler(error);
        }
    }
}

export const get__brand__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${adminUrl}brand/detail/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            dispatch({
                type: GET__BRAND,
                payload: res.data
            });
        } catch (error) {
            error__handler(error);
        }
    }
}

export const delete__brand__action = (id) => {
    return async (dispatch) => {
        try {
            await axios.delete(`${adminUrl}brand/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();
        } catch (error) {
            error__handler(error);
        }
    }

}

export const update_brand__action = (id, data) => {
    return async (dispatch) => {
        try {
            await axios.put(`${adminUrl}brand/${id}`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.assign("/brand");
        } catch (error) {
            error__handler(error);
        }
    }
}

export const save__brand__action = (data) => {
    return async () => {
        try {
            await axios.post(`${adminUrl}brand/`, data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();
        } catch (error) {
            error__handler(error);
        }
    }

}

export const get__public__brands__action = () => {
    return async (dispatch) => {
        try {
            const res = await axios.get(`${publicUrl}brand`);
            dispatch({
                type: GET__BRANDS,
                payload: res.data
            });
        } catch (error) {
            error__handler(error);
        }
    }
}