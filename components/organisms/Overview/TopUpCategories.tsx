import Image from 'next/image'
import React from 'react'

interface TypeTopupCategory {
    icon: "overview-1" | "overview-2" | "overview-3"
    des1: String
    des2: String
    spend: String
}

const TopUpCategories = (props: TypeTopupCategory) => {
    const { icon, des1, des2, spend } = props
    return (
        <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
            <div className="main-content">
                <div className="row">
                    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                        <div className="categories-card">
                            <div className="d-flex align-items-center mb-24">
                                <Image
                                    src={`/icon/${icon}.svg`}
                                    width={60}
                                    height={60}
                                    alt='overview'
                                />
                                <p className="color-palette-1 mb-0 ms-12">{des1}<br /> {des2}</p>
                            </div>
                            <div>
                                <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                                <p className="text-2xl color-palette-1 fw-medium m-0">{spend}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                        <div className="categories-card">
                            <div className="d-flex align-items-center mb-24">
                                <Image
                                    src={'/icon/overview-2.svg'}
                                    width={60}
                                    height={60}
                                    alt='overview'
                                />
                                <p className="color-palette-1 mb-0 ms-12">Game<br /> Mobile</p>
                            </div>
                            <div>
                                <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                                <p className="text-2xl color-palette-1 fw-medium m-0">Rp 8.455.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
                        <div className="categories-card">
                            <div className="d-flex align-items-center mb-24">
                                <Image
                                    src={'/icon/overview-3.svg'}
                                    width={60}
                                    height={60}
                                    alt='overview'
                                />
                                <p className="color-palette-1 mb-0 ms-12">Other<br /> Categories</p>
                            </div>
                            <div>
                                <p className="text-sm color-palette-2 mb-1">Total Spent</p>
                                <p className="text-2xl color-palette-1 fw-medium m-0">Rp 5.000.000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopUpCategories