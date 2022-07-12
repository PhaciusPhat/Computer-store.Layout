import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Protected__route = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const expirationTimestamp = localStorage.getItem("expirationTimestamp");

  const navigate__to__route = () => {
    if (token != null && Date.now() < expirationTimestamp) {
      return <Outlet />;
    } else {
      swal("", "Bạn chưa đăng nhập", "error").then(() => {
        navigate("/login");
      });
    }
  };

  // useEffect(() => {
  //   dispatch(get__info__action());
  // }, [dispatch]);

  return <>{navigate__to__route()}</>;
};

export default Protected__route;
