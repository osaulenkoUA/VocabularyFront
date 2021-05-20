import {NavLink} from 'react-router-dom';
import React, {ChangeEvent, FormEvent, useState} from 'react';
import {useSelector} from 'react-redux';
import authOperation from '../../redux/auth/authOperation';
import s from './LogIn.module.scss';
import styles from './LinkStyle';
import SvgEye from '../../components/assets/SvgEye/SvgEye';
import SvgEyeHide from '../../components/assets/SvgEyeHide/SvgEyeHide';
import {RootState, useAppDispatch} from "../../redux/store";
import {logInUser} from "../../types/user";
import Spinner from "../../components/Spinner/Spinner";

import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import authActions from "../../redux/auth/authActions";


const PhoneBookLogInView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const loading = useSelector((state: RootState) => state.auth.loading);
    const [show, setShow] = useState('password');
    const error = useSelector((state: RootState) => state.auth.error);

    function onHandleClick() {
        show === 'text' ? setShow('password') : setShow('text');
    }

    const updateEmail = ({target}: ChangeEvent<HTMLInputElement>) => setEmail(target.value);
    const updatePassword = ({target}: ChangeEvent<HTMLInputElement>) => setPassword(target.value);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const obj: logInUser = {
            email,
            password,
        };
        await dispatch(authOperation.logIn(obj));
        console.log(error.code);


        setPassword('');
        setEmail('');
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
                <h4 className={s.formTitle}>Sign in Learning words</h4>
                <form onSubmit={handleSubmit} className={s.form}>
                    <label className={s.form__label}>
                        Email:
                        <input
                            className={s.form__input}
                            type="email"
                            value={email}
                            onChange={updateEmail}
                            name="email"
                            placeholder="e-mail"
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
                            placeholder="password"
                        />
                    </label>

                    {!loading && <div className={s.wrapBTN}>
                      <button type="submit" className={s.form__btn}>
                        Sign in
                      </button>
                    </div>}
                    {loading && <div className={s.wrapSpinner}><Spinner/></div>}

                    <button type="button" onClick={onHandleClick} className={s.passShow__btn}>
                        {show === 'password' ? <SvgEye/> : <SvgEyeHide/>}
                    </button>
                </form>

                <span>Don't have an account?</span>
                <NavLink exact to="/signup" style={styles.link}>
                    Sign up
                </NavLink>
            </div>
            <ToastContainer/>
        </section>
    );
}

export default PhoneBookLogInView;
