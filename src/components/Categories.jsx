import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get__public__cate__action } from '../redux/action/category__action';
import { get__public__product__by__cate__action } from './../redux/action/product__action';

function Categories() {

    const dispatch = useDispatch();
    const categories = useSelector(state => state.category__reducer.categories);
    
    const productByCate = (id) => {
        dispatch(get__public__product__by__cate__action(id))
    }


    const renderCategories = () => {
        return categories?.map((category, index) => {
            return <button key={index} 
            className="btn col-lg-2 col-md-4 col-sm-6 pb-1">
                <div style={{cursor: 'pointer'}} 
                className="text-decoration-none"
                onClick={() => {productByCate(category.id)}}>
                    <div className="mb-4 bg-primary text-center">
                        <h3>{category.name}</h3>
                    </div>
                </div>
            </button>
        })
    }


    return (
        <>
            {/* Categories Start */}
            <div className="container-fluid pt-5">
                <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Danh mục</span></h2>
                <div className="row px-xl-5 pb-3">
                    {renderCategories()}
                </div>
            </div>
            {/* Categories End */}

        </>
    )
}

export default Categories