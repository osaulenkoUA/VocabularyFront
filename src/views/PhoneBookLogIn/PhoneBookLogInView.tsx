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

function PhoneBookLogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const loading = useSelector((state: RootState) => state.auth.loading);
    const [show, setShow] = useState('password');

    function onHandleClick() {
        show === 'text' ? setShow('password') : setShow('text');
    }

    const updateEmail = ({target}: ChangeEvent<HTMLInputElement>) => setEmail(target.value);
    const updatePassword = ({target}: ChangeEvent<HTMLInputElement>) => setPassword(target.value);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const obj: logInUser = {
            email,
            password,
        };
        dispatch(authOperation.logIn(obj));
        setPassword('');
        setEmail('');
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

                    <button type="submit" className={s.form__btn}>
                        Sign in
                    </button>
                    <button type="button" onClick={onHandleClick} className={s.passShow__btn}>
                        {show === 'password' ? <SvgEye/> : <SvgEyeHide/>}
                    </button>
                </form>

                <span>Don't have an account?</span>
                <NavLink exact to="/signup" style={styles.link}>
                    Sign up
                </NavLink>
            </div>
        </section>
    );
}

export default PhoneBookLogIn;
