import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get__account__info__action } from '../redux/action/account__action';
import { Link } from 'react-router-dom';
import { logout__action, admin__logout__action } from './../redux/action/auth__action';

function AdminHeader() {

    const dispatch = useDispatch();
    const account =
        useSelector(state => state.account__reducer.localAccount);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(get__account__info__action());
        }
    }, [dispatch]);

    const renderDropdown = () => {
        if (account.username !== undefined) {
            return <>
                <button type="button" className="btn btn-sm dropdown-toggle text-white"
                    data-toggle="dropdown">Xin Chào {account.name}</button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button onClick={() => {
                        dispatch(admin__logout__action());
                    }}
                        className="dropdown-item">Đăng Xuất</button>
                </div>
            </>
        } else {
            return <>
                <button type="button" className="btn btn-sm dropdown-toggle text-white"
                    data-toggle="dropdown">Đăng nhập</button>
                <div className="dropdown-menu dropdown-menu-right">
                    <Link to="/login" className="dropdown-item">Đăng Nhập</Link>
                    <Link to="/regis" className="dropdown-item">Đăng Ký</Link>
                </div>
            </>
        }
    }

    return (
        <>
            < div className="container-fluid bg-dark" >
                <div className="row align-items-center py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <Link to="/order" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">405</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-6 text-left">
                    </div>
                    <div className="col-lg-4 col-6 text-right">
                        <div className="btn-group">
                            {renderDropdown()}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminHeader






