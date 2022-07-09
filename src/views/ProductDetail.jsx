import React, { useEffect, useState } from 'react'
import { get__public__product__action } from '../redux/action/product__action';
import Header from './../components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { priceFormatter } from '../utils/helper';
import BtnModalRating from '../components/BtnModalRating';

function ProductDetail() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product__reducer.product);
    useEffect(() => {
        dispatch(get__public__product__action(id));
    }, [dispatch])

    

    const renderImages = () => {
        return product?.productImages?.map((image, index) => {
            const className = index === 0 ? "active" : ''
            return (
                <div key={index} className={"carousel-item " + className}>
                    <img className="w-100 h-100" src={image.urlImage} alt="Image" />
                </div>
            )
        })
    }


    const renderRate = () => {
        return product?.ratingDTOs?.map((rate, index) => {
            return (
                <div key={index}>
                    <div className="d-flex justify-content-between">
                        <div>
                            <div className="mr-3">
                                {[...Array(rate.stars)].map((star, index) => {
                                    index += 1;
                                    return (
                                        <i key={index} className="fas fa-star text-warning"></i>
                                    );
                                })}
                            </div>
                            <div className="ml-auto">
                                <span className="text-muted">({rate.accountName}): {rate.comment}</span>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
            )
        })
    }





    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5 mb-30">
                        <div id="product-carousel" className="carousel slide" data-ride="carousel" >
                            <div className="carousel-inner bg-light">
                                {renderImages()}
                            </div>
                            <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                                <i className="fa fa-2x fa-angle-left text-dark"></i>
                            </a>
                            <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                                <i className="fa fa-2x fa-angle-right text-dark"></i>
                            </a>
                        </div >
                    </div>
                    <div className="col-lg-7 h-auto mb-30">
                        <div className="h-100 bg-light p-30">
                            <h3>{product?.name}</h3>
                            <h4 className="font-weight-semi-bold">
                                Giá sau khi giảm: {priceFormatter(product.priceOut * ((100 - product.discount) / 100))}</h4>
                            <h4 className="font-weight-semi">
                                Giá: <del>{priceFormatter(product.priceOut)}</del></h4>
                            <h5>Số lượng tồn kho: {product?.quantity}</h5>
                            <div className="d-flex align-items-center mb-4 pt-2">
                                <div className="input-group quantity mr-3" style={{ width: 130 }}>
                                    <input type="number" className="form-control bg-secondary border-0 text-center" name="number" defaultValue={1} />
                                </div>
                                <button disabled={product?.quantity == 0} name="btn-add-cart" className="btn btn-primary px-3">
                                    <i className="fas fa-shopping-cart" />
                                    {product?.quantity == 0 ? "Hết hàng" : "Thêm vào giỏ hàng"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="des mb-5">
                    {product?.description} <br />
                    Thương Hiệu: {product?.brandName} <br />
                    Loại sản phẩm: {product?.categoryName} <br />
                </div>
                <div className="rating" style={{
                    height: '175px',
                    overflowY: 'scroll'
                }}>
                    {renderRate()}
                </div>
                {BtnModalRating()}
            </div>
        </>
    )
}

export default ProductDetail