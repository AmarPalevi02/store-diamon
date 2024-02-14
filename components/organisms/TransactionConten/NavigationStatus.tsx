import React from 'react'
import { pathStatus } from './constans'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavigationStatus = () => {
    const {asPath} = useRouter()
    return (
        <div className="row mt-30 mb-20">
            <div className="col-lg-12 col-12 main-content">
                <div id="list_status_title">
                    {pathStatus.map((item, i) => {
                        const isPath = asPath === item.path
                        return (
                            <Link
                                key={i}
                                data-filter="*"
                                href={`${item.path}`}
                                className={` ${isPath ? 'btn-active' : ""} btn btn-status rounded-pill text-sm  me-3`}
                            >
                                {item.title}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default NavigationStatus