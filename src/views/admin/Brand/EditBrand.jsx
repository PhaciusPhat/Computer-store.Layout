import React, { useEffect } from 'react'
import AdminHeader from '../../../components/AdminHeader'
import AdminNav from './../../../components/AdminNav';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { get__brand__action, update_brand__action } from '../../../redux/action/brand__action';

function AdminEditBrand() {
    const { id } = useParams();
    const dispatch = useDispatch();

    const brand = useSelector(state => state.brand__reducer.brand);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('name', data.name === "" ? brand.name : data.name);
        formData.append('file', data.file[0]);
        dispatch(update_brand__action(id,formData));
    };


    useEffect(() => {
        dispatch(get__brand__action(id));
    }, [dispatch])

    return (
        <>
            <AdminHeader />
            <div className="row p-0 m-0">
                <AdminNav />
                <div className="col-lg-10 table-responsive p-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-12 form-group">
                            <label>Tên Hãng</label>
                            <input
                                className="form-control"
                                placeholder="Tên Hãng"
                                defaultValue={brand.name}
                                {...register("name", {
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
                            {errors?.username?.type === "pattern" && (
                                <p className="error-message">Sai định dạng</p>
                            )}
                        </div>
                        <div className="col-md-12 form-group">
                            <label>Tên Hãng</label>
                            <input
                                className="form-control"
                                type="file"
                                accept="image/gif, image/jpeg, image/png"
                                {...register("file", {
                                })}
                            />
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

export default AdminEditBrand