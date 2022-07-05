import React from "react";
import Header from "../components/Header";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { regexName, regexUsername, regexEmail } from './../utils/regex';
import swal from 'sweetalert';
import { regis__actions } from "../redux/action/auth__action";

function Regis() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if(data.password !== data.re_password){
            swal("", "Mật khẩu không trùng khớp", "error");
            return;
        }
        dispatch(regis__actions(data));
        console.log(data);
    };

    return (
        <>
            <Header />
            <div className="col-lg-register-container">
                <h5 className="section-title position-relative text-uppercase mb-3">
                    <span className="bg-secondary pr-3 ml-4">Tạo Tài Khoản Mới</span>
                </h5>
                <div className="bg-light p-30 mb-5">
                    <form className="row" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 form-group">
                            <label>Username</label>
                            <input
                                className="form-control"
                                placeholder="Tên Tài Khoản"
                                {...register("username", {
                                    required: true,
                                    maxLength: 30,
                                    minLength: 5,
                                    pattern: `/${regexUsername}/`,
                                })}
                            />
                            {errors?.username?.type === "required" && (
                                <p className="error-message">Không được bỏ trống</p>
                            )}
                            {errors?.username?.type === "maxLength" && (
                                <p className="error-message">Không vượt quá 30 ký tự</p>
                            )}
                            {errors?.username?.type === "minLength" && (
                                <p className="error-message">Phải từ 5 ký tự trở lên</p>
                            )}
                            {errors?.username?.type === "pattern" && (
                                <p className="error-message">Sai định dạng</p>
                            )}
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Họ Tên</label>
                            <input
                                className="form-control"
                                placeholder="Tên"
                                {...register("name", {
                                    required: true,
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
                        <div className="col-md-6 form-group">
                            <label>Mật khẩu</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Mật Khẩu"
                                {...register("password", {
                                    required: true,
                                    maxLength: 30,
                                    minLength: 5,
                                })}
                            />
                            {errors?.password?.type === "required" && <p className="error-message">Không được bỏ trống</p>}
                            {errors?.password?.type === "maxLength" && <p className="error-message">Không vượt quá 30 ký tự</p>}
                            {errors?.password?.type === "minLength" && <p className="error-message">Phải từ 5 ký tự trở lên</p>}
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Số Điện Thoại</label>
                            <input
                                className="form-control"
                                type="number"
                                placeholder="SDT"
                                {...register("phone", {
                                    required: true,
                                    maxLength: 10,
                                    minLength: 10,
                                })}
                            />
                            {errors?.phone?.type === "required" && <p className="error-message">Không được bỏ trống</p>}
                            {errors?.phone?.type === "maxLength" && <p className="error-message">Không vượt quá 10 ký tự</p>}
                            {errors?.phone?.type === "minLength" && <p className="error-message">Phải đủ 10 ký tự </p>}
                        </div>
                        <div className="col-md-6 form-group">
                            <label>Nhập lại mật khẩu</label>
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Nhập Lại Mật Khẩu"
                                {...register("re_password", {
                                    required: true,
                                    maxLength: 30,
                                    minLength: 5,
                                })}
                            />
                            {errors?.re_password?.type === "required" && <p className="error-message">Không được bỏ trống</p>}
                            {errors?.re_password?.type === "maxLength" && <p className="error-message">Không vượt quá 30 ký tự</p>}
                            {errors?.re_password?.type === "minLength" && <p className="error-message">Phải từ 5 ký tự trở lên</p>}
                        </div>
                        <div className="col-md-6 form-group">
                            <label>E-mail</label>
                            <input
                                className="form-control"
                                placeholder="Tên Tài Khoản"
                                {...register("email", {
                                    required: true,
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
                                    Đăng ký
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Regis;
