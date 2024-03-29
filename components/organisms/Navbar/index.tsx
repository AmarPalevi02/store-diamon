import React, { useState } from 'react'
import Image from 'next/image'
import Menu from './Menu'
import Auth from './Auth'
import TogleMenu from './TogleMenu'

const Navbar = () => {
    const [togle, setTogle] = useState<boolean>(true)

    const handleTogle = () => {
        setTogle(!togle)
        console.log(togle)
    }
    return (
        <section>
            <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src={"/icon/logo.svg"} width={60} height={60} alt={"logo"} />
                    </a>
                    <TogleMenu onClick={handleTogle} />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav ms-auto text-lg gap-lg-0 gap-2 ${togle ? 'show' : 'd-none'}`}>
                            <Menu />
                            <Auth isLogin />
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar