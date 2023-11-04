

const LoginEm = () => {
    return (
        <div className='bg-white' style={{ minHeight: "670px" }}>
            <div>
                <h1 data-v-b6ad2e88="" className="title">تسجيل الدخول</h1>
                <p data-v-b6ad2e88="" className="desc text-center"> لتسجيل الدخول أضف البريد الإلكتروني ادناه ، وسيتم ارسال <br /> رسالة للتحقق من البريد المضاف ..</p>
            </div>
            <div className=' flex justify-center'>
                <div className="relative mt-2.5">
                    <div data-v-b6ad2e88="" dir="ltr" className="form-group row short flex-row">
                        <div data-v-b6ad2e88="" className="col position-relative mb-2">
                            <input data-v-b6ad2e88="" autoFocus="autofocus" type="email" required="required" placeholder="email@example.com" className="form-control1 mb-0" />
                        </div></div>
                </div></div>
            <div className=' flex justify-center'>
                <div className="relative mt-2.5">
                    <button data-v-b6ad2e88="" type="button" id="btn-mobile-login" className="primary round submit btn3 block" style={{ width: "100%", margin: "0px" }}>
                        <span data-v-b6ad2e88="">دخول</span></button>
                </div></div>
        </div>
    )
}

export default LoginEm
