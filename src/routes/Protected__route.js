import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import swal from 'sweetalert';


const Protected__route = () => {

    const dispatch = useDispatch();

    const token = localStorage.getItem("token");
    const expirationTimestamp = localStorage.getItem("expirationTimestamp");

    const navigate__to__route = () => {
        if (token) {
            return <Outlet />;
        } else {
            swal("", "Bạn chưa đăng nhập", "error").then(() => {
                window.location.assign("/login");
            });
        }
    };

    // useEffect(() => {
    //   dispatch(get__info__action());
    // }, [dispatch]);

    return <>{navigate__to__route()}</>;
};

export default Protected__route