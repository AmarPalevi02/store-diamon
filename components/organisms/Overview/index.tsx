import React from 'react'
import TopUpCategories from './TopUpCategories'
import LastTransactions from './LastTransactions'

const Overview = () => {
    return (
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <TopUpCategories icon='overview-1' spend={18000500}>
                                Game
                                <br />
                                Desktop
                            </TopUpCategories>
                            <TopUpCategories icon='overview-2' spend={8455000}>
                                Game
                                <br />
                                Mobile
                           </TopUpCategories>
                            <TopUpCategories icon='overview-3' spend={5000000}>
                                Other
                                <br />
                                Categories
                            </TopUpCategories>
                        </div>
                    </div>
                </div >
                <LastTransactions />
            </div>
        </main>
    )
}

export default Overview