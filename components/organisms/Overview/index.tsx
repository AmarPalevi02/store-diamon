import React from 'react'
import TopUpCategories from './TopUpCategories'
import LastTransactions from './LastTransactions'

const Overview = () => {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <TopUpCategories
                    icon='overview-1'
                    des1={'Game'}
                    des2={"Desktop"}
                    spend={"Rp 18.000.500"}
                />
               <LastTransactions />
            </div>
        </main>
    )
}

export default Overview