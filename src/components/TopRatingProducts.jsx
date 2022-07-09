import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { get__public__product__by__rating__action } from '../redux/action/product__action';
import { priceFormatter } from '../utils/helper';
import ProductItem from './ProductItem';

function TopRatingProducts() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product__reducer.products);
    useEffect(() => {
        dispatch(get__public__product__by__rating__action())
    }, [dispatch])


    const renderProducts = () => {
        if (products.length > 0)
            return products?.map((product, index) => {
                console.log((100 - product.discount) / 100)
                return <ProductItem key={index} product={product} />

            })
    }


    return (
        <>
            {/* Products Start */}
            <div className="container-fluid pt-5 pb-3">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Best Seller</span></h2>
                <div className="row px-xl-5">
                    {renderProducts()}
                </div>
            </div>
            {/* Products End */}

        </>
    )
}

export default TopRatingProducts;