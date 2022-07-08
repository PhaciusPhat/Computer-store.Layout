import React, { useEffect } from 'react'
import AdminHeader from '../../../components/AdminHeader'
import AdminNav from './../../../components/AdminNav';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { get__brands__action, delete__brand__action, save__brand__action } from './../../../redux/action/brand__action';
import { Link } from 'react-router-dom';

function AdminBrand() {
    const dispatch = useDispatch();
    const brands = useSelector(state => state.brand__reducer.brands);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        dispatch(get__brands__action());
    }, [dispatch]);
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('file', data.file[0]);
        dispatch(save__brand__action(formData));
    };
    const renderBrands = () => {
        return brands?.map((brand, index) => {
            return <tr key={index}>
                <td>{brand.name}</td>
                <td><img src={brand.urlImage}
                    width={50} /></td>
                <td>
                    <button
                        onClick={() => {
                            dispatch(delete__brand__action(brand.id))
                        }}
                        className={brand.disabled ?
                            "btn btn-success" : "btn btn-danger"}>
                        <i className={
                            brand.disabled ?
                                "fas fa-check-circle" :
                                "fas fa-times-circle"}></i>
                    </button>
                </td>
                <td>
                    <Link
                        to={`/brand/${brand.id}`}
                        className="btn btn-info">
                        <i className="fas fa-pen"></i></Link>
                </td>
            </tr>
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
                            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-12 form-group">
                                    <label>Tên Hãng</label>
                                    <input
                                        className="form-control"
                                        placeholder="Tên Hãng"
                                        {...register("name", {
                                            required: true,
                                            maxLength: 30,
                                            minLength: 2
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
    }



    return (
        <>
            {renderModal()}
            <AdminHeader />
            <div className="row p-0 m-0">
                <AdminNav />
                <div className="col-lg-10 table-responsive p-0">
                    <table style={{ position: 'relative' }}
                        className="table table-light table-borderless table-hover text-center mb-0">
                        <thead className="thead-dark">
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>disabled</th>
                                <th>thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle" >
                            {renderBrands()}
                        </tbody>
                        <button style={{
                            position: "absolute",
                            top: 0, left: 0
                        }}
                            data-toggle="modal" data-target="#ModalId"
                            className="btn btn-sm btn-success mt-2 ml-2">
                            <i className="fas fa-plus"></i></button>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminBrand