/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='text-white bg-footer text-center'>
            <div className='container'>
            <div className='logo'>
                <img className='h-24 w-auto' src='https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/ShujaWhite.svg' />
            </div>
            <h3 className='text-center pt-10'>من أصالة الدرعية وشموخ طويق بدأت قصة شجاع، ليس أكثر إبداعًا من تركيبة عطريَّة تُصنع بالحُب والشغف،</h3>
            <h3 className='text-center'>شجاع لتشكيل الذكريات في رشة عطر لا تُنسى.</h3>
            <p className='pt-16 text-center'>شركة عطر شجاع للتجارة</p>
            <p className='text-center'>رقم السجل : 1010747569</p>
            <p className='text-center'>الرقم الضريبي : 311600223100003</p>
            <p className='text-center'>العنوان : 3161 ابراهيم بن علي السقا - حي العارض - الرياض</p>
            <p className='text-center'>الرمز البريدي : 13212</p>
            <div className='flex justify-center'>
                <div className='text-r p-12'>
                    <h2 className='text-s pb-3'>
                        روابط مهمة
                    </h2>
                    <p>
                        الأسئلة الشائعة
                    </p>
                    <p>التوظيف</p>
                </div>
                <div className='p-12 text-r'>
                    <h2 className='text-s pb-3'>
                        سياسات المتجر
                    </h2>
                    <Link to="/refundexchangepolicy">
                    <p>
                        الاستبدال والاسترجاع
                    </p></Link>
                    <p>سياسة الخصوصية</p></div>
            </div>
            <div className='logo'>
                <img className='w-2' src='https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/vat-certificate.svg' />
            </div>
            <p>الرقم الضريبي : 311600223100003</p>
            <div className='logo'>
                <img className='w-3' src='https://assets.zid.store/themes/0f6ed6db-c6f5-45cb-a798-6f221d6a2f97/PaymentMethods.svg' />
            </div>
            <p className='text-p'>جميع الحقوق محفوظة لمتجر
                شجاع
                ©2022</p>
            <p className='text-p'>All designed by: Small Details</p>
        </div>
        </div>
    )
}

export default Footer
