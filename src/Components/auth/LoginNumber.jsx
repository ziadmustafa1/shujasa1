
import React from 'react'

const LoginNumber = () => {
  return (
    <div className='bg-white' style={{minHeight:"670px"}}>
      <div>
        <h1 data-v-b6ad2e88="" className="title">تسجيل الدخول</h1>
        <p data-v-b6ad2e88="" className="desc text-center">لتسجيل الدخول أضف رقم جوالك ادناه ، وسيتم ارسال <br /> رسالة نصية للتحقق من الرقم المضاف ..</p>
      </div>
      <div className=' flex justify-center'>
        <div className="relative mt-2.5">
          <div data-v-b6ad2e88="" dir="ltr" className="form-group row short flex-row mb-0 flex justify-center">
            <div data-v-b6ad2e88="" className="col col-4 col-md-3">
              <select data-v-b6ad2e88="" required="required" className="form-control" style={{ textAlign: " left", direction: "ltr" }}>
                <option data-v-b6ad2e88="" value="+966">+966
                </option><option data-v-b6ad2e88="" value="+971">+971
                </option><option data-v-b6ad2e88="" value="+965">+965
                </option><option data-v-b6ad2e88="" value="+968">+968
                </option><option data-v-b6ad2e88="" value="+973">+973
                </option><option data-v-b6ad2e88="" value="+974">+974
                </option><option data-v-b6ad2e88="" value="+962">+962
                </option><option data-v-b6ad2e88="" value="+20">+20
                </option></select>
            </div>
            <div data-v-b6ad2e88="" className="col col-8 col-md-9 position-relative mb-2">
              <input data-v-b6ad2e88="" id="mobile" autofocus="autofocus" type="tel" required="required" placeholder="5xxxxxxxx" className="phone form-control mb-0" />
            </div>
          </div>
        </div>
      </div>
      <div className=' flex justify-center'>
        <div className="relative mt-2.5">
        <button data-v-b6ad2e88="" type="button" id="btn-mobile-login" className="primary round submit btn3 block" style={{ width: "100%", margin: "0px" }}>
          <span data-v-b6ad2e88="">دخول</span></button>
    </div></div></div>
  )
}

export default LoginNumber
