import React from 'react'
import { Link } from 'react-router-dom';

function AdminNav() {
    return (
        <>
            <div className="col-lg-2 menu-bar p-0
            bg-dark text-danger"
                style={{ height: "90vh" }}>
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <Link to="/order">
                                <i className="bx bx-list-ol" />
                                <span className="text nav-text">Hóa đơn</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/account">
                                <i className="bx bxs-user-account" />
                                <span className="text nav-text">Tài khoản</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/brand">
                                <i className="bx bx-laptop" />
                                <span className="text nav-text">Nhãn Hàng</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/cate">
                                <i className="bx bx-laptop" />
                                <span className="text nav-text">Loại Sản Phẩm</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/product">
                                <i className="bx bx-laptop" />
                                <span className="text nav-text">Sản Phẩm</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminNav
