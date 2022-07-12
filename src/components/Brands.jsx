import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get__public__brands__action } from '../redux/action/brand__action';
import { get__public__product__by__brand__action } from '../redux/action/product__action';
function Brands() {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand__reducer.brands);
    
    const productByBrand= (id) => {
        dispatch(get__public__product__by__brand__action(id))
    }
    const renderBrands = () => {
        return brands?.map((brand, index) => {
            return <div className="col-md-1" key={index}>
                <div style={{cursor: 'pointer'}}
                className="mb-4 box-shadow"
                onClick={() => {productByBrand(brand.id)}}>
                    <img className="card-img-top"
                        src={brand.urlImage} alt="image cap"
                        style={{ height: "75px", width: "75px" }} />
                </div>
            </div>
        })
    }

    return (
        <>
            {/* Brands Start */}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
                    <span className="bg-secondary pr-3">Thương hiệu</span></h2>
                <div className="row px-xl-5 pb-3">
                    {renderBrands()}
                </div>
            </div>
            {/* Brands End */}

        </>
    )
}

export default Brands