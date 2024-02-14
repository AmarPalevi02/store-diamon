import TableHead from '@/components/atoms/TableHead'
import Sidebar from '@/components/organisms/Sidebar'
import NavigationStatus from '@/components/organisms/TransactionConten/NavigationStatus'
import TableRow from '@/components/organisms/TransactionConten/TableRow'
import React from 'react'

const Transactions = () => {
    const costomHeader = ["Game", "Item", "Price", "Status", "Action"]
    return (
        <section className="transactions overflow-auto">
            <Sidebar />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">My Transactions</h2>
                    <div className="mb-30">
                        <p className="text-lg color-palette-2 mb-12">You’ve spent</p>
                        <h3 className="text-5xl fw-medium color-palette-1">Rp 4.518.000.500</h3>
                    </div>
                    <NavigationStatus />
                    <div className="latest-transaction">
                        <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
                        <div className="main-content main-content-table overflow-auto">
                            <table className="table table-borderless">
                                <TableHead headers={costomHeader} />
                                <tbody id="list_status_item">
                                    <TableRow
                                        img='overview-1'
                                        title={"Mobile Legends: The New Battle 2021"}
                                        catgeori={"Desktop"}
                                        item={200}
                                        price={290000}
                                        status={"Pending"}
                                    />
                                    <TableRow
                                        img='overview-2'
                                        title={"Call of Duty:Modern"}
                                        catgeori={"Desktop"}
                                        item={550}
                                        price={740000}
                                        status={"Success"}
                                    />
                                    <TableRow
                                        img='overview-3'
                                        title={"Clash of Clans"}
                                        catgeori={"Mobile"}
                                        item={100}
                                        price={120000}
                                        status={"Failed"}
                                    />
                                    <TableRow
                                        img='overview-4'
                                        title={"The Royal Game"}
                                        catgeori={"Mobile"}
                                        item={225}
                                        price={200000}
                                        status={"Pending"}
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}

export default Transactions