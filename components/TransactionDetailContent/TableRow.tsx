import React from 'react'

interface TypeTable {
    label: string,
    value: String | number,
    classNames?: String
}

const TableRow = (props: Partial<TypeTable>) => {
    const { label, value, classNames } = props
    return (
        <>
            <p className="text-lg color-palette-1 mb-20">{label} <span
                className={`purchase-details ${classNames}`}>{value}</span></p>
        </>
    )
}

export default TableRow