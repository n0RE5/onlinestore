import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { check, login, registration } from '../http/userAPI';
import { setAuth, setUser } from '../store/userSlice';
import '../styles/LoginPage.scss'

function LoginPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [register, setRegister] = useState<boolean>(false)

    const auth = async (e: React.MouseEvent) => {
        try {
            e.preventDefault()
            let response
            if(register) {
                response = await registration(email, password)
            }
            response = await login(email, password)
            dispatch(setUser(response))
            dispatch(setAuth(true))
            navigate('/')
        } catch (error: any) {
            alert(error.response?.data?.message)
        }
    }

    useEffect(() => {
        check().then(() => navigate('/'))
    }, []);

    return (
        <div className="loginpage">
            <div className="loginpage_w">
                <span className="loginpage_title">{register ? 'Register' : 'Login'}</span>
                <div className="loginpage_form">Email</div>
                <input className="loginpage_input" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <div className="loginpage_form">Password</div>
                <input className="loginpage_input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="loginpage_button" onClick={auth}>{register ? 'Register' : 'Login'}</button>
                <span className="loginpage_switch"> 
                    {register ? <span>Already have an account?</span> : <span>No account?</span>}<a onClick={() => setRegister((prev) => !prev)}>{register ? "Login" : "Register"}</a>
                </span>
            </div>
        </div>
    );
};

export default LoginPage;