import { GET__INFO } from "../redux__const";
import axios from 'axios';
import { publicUrl } from "../../apis/apiUrl";

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