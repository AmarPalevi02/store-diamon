import React from 'react'
import Sidebar from '@/components/organisms/Sidebar'
import Overview from '@/components/organisms/Overview'
const Members = () => {
    return (
        <section className="overview overflow-auto">
            <Sidebar />
            <Overview />
        </section>
    )
}

export default Members