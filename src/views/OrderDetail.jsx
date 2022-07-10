import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import { get__public__order__action } from '../redux/action/order__action';
import { priceFormatter } from './../utils/helper';

function OrderDetail() {

    const { id } = useParams();
    // const id = "35eb69b4-68e3-4e01-9bc3-1eabb7f4cd6b"
    const dispatch = useDispatch();

    const order = useSelector(state => state.order__reducer.order);

    useEffect(() => {
        dispatch(get__public__order__action(id));
    }, [dispatch]);

    let total = 0;

    const renderOrders = () => {
        return order?.map((orderItem, index) => {
            total += orderItem.quantity * orderItem.price;
            // const price = orderItem.price
            return <tr key={index}>
                <td>{orderItem.productName}</td>
                <td>
                    <img src={orderItem.productUrlMainImage}
                        style={{ width: '50px' }}
                        alt="" srcset="" />
                </td>
                <td>{orderItem.quantity}</td>
                <td>{priceFormatter(orderItem.price)}</td>
                <td>{orderItem.productDiscount}%</td>
                <td>{priceFormatter(orderItem.quantity * orderItem.price)}</td>
            </tr>
        })
    }

    return (
        <>
            <Header />
            <table style={{ position: 'relative' }}
                className="table table-light table-borderless table-hover text-center mb-0">
                <thead className="thead-dark">
                    <tr>
                        <th>Tên Sản Phẩm</th>
                        <th>Ảnh Sản Phẩm</th>
                        <th>Số Lượng</th>
                        <th>Giá</th>
                        <th>Giảm giá</th>
                        <th>Tổng Tiền</th>
                    </tr>
                </thead>
                <tbody className="align-middle" >
                    {renderOrders()}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5" className="text-right">
                            Tổng Tiền
                        </td>
                        <td>
                            {priceFormatter(total)}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default OrderDetail