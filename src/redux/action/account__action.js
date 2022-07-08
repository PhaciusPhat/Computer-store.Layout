import { GET__INFO } from "../redux__const";
import axios from 'axios';
import { adminUrl, publicUrl } from "../../apis/apiUrl";
import { GET__ACCOUNTS } from './../redux__const';
import swal from 'sweetalert';

export const get__account__info__action = () => {
    return async (dispatch) => {
        try {
            const res = await
                axios.get(`${publicUrl}account/username`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
            dispatch({
                type: GET__INFO,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const get__accounts__action = () => {
    return async (dispatch) => {
        try {
            if(localStorage.getItem('expirationTimestamp') < Date.now() 
            || localStorage.getItem('token') === null) {
                localStorage.clear();
                swal("", "Đăng Nhập hết hạn", "warning").then(() => {
                    window.location.assign("/login");
                })
            }



            const res = await
                axios.get(`${adminUrl}account`,
                    {
                        headers: {
                            Authorization: `Bearer ${localStorage.getItem("token")}`
                        }
                    }
                );
            dispatch({
                type: GET__ACCOUNTS,
                payload: res.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const active__account__action = (id) => {
    return async () => {
        try {
            await axios
                ({
                    method: 'patch',
                    url: `${adminUrl}account/${id}`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}

export const disabled__account__action = (id) => {
    return async () => {
        try {
            await axios
                ({
                    method: 'delete',
                    url: `${adminUrl}account/${id}`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}

export const save__account__action = (account) => {
    return async () => {
        try {
            await axios
                ({
                    method: 'post',
                    url: `${adminUrl}account`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    },
                    data: account
                })
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
}