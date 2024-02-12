import React from 'react'
import { ReactNode } from 'react'

interface TypeItem {
    title: String
    children: ReactNode
}

const ReachedItem = (props: TypeItem) => {
    const { title, children } = props

    return (
        <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">{children}</p>
        </div>
    )
}

export default ReachedItem