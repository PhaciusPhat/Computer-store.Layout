import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { add__rating__action, delete__rating__action } from './../redux/action/rating__action';

function BtnModalRating() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        if (rating === 0) {
            swal("", "Bạn chưa đánh giá", "warning");
            return;
        }
        data.productId = id
        data.stars = rating;
        dispatch(add__rating__action(data));
    }
    const selectStars = () => {
        return <>
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "btn fas fa-star text-warning" : "btn fas fa-star"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}</>
    }

    return (
        <>
            {/* Button trigger modal */}
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Bình luận
            </button>
            {/* Modal */}
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {selectStars()}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Nhận xét của bạn</label>
                                    <input
                                        className="form-control"
                                        {...register("comment", {
                                            required: true,
                                            maxLength: 30,
                                            minLength: 2
                                        })}
                                    />
                                    {errors?.comment?.type === "required" && (
                                        <p className="error-message">Không được bỏ trống</p>
                                    )}
                                </div>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-danger" onClick={() => {
                                    dispatch(delete__rating__action(id))
                                }}>Delete</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BtnModalRating