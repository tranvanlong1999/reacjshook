import React, { useState } from 'react';
import './Login.scss';

function Login() {
    return (

        <div>
            <form className="Login" action="" method="post" className="formLogin">
                <h1>Đăng Nhập</h1>
                <p>
                    <label>Tài Khoản: </label>
                    <input className="userName" type="text" placeholder="Nhập tài khoản" />
                </p>
                <p>
                    <label>Mật Khẩu:</label>
                    <input className="userName" type="password" placeholder="Nhập mật khẩu" />
                </p>
                <button type="submit" className="login">Đăng Nhập</button>
                <a href="#">Quyên mật khẩu</a>
            </form>
        </div>
    );
}
export default Login;