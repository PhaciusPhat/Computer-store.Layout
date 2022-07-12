import React, { useEffect } from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { get__public__products__action } from '../redux/action/product__action';
import ProductItem from '../components/ProductItem';
import Brands from '../components/Brands';
import Pagination from '../components/Pagination';

function Products() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.product__reducer.products);


    useEffect(() => {
        dispatch(get__public__products__action());
    }, [dispatch]);


    const renderProduct = () => {
        return products?.content?.map((product, index) => {
            return <ProductItem key={index} product={product} />
        })
    }

    return (
        <>
            <Header />
            <Categories />
            <Brands />
            <div className="container-fluid" style={{position: 'relative'}}>
                <div className="row pb-3">
                    {renderProduct()}
                </div>
                <Pagination/>
            </div>
        </>
    )
}

export default Products