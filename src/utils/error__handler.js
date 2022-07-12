import swal from "sweetalert";

export const error__handler = (error) => {
  console.log(error.response);
  const token = localStorage.getItem("token");
  console.log(error?.status !== 400);
  if (
    token === null
    && error?.response.status !== 400
    && error?.status !== 400
  ) {
    swal("", "Bạn chưa đăng nhập", "error").then(() => {
      window.location.href = "/login";
    });
    return;
  }
  if (error.response != undefined) {
    switch (error.response.status) {
      case 401:
        localStorage.removeItem("token");
        localStorage.removeItem("expirationTimestamp");
        swal(
          "",
          "Bạn chưa đăng nhập hoặc phiên đăng nhập đã hết hạn",
          "error"
        ).then(() => {
          window.location.href = "/login";
        });
        break;
      case 403:
        swal("", "Bạn không có quyền truy cập", "error").then(() => {
          window.location.href = "/";
        });
        break;
      case 404:
        swal("", "Không tìm thấy", "error");
        break;
      case 400:
        swal("", error.response.data.message, "error");
        break;
      case 500:
        swal("", "Lỗi server", "error");
        break;
    }
  }
};
