import React, { useEffect } from 'react'
import Pagination from '../../../components/Pagination';
import { active__account__action, disabled__account__action, get__accounts__action, save__account__action } from '../../../redux/action/account__action';
import AdminHeader from './../../../components/AdminHeader';
import AdminNav from './../../../components/AdminNav';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { regexName } from '../../../utils/regex';
import { regexUsername } from './../../../utils/regex';

function AdminAccount() {

    const dispatch = useDispatch();

    const accounts = useSelector(state => state.account__reducer.accounts);

    const renderAccounts = () => {
        if (accounts) {
            return accounts?.content?.map((account) => {
                return <tr key={account.id}>
                    <td>{account.username}</td>
                    <td>{account.name}</td>
                    <td>{account.email}</td>
                    <td>{account.phone}</td>
                    <td>
                        <button
                            onClick={() => {
                                dispatch(active__account__action(account.id))
                            }}
                            disabled={account.isActive}
                            className={account.isActive ?
                                "btn btn-success" : "btn btn-danger"}>
                            <i className={
                                account.isActive ?
                                    "fas fa-check-circle" :
                                    "fas fa-times-circle"}></i>
                        </button>
                    </td>
                    <td>
                        <button
                            onClick={() => {
                                dispatch(disabled__account__action(account.id))
                            }}
                            className={account.isDisabled ?
                                "btn btn-success" : "btn btn-danger"}>
                            <i className={
                                account.isDisabled ?
                                    "fas fa-check-circle" :
                                    "fas fa-times-circle"}></i>
                        </button>
                    </td>
                </tr >
            }
            )
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        data.password=data.username;
        dispatch(save__account__action(data));
    };

    useEffect(() => {
        dispatch(get__accounts__action());
    }, [dispatch]);


    const renderModal = () => {
        return <>
            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">??</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="row" onSubmit={handleSubmit(onSubmit)}>
                                <div className="col-md-6 form-group">
                                    <label>Username</label>
                                    <input
                                        className="form-control"
                                        placeholder="T??n T??i Kho???n"
                                        {...register("username", {
                                            required: true,
                                            maxLength: 30,
                                            minLength: 5,
                                            pattern: `/${regexUsername}/`,
                                        })}
                                    />
                                    {errors?.username?.type === "required" && (
                                        <p className="error-message">Kh??ng ???????c b??? tr???ng</p>
                                    )}
                                    {errors?.username?.type === "maxLength" && (
                                        <p className="error-message">Kh??ng v?????t qu?? 30 k?? t???</p>
                                    )}
                                    {errors?.username?.type === "minLength" && (
                                        <p className="error-message">Ph???i t??? 5 k?? t??? tr??? l??n</p>
                                    )}
                                    {errors?.username?.type === "pattern" && (
                                        <p className="error-message">Sai ?????nh d???ng</p>
                                    )}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>H??? T??n</label>
                                    <input
                                        className="form-control"
                                        placeholder="T??n"
                                        {...register("name", {
                                            required: true,
                                            maxLength: 30,
                                            minLength: 2,
                                            pattern: `/${regexName}/`,
                                        })}
                                    />
                                    {errors?.name?.type === "required" && (
                                        <p className="error-message">Kh??ng ???????c b??? tr???ng</p>
                                    )}
                                    {errors?.name?.type === "maxLength" && (
                                        <p className="error-message">Kh??ng v?????t qu?? 30 k?? t???</p>
                                    )}
                                    {errors?.name?.type === "minLength" && (
                                        <p className="error-message">Ph???i t??? 2 k?? t??? tr??? l??n</p>
                                    )}
                                    {errors?.name?.type === "pattern" && (
                                        <p className="error-message">Sai ?????nh d???ng</p>
                                    )}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>S??? ??i???n Tho???i</label>
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
                                    {errors?.phone?.type === "required" && <p className="error-message">Kh??ng ???????c b??? tr???ng</p>}
                                    {errors?.phone?.type === "maxLength" && <p className="error-message">Kh??ng v?????t qu?? 10 k?? t???</p>}
                                    {errors?.phone?.type === "minLength" && <p className="error-message">Ph???i ????? 10 k?? t??? </p>}
                                </div>
                                <div className="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input
                                        className="form-control"
                                        placeholder="T??n T??i Kho???n"
                                        {...register("email", {
                                            required: true,
                                            maxLength: 30,
                                            minLength: 5,
                                            pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                                        })}
                                    />
                                    {errors?.email?.type === "required" && (
                                        <p className="error-message">Kh??ng ???????c b??? tr???ng</p>
                                    )}
                                    {errors?.email?.type === "maxLength" && (
                                        <p className="error-message">Kh??ng v?????t qu?? 30 k?? t???</p>
                                    )}
                                    {errors?.email?.type === "minLength" && (
                                        <p className="error-message">Ph???i t??? 5 k?? t??? tr??? l??n</p>
                                    )}
                                    {errors?.email?.type === "pattern" && (
                                        <p className="error-message">Sai ?????nh d???ng</p>
                                    )}
                                </div>
                                <div className="col-md-12 form-group">
                                    <div className="custom-control custom-checkbox">
                                        <button type="submit" className="btn btn-success">
                                            ????ng k??
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
        <div>
            {renderModal()}
            <AdminHeader />
            <div className="container-fluid p-0">
                <div className="row  p-0 m-0">
                    <AdminNav />
                    <div className="col-lg-10 table-responsive p-0">
                        <table style={{ position: 'relative' }}
                            className="table table-light table-borderless table-hover text-center mb-0">
                            <thead className="thead-dark">
                                <tr>
                                    <th>username</th>
                                    <th>name</th>
                                    <th>email</th>
                                    <th>phone</th>
                                    <th>active</th>
                                    <th>disabled</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle" >
                                {renderAccounts()}
                            </tbody>
                            <Pagination />
                            <button style={{
                                position: "absolute",
                                top: 0, left: 0
                            }}
                                data-toggle="modal" data-target="#modelId"
                                className="btn btn-sm btn-success mt-2 ml-2">
                                <i className="fas fa-plus"></i></button>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAccount