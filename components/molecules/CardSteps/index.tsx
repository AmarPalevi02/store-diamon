import Image from 'next/image'
import React from 'react'

interface TypeStep {
    icon: 'step1' | 'step2' | 'step3',
    title: String,
    des1: String,
    des2: String
}

const ItemsStep = (props: TypeStep) => {
    const { icon, title, des1, des2 } = props
    return (
        <div className="col-lg-4">
            <div className="card feature-card border-0">
                <Image
                    src={`/icon/${icon}.svg`}
                    alt="" width={80}
                    height={80}
                />
                <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
                <p className="text-lg color-palette-1 mb-0">{des1}<br />
                    {des2}</p>
            </div>
        </div>
    )
}

export default ItemsStep