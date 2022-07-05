import React, { useEffect } from 'react'
import AdminNav from './../../components/AdminNav';
import AdminHeader from './../../components/AdminHeader';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get__order__action } from '../../redux/action/order__action';
import { priceFormatter } from '../../utils/helper';

function OrderDetail() {
    // const { id } = useParams();
    // console.log(id)
    const id = "35eb69b4-68e3-4e01-9bc3-1eabb7f4cd6b"
    const dispatch = useDispatch();

    const order = useSelector(state => state.order__reducer.order);

    useEffect(() => {
        dispatch(get__order__action(id));
    }, [dispatch]);

    const renderOrder = () => {
        if (order) {
            return order.map((orderItem, index) => {
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
    }
    return (
        <>
            <AdminHeader />
            <div className="container-fluid">
                <div className="row">
                    <AdminNav />
                    <div className="col-lg-10 table-responsive p-0">
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
                                {renderOrder()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderDetail
