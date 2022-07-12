import { GET__INFO } from "../redux__const";
import axios from "axios";
import { adminUrl, publicUrl } from "../../apis/apiUrl";
import { GET__ACCOUNTS } from "./../redux__const";
import swal from "sweetalert";
import { error__handler } from "../../utils/error__handler";

export const get__account__info__action = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`${publicUrl}account/username`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: GET__INFO,
        payload: res.data,
      });
    } catch (error) {
      error__handler(error);
    }
  };
};

export const get__accounts__action = () => {
  return async (dispatch) => {
    try {
      if (
        localStorage.getItem("expirationTimestamp") < Date.now() ||
        localStorage.getItem("token") === null
      ) {
        localStorage.clear();
        swal("", "Đăng Nhập hết hạn", "warning").then(() => {
          window.location.assign("/login");
        });
      }

      const res = await axios.get(`${adminUrl}account`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch({
        type: GET__ACCOUNTS,
        payload: res.data,
      });
    } catch (error) {
      error__handler(error);
    }
  };
};

export const active__account__action = (id) => {
  return async () => {
    try {
      await axios({
        method: "patch",
        url: `${adminUrl}account/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload();
    } catch (error) {
      error__handler(error);
    }
  };
};

export const disabled__account__action = (id) => {
  return async () => {
    try {
      await axios({
        method: "delete",
        url: `${adminUrl}account/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      window.location.reload();
    } catch (error) {
      error__handler(error);
    }
  };
};

export const save__account__action = (account) => {
  return async () => {
    try {
      await axios({
        method: "post",
        url: `${adminUrl}account`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: account,
      });
      window.location.reload();
    } catch (error) {
      error__handler(error);
    }
  };
};

export const update__info__acount__action = (account) => {
  return async () => {
    try {
      await axios({
        method: "patch",
        url: `${publicUrl}account/information`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: account,
      });
      window.location.reload();
    } catch (error) {
      error__handler(error);
    }
  };
};

export const request__active__account__action = () => {
  return async () => {
    try {
      const res = await axios({
        method: "post",
        url: `${publicUrl}account/request-active`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(res.data);
      localStorage.setItem("active-token", res.data);
    } catch (error) {
      error__handler(error);
    }
  };
};

export const active__local__account__action = (code) => {
  return async () => {
    try {
      await axios({
        method: "post",
        url: `${publicUrl}account/active`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          code: code,
          encryptString: localStorage.getItem("active-token"),
        },
      });
      swal("", "Kích hoạt thành công", "success").then(() => {
        localStorage.removeItem("active-token");
        window.location.reload();
      });
    } catch (error) {
      error__handler(error);
    }
  };
};
