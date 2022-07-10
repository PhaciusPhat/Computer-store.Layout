import React, { useEffect } from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { useDispatch, useSelector } from 'react-redux';
import { get__public__orders__action } from './../redux/action/order__action';
import { dateFormat, priceFormatter } from '../utils/helper';
import { useForm } from 'react-hook-form';
import { regexName } from '../utils/regex';
import { Link } from 'react-router-dom';
import BtnActive from '../components/BtnActive';
import { update__info__acount__action } from '../redux/action/account__action';

function Account() {

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    Object.keys(data).forEach(key => {
      if (data[key] === '') {
        data[key] = localAccount[key];
      }
    })
    dispatch(update__info__acount__action(data));
  };
  useEffect(() => {
    dispatch(get__public__orders__action());
  }, [dispatch])
  const orders = useSelector(state => state.order__reducer.orders);
  const localAccount = useSelector(state => state.account__reducer.localAccount);

  const renderOrders = () => {
    return orders?.content?.map((order, index) => {
      return <tr key={index}>
        <td className="align-middle">{index + 1}</td>
        <td className="align-middle">{dateFormat(new Date(order.createdDate))}</td>
        <td className="align-middle">{priceFormatter(order.total)}</td>
        <td className="align-middle">
          <Link to={`/public/order/${order.id}`} className="btn btn-sm btn-info"><i className="fa fa-eye" /></Link>
        </td>
      </tr>
    })
  }


  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8">
            <table className="table table-light table-borderless table-hover text-center mb-0"
              style={{ position: 'relative' }}
            >
              <thead className="thead-dark">
                <tr>
                  <th>STT</th>
                  <th>Ngày mua hàng</th>
                  <th>Giá tiền</th>
                  <th>Xem hóa đơn</th>
                </tr>
              </thead>
              <tbody className="align-middle">
                {renderOrders()}
              </tbody>
              <Pagination />
            </table>
          </div>
          <div className="col-lg-4">
            <form className="row" onSubmit={handleSubmit(onSubmit)}>
              <div className="col-12 form-group">
                <label>Họ Tên</label>
                <input
                  className="form-control"
                  defaultValue={localAccount.name}
                  {...register("name", {
                    maxLength: 30,
                    minLength: 2,
                    pattern: `/${regexName}/`,
                  })}
                />
                {errors?.name?.type === "required" && (
                  <p className="error-message">Không được bỏ trống</p>
                )}
                {errors?.name?.type === "maxLength" && (
                  <p className="error-message">Không vượt quá 30 ký tự</p>
                )}
                {errors?.name?.type === "minLength" && (
                  <p className="error-message">Phải từ 2 ký tự trở lên</p>
                )}
                {errors?.name?.type === "pattern" && (
                  <p className="error-message">Sai định dạng</p>
                )}
              </div>
              <div className="col-12 form-group">
                <label>Số Điện Thoại</label>
                <input
                  className="form-control"
                  defaultValue={localAccount.phone}
                  type="number"
                  {...register("phone", {
                    maxLength: 10,
                    minLength: 10,
                  })}
                />
                {errors?.phone?.type === "required" && <p className="error-message">Không được bỏ trống</p>}
                {errors?.phone?.type === "maxLength" && <p className="error-message">Không vượt quá 10 ký tự</p>}
                {errors?.phone?.type === "minLength" && <p className="error-message">Phải đủ 10 ký tự </p>}
              </div>
              <div className="col-12 form-group">
                <label>E-mail</label>
                <input
                  className="form-control"
                  defaultValue={localAccount.email}
                  {...register("email", {
                    maxLength: 30,
                    minLength: 5,
                    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className="error-message">Không được bỏ trống</p>
                )}
                {errors?.email?.type === "maxLength" && (
                  <p className="error-message">Không vượt quá 30 ký tự</p>
                )}
                {errors?.email?.type === "minLength" && (
                  <p className="error-message">Phải từ 5 ký tự trở lên</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="error-message">Sai định dạng</p>
                )}
              </div>
              <div className="col-md-12 form-group">
                <div className="custom-control custom-checkbox">
                  <button type="submit" className="btn btn-success">
                    Lưu
                  </button>
                </div>
              </div>
            </form>

            <div className="col-12 form-group">
              Kích hoạt: {localAccount.isActive ? "Đã kích hoạt" : <BtnActive />}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Account