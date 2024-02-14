import TransactionDetailContent from '@/components/TransactionDetailContent'
import Sidebar from '@/components/organisms/Sidebar'
import React from 'react'

const DetailTranscation = () => {
    return (
        <section className="transactions-detail overflow-auto">
            <Sidebar />
            <TransactionDetailContent />
        </section>
    )
}

export default DetailTranscation