import React from 'react'
import Menu from './Menu'
import Profile from './Profile'
import Footer from './Footer'

const Sidebar = () => {
    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <Menu />
                <Footer />
            </div>
        </section>
    )
}

export default Sidebar