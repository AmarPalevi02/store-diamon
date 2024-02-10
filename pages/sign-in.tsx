import FormSignIn from '@/components/organisms/FormSign-in'
import IlustratiionSignIn from '@/components/organisms/FormSign-in/IlustratiionSignIn'
import React from 'react'

const Signin = () => {
    return (
        <section className="sign-in mx-auto">
            <div className="row">
                <div className="col-xxl-5 col-lg-6 my-auto py-lg-0 pt-lg-50 pb-lg-50 pt-30 pb-47 px-0">
                    <FormSignIn />
                </div>
                <IlustratiionSignIn />
            </div>
        </section>
    )
}

export default Signin