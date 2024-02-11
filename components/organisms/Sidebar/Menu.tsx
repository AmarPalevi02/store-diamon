import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { menuSideBar } from './constans'
import { useRouter } from 'next/router'

const Menu = () => {
    const { asPath } = useRouter()

    return (
        <div className="menus">
            {menuSideBar.map((item, i) => {
                const isRoutActive = asPath === item.path
                return (
                    <div key={i} className={`item ${isRoutActive ? 'active' : ""} mb-30`}>
                        <Image
                            className="me-3 "
                            src={`/icon/${item.icon}.svg`}
                            width={25}
                            height={25}
                            alt={'block'}
                        />
                        <p className="item-title m-0">
                            <Link
                                href={`${item.path}`}
                                className="text-lg text-decoration-none"
                            >
                                {item.title}
                            </Link>
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Menu