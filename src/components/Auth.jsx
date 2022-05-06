import React from 'react';
import s from './Auth.module.css'
import Form from "./Form";
const Auth = () => {
    return (
        <div className={s.authMain}>
            <div className={s.titleForMessenger}>
                <div className={s.area}>
                    <ul className={s.circles}>
                        {/*Li -  это анимированные элементы на бэкграунде*/}
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <h1 className={s.logoName}>BM</h1>
                <h2 className={s.logoTitle}>Blockchain Messenger</h2>
                <h3>Максимально безопасный мессенджер, созданный на основе блокчейна.</h3>
            </div>
            <Form />
        </div>
    );
};

export default Auth;