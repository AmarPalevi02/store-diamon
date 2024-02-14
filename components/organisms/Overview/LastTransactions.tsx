import React from 'react'
import TableRow from './TableRow'
import TableHead from '@/components/atoms/TableHead'

const LastTransactions = () => {
    const costomHeader = ["Game", "Item", "Price", "Status"]
    
    return (
        <div className="latest-transaction">
            <p className="text-lg fw-medium color-palette-1 mb-14">Latest Transactions</p>
            <div className="main-content main-content-table overflow-auto">
                <table className="table table-borderless">
                    <TableHead headers={costomHeader} />
                    <tbody>
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
    )
}

export default LastTransactions