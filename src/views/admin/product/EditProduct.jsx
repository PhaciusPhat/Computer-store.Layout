import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AdminHeader from '../../../components/AdminHeader';
import AdminNav from '../../../components/AdminNav';
import { get__product__action } from '../../../redux/action/product__action';
import { update_product__action } from './../../../redux/action/product__action';

function AdminEditProduct() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const product = useSelector(state => state.product__reducer.product);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let urlMainImage = "";
    const onSubmit = (data) => {
        console.log(data)
        console.log(data.file[0])
        console.log(urlMainImage)
        const formData = new FormData();
        formData.append('name', data.name === ""
            ? product?.name : data.name);
        formData.append('priceIn', data.priceIn === ""
            ? product?.priceIn : data.priceIn);
        formData.append('priceOut', data.priceOut === ""
            ? product?.priceOut : data.priceOut);
        formData.append('quantity', data.quantity === ""
            ? product?.quantity : data.quantity);
        formData.append('discount', data.discount === ""
            ? product?.discount : data.discount);
        formData.append('description', product?.description);
        formData.append('brandId', product?.brand.id);
        formData.append('categoryId', product?.category.id);
        formData.append('urlMainImage', urlMainImage);
        formData.append('file', data.file[0] === undefined
            ? null : data.file[0]);
        dispatch(update_product__action(id, formData));
    }
    useEffect(() => {
        dispatch(get__product__action(id));
    }, [dispatch])
    const renderProductImages = () => {
        return product?.productImages?.map((image, index) => {
            return (
                <button className="btn btn-primary col-md-3" key={index}>
                    <img
                        onClick={() => {
                            urlMainImage = image.urlImage
                            console.log(urlMainImage)
                        }}
                        src={image.urlImage} alt="" className="img-fluid" />
                </button>
            )
        })
    }

    const renderModal = () => {
        return <>
            <div className="modal fade" id="ModalId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    {renderProductImages()}
                                </div>
                                <div className="col-md-12 form-group">
                                    <input
                                        className="form-control"
                                        type="file"
                                        accept="image/gif, image/jpeg, image/png"
                                        {...register("file")}
                                    />
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <button type="button" className="btn btn-success" data-dismiss="modal">
                                            cập nhật
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }


    return (
        <>
            {renderModal()}
            <AdminHeader />
            <div className="row p-0 m-0">
                <AdminNav />
                <div className="col-lg-10 table-responsive p-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        {/* name */}
                        <div className="col-md-12 form-group">
                            <label>Tên sản phẩm</label>
                            <input
                                className="form-control"
                                placeholder="Tên sản phẩm"
                                defaultValue={product.name}
                                {...register("name", {
                                    maxLength: 30,
                                    minLength: 2
                                })}
                            />
                            {errors?.name?.type === "maxLength" && (
                                <p className="error-message">Không vượt quá 30 ký tự</p>
                            )}
                            {errors?.name?.type === "minLength" && (
                                <p className="error-message">Phải từ 5 ký tự trở lên</p>
                            )}
                        </div>
                        {/* priceIn */}
                        <div className="col-md-12 form-group">
                            <label>Giá nhập hàng</label>
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={product.priceIn}
                                placeholder="Giá nhập hàng"
                                {...register("priceIn", {
                                })}
                            />
                        </div>
                        {/* priceOut */}
                        <div className="col-md-12 form-group">
                            <label>Giá xuất hàng</label>
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={product.priceOut}
                                placeholder="Giá xuất hàng"
                                {...register("priceOut", {
                                })}
                            />
                        </div>
                        {/* discount */}
                        <div className="col-md-12 form-group">
                            <label>giảm giá</label>
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={product.discount}
                                placeholder="giảm giá"
                                {...register("discount", {
                                })}
                            />
                        </div>
                        {/* quantity */}
                        <div className="col-md-12 form-group">
                            <label>Số lượng</label>
                            <input
                                className="form-control"
                                type="number"
                                defaultValue={product.quantity}
                                placeholder="Số lượng"
                                {...register("quantity", {
                                })}
                            />
                        </div>
                        {/* image */}
                        <div className="col-md-12 form-group">
                            <label>Hình ảnh</label>
                            <button
                                type="button"
                                data-toggle="modal" data-target="#ModalId"
                                className="btn btn-sm btn-success mt-2 ml-2">
                                <i className="fas fa-pen"></i></button>
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
        </>
    )
}

export default AdminEditProduct