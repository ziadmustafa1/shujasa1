import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div style={{minHeight:"670px"}} className=''>
            <div className='auth flex justify-center items-center'>
                تسجيل الدخول
            </div>
            <div className=' flex justify-center items-center'>
               
                <div className='auth-1 flex justify-center items-center'> <Link to="lognumber">
                    <i className="fa-solid fa-mobile-screen-button" style={{paddingLeft:"15px"}}></i>
                    عن طريق رقم الجوال
                </Link></div>
            </div>
            <div className=' flex justify-center items-center'>
                <div className='auth-1 flex justify-center items-center'>
                <Link to="loginem">
                <i className="fa-regular fa-envelope" style={{paddingLeft:"15px"}}></i>
                طريق البريد الإلكتروني
            </Link></div></div>
        </div>
    )
}

export default Login