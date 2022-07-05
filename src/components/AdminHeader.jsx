import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get__account__info__action } from '../redux/action/account__action';

function AdminHeader() {

    const dispatch = useDispatch();
    const account =
        useSelector(state => state.account__reducer.localAccount);
    useEffect(() => {
        dispatch(get__account__info__action());
    }, [dispatch]);


    const renderDropdown = () => {
        if (account) {
            return <>
                <button type="button" className="btn btn-sm dropdown-toggle text-white"
                    data-toggle="dropdown">Xin Chào {account.name}</button>
                <div className="dropdown-menu dropdown-menu-right">
                    <a href="dangnhap.html" className="dropdown-item">Đăng Xuất</a>
                </div>
            </>
        }
    }

    return (
        <>
            < div className="container-fluid bg-dark" >
                <div className="row align-items-center py-3 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-4">
                        <a href="/" className="text-decoration-none">
                            <span className="h1 text-uppercase text-primary bg-dark px-2">405</span>
                            <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">Shop</span>
                        </a>
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






