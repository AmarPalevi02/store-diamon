import FormSignUp from '@/components/organisms/SignUpForm'
import Image from 'next/image'
import React from 'react'

const SignUp = () => {
    return (
        <section className="sign-up mx-auto pt-lg-100 pb-lg-100 pt-30 pb-47">
            <div className="container mx-auto">
                <form action="">
                    <div className="pb-50">
                        <a className="navbar-brand" href="../index.html">
                            <Image src={'/icon/logo.svg'} width={60} height={60} alt='logo' />
                        </a>
                    </div>
                    <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
                    <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
                    <FormSignUp />
                </form>
            </div>
        </section>
    )
}

export default SignUp