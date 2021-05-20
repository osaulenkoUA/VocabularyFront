import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useSelector} from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import s from './Register.module.scss';
import {NavLink} from 'react-router-dom';
import styles from './LinkStyle';

import SvgEye from '../../components/assets/SvgEye/SvgEye';
import SvgEyeHide from '../../components/assets/SvgEyeHide/SvgEyeHide';
import {RootState, useAppDispatch} from "../../redux/store";
import {userCurrent} from "../../types/user";
import Spinner from "../../components/Spinner/Spinner";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import authActions from "../../redux/auth/authActions";

function PhoneBookRegister() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setConfirmPassword] = useState('');
    const [show, setShow] = useState('password');
    const [avtiveBtn, setAvtiveBtn] = useState(true);

    const dispatch = useAppDispatch();
    const loading = useSelector((state: RootState) => state.auth.loading);
    const error = useSelector((state: RootState) => state.auth.error);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setAvtiveBtn(true);
        e.preventDefault();
        const obj: userCurrent = {
            name,
            email,
            password,
            passwordConfirm,
        };
        await dispatch(authOperation.register(obj));
        setName('');
        setPassword('');
        setEmail('');
        setConfirmPassword('');
    }

    const updateName = ({target}: ChangeEvent<HTMLInputElement>) => setName(target.value);
    const updateEmail = ({target}: ChangeEvent<HTMLInputElement>) => setEmail(target.value);
    const updatePassword = ({target}: ChangeEvent<HTMLInputElement>) => setPassword(target.value);
    const updateConfirm = ({target}: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(target.value);
        if (password === target.value) setAvtiveBtn(false);
        else setAvtiveBtn(true);
    };

    function onHandleClick() {
        show === 'text' ? setShow('password') : setShow('text');
    }


    if (error.code!==0){
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        error.code===401?toast('Authentication failed'):null;
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        error.code===400?toast('Some field is empty'):null;

        dispatch(authActions.logInError({code:0,message:''}));
    }
    return (
        <section className={s.container}>
            <div className={s.wrapForm}>
                <NavLink exact to="/" style={styles.link}>
                    Back to Sign in
                </NavLink>
                <h4 className={s.formTitle}>Create an account</h4>

                <form onSubmit={handleSubmit} className={s.form}>
                    <label className={s.form__label}>
                        Name:
                        <input
                            className={s.form__input}
                            type="text"
                            value={name}
                            onChange={updateName}
                            name="name"
                        />
                    </label>

                    <label className={s.form__label}>
                        Email:
                        <input
                            className={s.form__input}
                            type="email"
                            value={email}
                            onChange={updateEmail}
                            name="email"
                        />
                    </label>

                    <label className={s.form__label}>
                        Password:
                        <input
                            className={s.form__input}
                            type={show}
                            value={password}
                            onChange={updatePassword}
                            name="password"
                        />
                    </label>

                    <label className={s.form__label}>
                        Confirm Password:
                        <input
                            className={s.form__input}
                            type={show}
                            value={passwordConfirm}
                            onChange={updateConfirm}
                            name="confirmPassword"
                        />
                    </label>

                    {!loading && <div className={s.wrapBTN}>
                      <button
                        type="submit"
                        disabled={avtiveBtn}
                        className={!avtiveBtn ? s.form__btn : s.notActive}
                      >
                        Sign up
                      </button>
                    </div>}

                    {loading && <div className={s.wrapSpinner}><Spinner/></div>}

                    <button type="button" onClick={onHandleClick} className={s.passShow__btn}>
                        {show === 'password' ? <SvgEye/> : <SvgEyeHide/>}
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </section>
    );
}

export default PhoneBookRegister;
