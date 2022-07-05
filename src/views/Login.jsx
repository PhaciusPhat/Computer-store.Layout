import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Header from '../components/Header'
import { login__actions } from './../redux/action/auth__action';
import { regexUsername } from './../utils/regex';

function Login() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data);
        dispatch(login__actions(data));
    };

    return (
        <>
            <Header />
            <section className="shop_grid_area section_padding_50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title_signin">
                                <h4><hr />Đăng nhập</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="col-12_signin">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                placeholder="Tên Tài Khoản"
                                {...register("username", {
                                    required: true,
                                    maxLength: 30,
                                    minLength: 5,
                                    pattern: `/${regexUsername}/`
                                })}
                            />
                            {errors?.username?.type === "required" && <p className="error-message">Không được bỏ trống</p>}
                            {errors?.username?.type === "maxLength" && <p className="error-message">Không vượt quá 30 ký tự</p>}
                            {errors?.username?.type === "minLength" && <p className="error-message">Phải từ 5 ký tự trở lên</p>}
                            {errors?.username?.type === "pattern" && <p className="error-message">Sai định dạng</p>}
                            <br />
                            <input
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
                            <br />
                            <input type="submit" value="Đăng nhập" />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login