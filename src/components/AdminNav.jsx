import React from 'react'

function AdminNav() {
    return (
        <>
            <div className="col-lg-2 menu-bar 
            bg-dark text-danger pt-3" 
            style={{height: "90vh"}}>
                <div className="menu">
                    <ul className="menu-links">
                        <li className="nav-link">
                            <a href="qlhoadon.php">
                                <i className="bx bx-list-ol" />
                                <span className="text nav-text">Hóa đơn</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="qltaikhoan.php">
                                <i className="bx bxs-user-account" />
                                <span className="text nav-text">Tài khoản</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="qlloai.php">
                                <i className="bx bx-laptop" />
                                <span className="text nav-text">Loại SP</span>
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="qlsanpham.php">
                                <i className="bx bxl-product-hunt" />
                                <span className="text nav-text">Sản Phẩm</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminNav
