import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import {
  delete__cart__action,
  get__cart__action,
} from "../redux/action/cart__action";
import { priceFormatter } from "../utils/helper";
import { useForm } from "react-hook-form";
import { save__order__action } from "./../redux/action/order__action";

function Cart() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.orderProducts = orderProducts;
    if (checkQuantity) {
      dispatch(save__order__action(data));
    }
  };
  let totalForOrder = 0;
  const changeInput = (e) => {
    const index = cartItems.findIndex((item) => item.productId === e.target.id);
    const productPrice =
      cartItems[index].productPriceOut *
      ((100 - cartItems[index].productDiscount) / 100);
    document.getElementById(`total_for_${e.target.id}`).innerHTML =
      priceFormatter(productPrice * e.target.value);
    updateTotal();
  };

  const updateTotal = () => {
    const list = document.getElementsByClassName("demo");
    totalForOrder = 0;
    for (let i = 0; i < list.length; i++) {
      const number = list[i].value < 0 ? list[i].value * -1 : list[i].value;
      const id = list[i].id;
      const index = cartItems.findIndex((item) => item.productId === id);
      const productPrice =
        cartItems[index].productPriceOut *
        ((100 - cartItems[index].productDiscount) / 100);
      totalForOrder += productPrice * number;
    }
    document.getElementById("totalForOrder").innerHTML =
      priceFormatter(totalForOrder);
  };

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart__reducer.cartItems);
  useEffect(() => {
    dispatch(get__cart__action());
  }, [dispatch]);
  let orderProducts = [];
  const checkQuantity = () => {
    orderProducts.forEach((e) => {
      if (e.number < 1) {
        alert("Số lượng phải lớn hơn 0");
        return false;
      }
    });
    return true;
  };
  const renderCart = () => {
    return cartItems?.map((item, index) => {
      const productPrice =
        item.productPriceOut * ((100 - item.productDiscount) / 100);
      totalForOrder += productPrice * item.quantity;
      orderProducts.push({
        productId: item.productId,
        number: item.quantity,
      });
      return (
        <tr key={index}>
          <td className="align-middle">
            <img src={item.productUrlMainImage} style={{ width: 50 }} />{" "}
            {item.productName}
          </td>
          <td className="align-middle" id={`price_for_${item.productId}`}>
            {priceFormatter(productPrice)}
          </td>
          <td className="align-middle">
            <div
              className="input-group quantity mx-auto"
              style={{ width: 100 }}
            >
              <input
                onChange={changeInput}
                type="text"
                className="demo form-control 
                form-control-sm border-0 text-center"
                defaultValue={item.quantity}
                id={item.productId}
              />
            </div>
          </td>
          <td className="align-middle" id={`total_for_${item.productId}`}>
            {priceFormatter(productPrice * item.quantity)}
          </td>
          <td className="align-middle">
            <button
              className="btn btn-sm btn-danger"
              onClick={() => {
                dispatch(delete__cart__action(item.productId));
              }}
            >
              <i className="fa fa-times" />
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Sản Phẩm</th>
                  <th>Đơn Giá</th>
                  <th>Số lượng</th>
                  <th>Thành Tiền</th>
                  <th>Xóa</th>
                </tr>
              </thead>
              <tbody className="align-middle">{renderCart()}</tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Đơn hàng của bạn</span>
            </h5>
            <form
              className="bg-light p-30 mb-5"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Tổng cộng</h6>
                  <h6 id="totalForOrder">{priceFormatter(totalForOrder)}</h6>
                </div>
              </div>
              <div className="input-group">
                <input
                  className="form-control border-0 p-4 w-100"
                  placeholder="Địa chỉ"
                  {...register("address", {
                    required: true,
                    maxLength: 30,
                    minLength: 5,
                  })}
                />
                {errors?.address?.type === "required" && (
                  <p className="error-message">Không được bỏ trống</p>
                )}
                {errors?.address?.type === "maxLength" && (
                  <p className="error-message">Không vượt quá 30 ký tự</p>
                )}
                {errors?.address?.type === "minLength" && (
                  <p className="error-message">Phải từ 5 ký tự trở lên</p>
                )}
              </div>
              <div className="input-group">
                <input
                  className="form-control border-0 p-4 mt-5 w-100"
                  placeholder="Mô tả"
                  {...register("description", {})}
                />
              </div>
              <div className="pt-2">
                <button className="btn btn-block btn-primary font-weight-bold my-3 py-3">
                  Thanh toán
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
