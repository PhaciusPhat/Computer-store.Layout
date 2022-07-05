import React from 'react'

function Categories() {
    return (
        <>
            {/* Categories Start */}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Danh mục</span></h2>
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href>
                            <div className="cat-item d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid" src="img/keyboard3.jpg" alt />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Bàn Phím</h6>
                                    <small className="text-body">100 Products</small>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href>
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid" src="img/mouse2.jpg" alt />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Chuột</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href>
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid" src="img/hphone2.jpg" alt />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Headphone</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                        <a className="text-decoration-none" href>
                            <div className="cat-item img-zoom d-flex align-items-center mb-4">
                                <div className="overflow-hidden" style={{ width: 100, height: 100 }}>
                                    <img className="img-fluid" src="img/ephone1.jpeg" alt />
                                </div>
                                <div className="flex-fill pl-3">
                                    <h6>Tai Nghe</h6>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            {/* Categories End */}

        </>
    )
}

export default Categories