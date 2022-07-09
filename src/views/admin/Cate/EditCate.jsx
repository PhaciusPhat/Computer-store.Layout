import React, { useEffect } from 'react'
import AdminHeader from '../../../components/AdminHeader'
import AdminNav from './../../../components/AdminNav';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { get__category__action } from '../../../redux/action/category__action';
import { update__category__action } from './../../../redux/action/category__action';

function AdminEditCate() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const category = useSelector(state => state.category__reducer.category);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        data.name = data.name === "" ? category.name : data.name;
        dispatch(update__category__action(id, data));
    };


    useEffect(() => {
        dispatch(get__category__action(id));
    }, [dispatch])

    return (
        <>
            <AdminHeader />
            <div className="row p-0 m-0">
                <AdminNav />
                <div className="col-lg-10 table-responsive p-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-12 form-group">
                            <label>Tên Loại</label>
                            <input
                                className="form-control"
                                defaultValue={category.name}
                                {...register("name", {
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
                                    Cập nhật
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminEditCate