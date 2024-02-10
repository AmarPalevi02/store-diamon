import Image from 'next/image'
import React from 'react'

const Avatar = () => {
    return (
        <div className="mb-20">
            <div className="image-upload text-center">
                <label for="avatar">
                    <Image
                        src={'icon/avatar-upload.svg'}
                        width={120}
                        height={120}
                        alt='avatar-logo'
                    />
                </label>
                <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
            </div>
        </div>
    )
}

export default Avatar