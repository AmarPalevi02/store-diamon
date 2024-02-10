import React from 'react'

interface TypeItem {
    title: String
    des: String
}

const ReachedItem = (props: TypeItem) => {
    const { title, des } = props

    return (
        <div className="me-lg-35">
            <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
            <p className="text-lg text-lg-start text-center color-palette-2 m-0">{des}</p>
        </div>
    )
}

export default ReachedItem