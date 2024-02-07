import React from 'react'
import Link from 'next/link'
import { menuItems } from './constans'
import { useRouter } from 'next/router'

const Menu = () => {
    const { asPath } = useRouter()
    return (
        <>
            {menuItems.map((menu, i) => {
                const isActive = asPath === menu.path
                return (
                    <li key={i} className="nav-item my-auto">
                        <Link
                            className={`${isActive ? 'active' : ""} nav-link`}
                            aria-current="page"
                            href={`${menu.path}`}
                        >
                            {menu.title}
                        </Link>
                    </li >
                )
            })}
        </>
    )
}

export default Menu