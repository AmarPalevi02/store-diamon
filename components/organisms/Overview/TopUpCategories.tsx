import Image from 'next/image'
import React from 'react'
import { ReactNode } from 'react'

interface TypeTopupCategory {
    icon: "overview-1" | "overview-2" | "overview-3",
    children: ReactNode
    spend: number
}

const TopUpCategories = (props: TypeTopupCategory) => {
    const { icon, children, spend } = props
    return (
        <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
            <div className="categories-card">
                <div className="d-flex align-items-center mb-24">
                    <Image
                        src={`/icon/${icon}.svg`}
                        width={60}
                        height={60}
                        alt='overview'
                    />
                    <p className="color-palette-1 mb-0 ms-12">{children}</p>
                </div>
                <div>
                    <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                    <p className="text-2xl color-palette-1 fw-medium m-0">Rp {spend}</p>
                </div>
            </div>
        </div>
    )
}

export default TopUpCategories