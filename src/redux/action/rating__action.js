import axios from "axios"
import { adminUrl, publicUrl } from "../../apis/apiUrl";
import { error__handler } from './../../utils/error__handler';


export const add__rating__action = (data) => {
    return async () => {
        try {
            
            const res = await axios.post(`${publicUrl}rating`, 
            data, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();
        } catch (error) {
            error__handler(error)
        }
    }
}


export const delete__rating__action = (id) => {
    return async () => {
        try {
            const res = await axios.delete(`${publicUrl}rating/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            });
            window.location.reload();
        } catch (error) {
            error__handler(error)
        }
    }
}