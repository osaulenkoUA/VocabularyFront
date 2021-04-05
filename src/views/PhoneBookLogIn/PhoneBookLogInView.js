import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperation from '../../redux/auth/authOperation.js';
import vocabulary from '../../images/vocabulary.jpg';
import s from './LogIn.module.scss';
import styles from './LinkStyle';
import SvgEye from '../../components/assets/SvgEye/SvgEye.js';
import SvgEyeHide from '../../components/assets/SvgEyeHide/SvgEyeHide.js';

function PhoneBookLogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.auth.loading);
  const [show, setShow] = useState('password');

  function onHandleClick() {
    show === 'text' ? setShow('password') : setShow('text');
  }

  const updateEmail = ({ target }) => setEmail(target.value);
  const updatePassword = ({ target }) => setPassword(target.value);

  function handleSubmit(e) {
    e.preventDefault();
    const obj = {
      email,
      password,
    };
    dispatch(authOperation.logIn(obj));
    setPassword('');
    setEmail('');
  }
  return (
    <section className={s.container}>
      {/* <div className={s.bgimage}></div> */}
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
              type="password"
              value={password}
              onChange={updatePassword}
              name="password"
              type={show}
              placeholder="password"
            />
          </label>

          <button type="submit" className={s.form__btn}>
            Sign in
          </button>
          <button type="button" onClick={onHandleClick} className={s.passShow__btn}>
            {show === 'password' ? <SvgEye /> : <SvgEyeHide />}
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
