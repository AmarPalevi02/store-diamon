import React from 'react'

interface TypeHead {
    headers: String[]
}

const TableHead = (props: TypeHead) => {
    const { headers } = props
    return (
        <thead>
            <tr className="color-palette-1">
                {headers.map((header, i) => (
                    <th
                        key={i}
                        className=""
                        scope="col"
                    >
                        {header}
                    </th>

                ))}
            </tr>
        </thead>
    )
}

export default TableHead