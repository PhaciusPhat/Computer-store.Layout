import React from 'react'
import Countdown from 'react-countdown'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { active__local__account__action, request__active__account__action } from './../redux/action/account__action';

function BtnActive() {

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        dispatch(active__local__account__action(data.code));
    }


    return (
        <>
            {/* Button trigger modal */}
            <button type="button"
                onClick={() => {
                    console.log(123)
                    dispatch(request__active__account__action())
                }}
                className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Kích Hoạt
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1}
                role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <form className="modal-content" onSubmit={handleSubmit(onSubmit)}>
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Đã gửi mã kích hoạt qua mail của bạn vui lòng điền mã</p>

                            <input
                                className="mr-5"
                                type="number"
                                {...register("code", {
                                    required: true,
                                })}
                            />
                            {errors?.code?.type === "required" &&
                                <p className="error-message">Không được bỏ trống</p>}
                        </div>
                        <div className="modal-footer">
                            <button type="submit"
                                className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BtnActive