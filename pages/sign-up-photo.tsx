import Avatar from '@/components/organisms/SignUpPhoto/Avatar'
import SelectCategory from '@/components/organisms/SignUpPhoto/SelectCategory'
import React from 'react'

const SignUpPhoto = () => {
    return (
        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
            <div className="container mx-auto">
                <form action="">
                    <div className="form-input d-md-block d-flex flex-column">
                        <div>
                            <Avatar />
                            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">Shayna Anne</h2>
                            <p className="text-lg text-center color-palette-1 m-0">shayna@anne.com</p>
                            <SelectCategory />
                        </div>

                        <div className="button-group d-flex flex-column mx-auto">
                            <a className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                href="./sign-up-photo-success.html" role="button">Create My Account</a>
                            <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                                role="button">Terms &
                                Conditions</a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SignUpPhoto