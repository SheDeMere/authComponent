import React from 'react';
import s from './Auth.module.css';
import logo from '../assets/logo.ico'
const Form = () => {
    return (
        <div className={s.form}>
            <img src={logo} className={s.logo} alt="logo"/>
            <div className={s.inputs}>
                <input placeholder='Login' className={s.formInput} type="text"/>
                <input placeholder='Password' className={s.formInput} type="password"/>
                <button className={s.loginButton}>Login</button>
                <button className={s.signUp}>Sign-up</button>
            </div>
        </div>
    );
};

export default Form;