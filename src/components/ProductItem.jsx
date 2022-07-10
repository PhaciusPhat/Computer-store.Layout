import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { add__cart__action } from '../redux/action/cart__action';
import { priceFormatter } from '../utils/helper';

function ProductItem(props) {
    const dispatch = useDispatch();
    const { product } = props;
    return (
        <>
            <div
                className="col-lg-3 col-md-4 col-sm-6 pb-1">
                <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                        <img className="img-fluid w-100" src={product.urlMainImage} alt />
                        <div className="product-action">
                            <a className="btn btn-outline-dark btn-square"
                                onClick={() => {dispatch(add__cart__action
                                ({productId: product.id, number: 1}))}}>
                                <i className="fa fa-shopping-cart" /></a>
                            <Link to={`/public/product/${product.id}`}
                                className="btn btn-outline-dark btn-square">
                                <i className="fa fa-search" /></Link>
                        </div>
                    </div>
                    <div className="text-center py-4">
                        <a className="h6 text-decoration-none text-truncate" href>{product.name}</a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                            <h5>{priceFormatter(product.priceOut * ((100 - product.discount) / 100))}</h5>
                            <h6 className="text-muted ml-2">
                                <del>{priceFormatter(product.priceOut)}</del></h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductItem