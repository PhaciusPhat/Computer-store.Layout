import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
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
                                <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Tài khoản</button>
                                <div className="dropdown-menu dropdown-menu-right">
                                    <Link to="/regis" className="dropdown-item">Đăng Ký</Link>
                                    <Link to="/login" className="dropdown-item">Đăng Nhập</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Topbar End */}
                {/* Navbar Start */}
                <div className="container-fluid bg-dark mb-30">
                    <div className="row px-xl-5">
                        <div className="col-lg-3 d-none d-lg-block">
                            <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{ height: 65, padding: '0 30px' }}>
                                <h6 className="text-dark m-0"><i className="fa fa-bars mr-2" />Danh mục</h6>
                                <i className="fa fa-angle-down text-dark" />
                            </a>
                            <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{ width: 'calc(100% - 30px)', zIndex: 999 }}>
                                <div className="navbar-nav w-100">
                                    <a href className="nav-item nav-link">Điện Thoại</a>
                                    <a href className="nav-item nav-link">Máy Tính</a>
                                    <a href className="nav-item nav-link">Bàn Phím</a>
                                    <a href className="nav-item nav-link">Chuột</a>
                                    <a href className="nav-item nav-link">Phụ Kiện</a>
                                </div>
                            </nav>
                        </div>
                        <div className="col-lg-9">
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
                                        <a href="trangchu.html" className="nav-item nav-link ">Trang chủ</a>
                                        <a href="dssanpham.html" className="nav-item nav-link">Sản phẩm</a>
                                        <a href="dshoadon.html" className="nav-item nav-link">Lịch sử đơn hàng</a>
                                        <a href="lienhe.html" className="nav-item nav-link">Liên Hệ</a>
                                    </div>
                                    <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                        <a href="giohang.html" className="btn px-0 ml-3">
                                            <i className="fas fa-shopping-cart text-primary" />
                                            <span className="badge text-secondary border border-secondary rounded-circle" style={{ paddingBottom: 2 }}>0</span>
                                        </a>
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