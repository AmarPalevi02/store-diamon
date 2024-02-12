import React from 'react'
import Image from 'next/image'
import cx from "classnames"

interface TypeTable {
    img: "overview-1" | "overview-2" | "overview-3" | "overview-4"
    title: String,
    catgeori: String,
    item: number,
    price: number,
    status: "Pending" | "Success" | "Failed"
}

const TableRow = (props: TypeTable) => {
    const { title, catgeori, item, price, status, img } = props

    const statusCalss = cx({
        'float-start icon-status pending': true,
        pendding: status === 'Pending',
        success: status === 'Success',
        failed: status === 'Failed'
    })
    
    return (
        <tr className="align-middle">
            <th scope="row">
                <Image
                    className="float-start me-3 mb-lg-0 mb-3"
                    src={`/img/${img}.png`}
                    width={80}
                    height={60}
                    alt="IMAGE"
                />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{catgeori}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
            </td>
            <td>
                <p className="fw-medium text-start color-palette-1 m-0">Rp {price}</p>
            </td>
            <td>
                <div>
                    <span className={statusCalss}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}</p>
                </div>
            </td>
        </tr>
    )
}

export default TableRow