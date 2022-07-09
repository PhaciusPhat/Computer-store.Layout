import axios from "axios"
import swal from "sweetalert";
import { authUrl } from "../../apis/apiUrl"

export const login__actions = (loginRequest) => {
    return async () => {
        try {
            const res = await axios.post(`${authUrl}login`, loginRequest);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("expirationTimestamp", res.data.expirationTimestamp);
            swal("", "Đăng Nhập Thành Công", "success").then(() => {
                window.location.assign("/");
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const regis__actions = (regisRequest) => {
    return async () => {
        try {
            await axios.post(`${authUrl}regis`, regisRequest);
            swal("", "Đăng Ký Thành Công", "success").then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export const admin__logout__action = () => {
    return async () => {
        localStorage.clear();
        window.location.assign("/admin-login");
    }
}

export const logout__action = () => {
    return async () => {
        localStorage.clear();
        window.location.assign("/login");
    }
}