import React, { useEffect } from 'react'
import AdminNav from './../../components/AdminNav';
import AdminHeader from './../../components/AdminHeader';
import Pagination from './../../components/Pagination';
import { get__orders__action, approve__order__action, reject__order__action } from './../../redux/action/order__action';
import { useSelector, useDispatch } from 'react-redux';
import { dateFormat, priceFormatter } from '../../utils/helper';

function Order() {
    const dispatch = useDispatch();

    const orders = useSelector(state => state.order__reducer.orders);

    const approve = (id) => {
        dispatch(approve__order__action(id));
    }
    const reject = (id) => {
        dispatch(reject__order__action(id));
    }

    useEffect(() => {
        dispatch(get__orders__action());
    }, [dispatch]);

    const renderOrders = () => {
        if (orders) {
            return orders?.content?.map((order, index) => {
                return <tr key={order.id}>
                    <td>{order.accountName}</td>
                    <td>{dateFormat(new Date(order.createdDate))}</td>
                    <td>{priceFormatter(order.total)}</td>
                    <td>{order.status}</td>
                    <td>
                        <button onClick={() => approve(order.id)}
                            className="btn btn-success">
                            <i className="fas fa-check-circle"></i></button>
                        <button onClick={() => reject(order.id)} 
                        className="btn btn-danger">
                            <i className="fas fa-times-circle"></i></button>
                        <button
                            className="btn btn-info">
                            <i className="fas fa-info-circle"></i></button>
                    </td>
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
                                    <th>Tên Khách Hàng</th>
                                    <th>Ngày Xuất</th>
                                    <th>Tổng tiền</th>
                                    <th>Trạng Thái</th>
                                    <th>Thao tác</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle" >
                                {renderOrders()}
                            </tbody>
                            <Pagination />
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order
