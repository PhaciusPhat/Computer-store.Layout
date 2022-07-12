import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { delete__category__action, get__categories__action, save__category__action } from './../../../redux/action/category__action';
import AdminHeader from './../../../components/AdminHeader';
import AdminNav from './../../../components/AdminNav';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function AdminCate() {
    const dispatch = useDispatch();

    const categories = useSelector(state => state.category__reducer.categories);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(save__category__action(data));
    };

    const renderModal = () => {
        return <>
            <div className="modal fade" id="cateModalId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
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
                                    <label>Tên Loại</label>
                                    <input
                                        className="form-control"
                                        placeholder="Tên Loại"
                                        {...register("name", {
                                            required: true,
                                            maxLength: 30,
                                            minLength: 5
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
                                    {errors?.username?.type === "pattern" && (
                                        <p className="error-message">Sai định dạng</p>
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

    const renderCategories = () => {
        return categories.map((category, index) => {
            return <tr key={category.id}>
                <td>{category.name}</td>
                <td>
                    <button
                        onClick={() => {
                            dispatch(delete__category__action(category.id))
                        }}
                        className={category.disabled ?
                            "btn btn-success" : "btn btn-danger"}>
                        <i className={
                            category.disabled ?
                                "fas fa-check-circle" :
                                "fas fa-times-circle"}></i>
                    </button>
                </td>
                <td>
                    <Link   
                        to={`/cate/${category.id}`}
                        className="btn btn-info">
                        <i className="fas fa-pen"></i></Link>
                </td>
            </tr>
        })
    }

    useEffect(() => {
        dispatch(get__categories__action());
    }, [dispatch]);
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
                                <th>disabled</th>
                                <th>thao tác</th>
                            </tr>
                        </thead>
                        <tbody className="align-middle" >
                            {renderCategories()}
                        </tbody>
                        <button style={{
                            position: "absolute",
                            top: 0, left: 0
                        }}
                            data-toggle="modal" data-target="#cateModalId"
                            className="btn btn-sm btn-success mt-2 ml-2">
                            <i className="fas fa-plus"></i></button>
                    </table>
                </div>
            </div>
        </>
    )
}

export default AdminCate