import Head from 'next/head'
import React from 'react'

interface Togle {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TogleMenu = (props: Togle) => {
    const { onClick } = props
    return (
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={onClick}
        >
            <span className="navbar-toggler-icon" />
        </button>
    )
}

export default TogleMenu