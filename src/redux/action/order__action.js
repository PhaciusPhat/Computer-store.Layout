import axios from "axios";
import { adminUrl, publicUrl } from "../../apis/apiUrl";
import { GET__ORDER, GET__ORDERS } from "../redux__const";
import swal from "sweetalert";

export const get__orders__action = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${adminUrl}order/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: GET__ORDERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const approve__order__action = (id) => {
  return async () => {
    try {
      console.log(`${adminUrl}order/status/approve/${id}`);
      await axios({
        method: "put",
        url: `${adminUrl}order/status/approve/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const reject__order__action = (id) => {
  return async () => {
    try {
      await axios({
        method: "put",
        url: `${adminUrl}order/status/reject/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
};

export const get__order__action = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${adminUrl}order/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: GET__ORDER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const get__public__orders__action = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${publicUrl}order/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: GET__ORDERS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const get__public__order__action = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${publicUrl}order/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: GET__ORDER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const save__order__action = (data) => {
  return async () => {
    try {
      await axios({
        method: "post",
        url: `${publicUrl}order`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: data,
      });
      swal("", "Đặt hàng thành công", "success").then(() => {
        window.location.assign("/public/account");
      });
    } catch (error) {
      console.log(error);
    }
  };
};
