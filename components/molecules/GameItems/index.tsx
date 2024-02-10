import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface TypeItem {
    thumbnail: 'Thumbnail-1' | 'Thumbnail-2' | 'Thumbnail-3' | 'Thumbnail-4' | 'Thumbnail-5',
    icon: 'stick',
    title: String,
    des: String
}

const GameItem = (props: TypeItem) => {
    const { thumbnail, icon, title, des } = props
    return (
        <div className="featured-game-card position-relative">
            <Link href="/detail">
                <div className="blur-sharp">
                    <Image
                        className='thumbnail'
                        src={`/img/${thumbnail}.png`}
                        width={205}
                        height={270}
                        alt={"thumnail"}
                    />
                </div>
                <div className="cover position-absolute bottom-0 m-32">
                    <div className="d-flex flex-column h-100 justify-content-between text-decoration-none z-10">
                        <div className="game-icon mx-auto">
                            <Image
                                src={`/icon/${icon}.svg`}
                                width={54}
                                height={36}
                                alt={"stick"}
                            />
                        </div>
                        <div>
                            <p className="fw-semibold text-white text-xl m-0">{title}</p>
                            <p className="fw-light text-white m-0">{des}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default GameItem