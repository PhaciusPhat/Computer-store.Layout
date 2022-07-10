import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { get__account__info__action } from '../redux/action/account__action';
import { logout__action } from '../redux/action/auth__action';
import { get__public__brands__action } from '../redux/action/brand__action';
import { get__public__cate__action } from '../redux/action/category__action';

function Header() {
    const dispatch = useDispatch();
    const account =
        useSelector(state => state.account__reducer.localAccount);
    const categories = useSelector(state => state.category__reducer.categories)
    useEffect(() => {
        dispatch(get__public__cate__action())
        dispatch(get__public__brands__action())
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(get__account__info__action());
        }
    }, [dispatch]);

    const renderDropdown = () => {
        if (account.username !== undefined) {
            return <>
                <button type="button" className="btn btn-sm dropdown-toggle"
                    data-toggle="dropdown">Xin Chào {account.name}</button>
                <div className="dropdown-menu dropdown-menu-right">
                    <button onClick={() => {
                        dispatch(logout__action());
                    }}
                        className="dropdown-item">Đăng Xuất</button>
                </div>
            </>
        } else {
            return <>
                <button type="button" className="btn btn-sm dropdown-toggle"
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
            <div>
                {/* Topbar Start */}
                <div className="container-fluid">
                    <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
                        <div className="col-lg-4">
                            <Link to="/" className="text-decoration-none">
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
                {/* Topbar End */}
                {/* Navbar Start */}
                <div className="container-fluid bg-dark mb-30">
                    <div className="row px-xl-5">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                                <a href className="text-decoration-none d-block d-lg-none">
                                    <span className="h1 text-uppercase text-dark bg-light px-2">405</span>
                                    <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">Shop</span>
                                </a>
                                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                    <span className="navbar-toggler-icon" />
                                </button>
                                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                    <div className="navbar-nav mr-auto py-0">
                                        <Link to="/" className="nav-item nav-link ">Trang chủ</Link>
                                        <Link to="/public/product" className="nav-item nav-link">Sản phẩm</Link>
                                        <Link to="/public/account" className="nav-item nav-link">Lịch sử đơn hàng</Link>
                                    </div>
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <Link to="/cart" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary" />
                                        </Link>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                {/* Navbar End */}
            </div>

        </>
    )
}

export default Header