import React, { useEffect } from "react";
import AdminHeader from "../../../components/AdminHeader";
import AdminNav from "../../../components/AdminNav";
import Pagination from "./../../../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  delete__product__action,
  get__products__action,
  save__product__action,
} from "./../../../redux/action/product__action";
import { Link } from "react-router-dom";
import { get__brands__action } from "./../../../redux/action/brand__action";
import { get__categories__action } from "./../../../redux/action/category__action";
import swal from "sweetalert";

function AdminProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product__reducer.products);
  const brands = useSelector((state) => state.brand__reducer.brands);
  const categories = useSelector((state) => state.category__reducer.categories);
  const onSubmit = (data) => {
    if (data.priceIn < 0 || data.priceOut < 0) {
      swal("", "Giá không được nhỏ hơn 0", "warning");
      return;
    }
    if(data.priceIn > data.priceOut){
        swal("", "Giá nhập không được lớn hơn giá bán", "warning");
        return;
    }
    if(data.quantity < 0){
        swal("", "Số lượng không được nhỏ hơn 0", "warning");
        return;
    }
    if(data.discount < 0){
        swal("", "Giảm giá không được nhỏ hơn 0", "warning");
        return;
    }
    if(data.brand === '-1'){
        swal("", "Vui lòng chọn thương hiệu", "warning");
        return;
    }
    if(data.category === '-1'){
        swal("", "Vui lòng chọn danh mục", "warning");
        return;
    }
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("priceIn", data.priceIn);
    formData.append("priceOut", data.priceOut);
    formData.append("quantity", data.quantity);
    formData.append("discount", data.discount);
    formData.append("brandId", data.brand);
    formData.append("categoryId", data.category);
    formData.append("file", data.file[0]);
    dispatch(save__product__action(formData));
  };

  const renderCategories = () => {
    return categories?.map((category, index) => {
      return (
        <option key={index} value={category.id}>
          {category.name}
        </option>
      );
    });
  };

  const renderBrands = () => {
    return brands?.map((brand, index) => {
      return (
        <option key={index} value={brand.id}>
          {brand.name}
        </option>
      );
    });
  };

  const renderModal = () => {
    return (
      <>
        <div
          className="modal fade"
          id="ModalId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="row" onSubmit={handleSubmit(onSubmit)}>
                  {/* name */}
                  <div className="col-md-12 form-group">
                    <label>Tên sản phẩm</label>
                    <input
                      className="form-control"
                      placeholder="Tên sản phẩm"
                      {...register("name", {
                        required: true,
                        maxLength: 30,
                        minLength: 2,
                      })}
                    />
                    {errors?.name?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                    {errors?.name?.type === "maxLength" && (
                      <p className="error-message">Không vượt quá 30 ký tự</p>
                    )}
                    {errors?.name?.type === "minLength" && (
                      <p className="error-message">Phải từ 5 ký tự trở lên</p>
                    )}
                  </div>
                  {/* description */}
                  <div className="col-md-12 form-group">
                    <label>Mô tả</label>
                    <input
                      className="form-control"
                      placeholder="Mô tả"
                      {...register("description", {
                        required: true,
                        maxLength: 30,
                        minLength: 2,
                      })}
                    />
                    {errors?.description?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                    {errors?.description?.type === "maxLength" && (
                      <p className="error-message">Không vượt quá 30 ký tự</p>
                    )}
                    {errors?.description?.type === "minLength" && (
                      <p className="error-message">Phải từ 5 ký tự trở lên</p>
                    )}
                  </div>
                  {/* priceIn */}
                  <div className="col-md-12 form-group">
                    <label>Giá nhập hàng</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Giá nhập hàng"
                      {...register("priceIn", {
                        required: true,
                      })}
                    />
                    {errors?.priceIn?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  {/* priceOut */}
                  <div className="col-md-12 form-group">
                    <label>Giá xuất hàng</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Giá xuất hàng"
                      {...register("priceOut", {
                        required: true,
                      })}
                    />
                    {errors?.priceOut?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  {/* discount */}
                  <div className="col-md-12 form-group">
                    <label>giảm giá</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="giảm giá"
                      {...register("discount", {
                        required: true,
                      })}
                    />
                    {errors?.discount?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  {/* quantity */}
                  <div className="col-md-12 form-group">
                    <label>Số lượng</label>
                    <input
                      className="form-control"
                      type="number"
                      placeholder="Số lượng"
                      {...register("quantity", {
                        required: true,
                      })}
                    />
                    {errors?.quantity?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  {/* brand */}
                  <div className="col-md-12 form-group">
                    <label>Thương hiệu</label>
                    <select
                      className="form-control"
                      {...register("brand", {
                        required: true,
                      })}
                    >
                      <option value="-1">Chọn thương hiệu</option>
                      {renderBrands()}
                    </select>
                    {errors?.brand?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  {/* category */}
                  <div className="col-md-12 form-group">
                    <label>Danh mục</label>
                    <select
                      className="form-control"
                      {...register("category", {
                        required: true,
                      })}
                    >
                      <option value="-1">Chọn danh mục</option>
                      {renderCategories()}
                    </select>
                    {errors?.category?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  {/* image */}
                  <div className="col-md-12 form-group">
                    <label>Tên Hãng</label>
                    <input
                      className="form-control"
                      type="file"
                      accept="image/gif, image/jpeg, image/png"
                      {...register("file", {
                        required: true,
                      })}
                    />
                    {errors?.file?.type === "required" && (
                      <p className="error-message">Không được bỏ trống</p>
                    )}
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="custom-control custom-checkbox">
                      <button type="submit" className="btn btn-success">
                        Thêm
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderProducts = () => {
    return products?.content?.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.name}</td>
          <td>{product.priceOut}</td>
          <td>{product.quantity}</td>
          <td>
            <img src={product.urlMainImage} width={50} />
          </td>
          <td>{product.brand?.name}</td>
          <td>{product.category?.name}</td>
          <td>
            <button
              onClick={() => {
                dispatch(delete__product__action(product.id));
              }}
              className={
                product.disabled ? "btn btn-success" : "btn btn-danger"
              }
            >
              <i
                className={
                  product.disabled
                    ? "fas fa-check-circle"
                    : "fas fa-times-circle"
                }
              ></i>
            </button>
          </td>
          <td>
            <Link to={`/product/${product.id}`} className="btn btn-info">
              <i className="fas fa-pen"></i>
            </Link>
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    dispatch(get__products__action());
    dispatch(get__brands__action());
    dispatch(get__categories__action());
  }, [dispatch]);
  return (
    <>
      {renderModal()}
      <AdminHeader />
      <div className="row p-0 m-0">
        <AdminNav />
        <div className="col-lg-10 table-responsive p-0">
          <table
            style={{ position: "relative" }}
            className="table table-light table-borderless table-hover text-center mb-0"
          >
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Number</th>
                <th>Image</th>
                <th>Category</th>
                <th>Brand</th>
                <th>disabled</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="align-middle">{renderProducts()}</tbody>
            <Pagination />
            <button
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
              data-toggle="modal"
              data-target="#ModalId"
              className="btn btn-sm btn-success mt-2 ml-2"
            >
              <i className="fas fa-plus"></i>
            </button>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminProduct;
