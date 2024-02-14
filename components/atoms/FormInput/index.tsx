import React, { ChangeEvent } from 'react'

interface TypeForm {
    label: String,
    placeholder: String,
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = (props: TypeForm) => {
    const { label, onChange, placeholder } = props
    return (
        <>
            <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">{label}</label>
            <input
                type="text"
                className="form-control rounded-pill text-lg"
                id="name"
                name="name"
                aria-describedby="name"
                placeholder={`${placeholder}`}
                onChange={onChange}
            />
        </>
    )
}

export default FormInput