import axios from 'axios';
import { adminUrl } from "../../apis/apiUrl";
import { GET__CATEGORIES, GET__CATEGORY } from './../redux__const';

export const get__categories__action = () => {
    return async (dispatch) => {
        try {
            const res = await
                axios.get(`${adminUrl}category/`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
            dispatch({
                type: GET__CATEGORIES,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__category__action = (id) => {
    return async (dispatch) => {
        try {
            const res = await
                axios.get(`${adminUrl}category/detail/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
            dispatch({
                type: GET__CATEGORY,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const update__category__action = (id, data) => {
    return async () => {
        try {
            await
                axios.put(`${adminUrl}category/${id}`, data,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
            window.location.assign("/cate")    
        } catch (error) {
            console.log(error);
        }
    }
}

export const delete__category__action = (id) => {
    return async () => {
        try {
            await
                axios.delete(`${adminUrl}category/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}

export const save__category__action = (data) => {
    return async () => {
        try {
            await
                axios.post(`${adminUrl}category/`,
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
                window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}