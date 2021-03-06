import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminHeader from '../../../components/AdminHeader';
import AdminNav from '../../../components/AdminNav';
import Pagination from '../../../components/Pagination';
import { dateFormat } from '../../../utils/helper';
import { approve__order__action, get__orders__action, reject__order__action } from './../../../redux/action/order__action';
import { priceFormatter } from './../../../utils/helper';

function AdminOrder() {
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
                    <td>
                        <Link
                            to={`/order/${order.id}`}
                            className="btn btn-info">
                            <i className="fas fa-info-circle"></i></Link>
                    </td>
                </tr>
            })
        }
    }
    return (
        <>
            <AdminHeader />
            <div className="container-fluid  p-0">
                <div className="row p-0 m-0">
                    <AdminNav />
                    <div className="col-lg-10 table-responsive p-0">
                        <table style={{ position: 'relative' }}
                            className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>T??n Kh??ch H??ng</th>
                                    <th>Ng??y Xu???t</th>
                                    <th>T???ng ti???n</th>
                                    <th>Thao t??c</th>
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

export default AdminOrder
