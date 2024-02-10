import GameItem from '@/components/molecules/GameItems'
import React from 'react'

const FeatureGame = () => {
    return (
        <section className="featured-game pt-50 pb-50">
            <div className="container-fluid">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Our Featured<br /> Games This Year
                </h2>
                <div className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
                    data-aos="fade-up">
                    <GameItem
                        thumbnail='Thumbnail-1'
                        icon='stick'
                        title={'Super Mach'}
                        des={'Mobile'}
                    />
                    <GameItem
                        thumbnail='Thumbnail-2'
                        icon='stick'
                        title={'Call Of Duty: Moderen'}
                        des={'Mobile'}
                    />
                    <GameItem
                        thumbnail='Thumbnail-3'
                        icon='stick'
                        title={'Mobile Lagends'}
                        des={'Mobile'}
                    />
                    <GameItem
                        thumbnail='Thumbnail-4'
                        icon='stick'
                        title={'Clash of Clans'}
                        des={'Mobile'}
                    />
                    <GameItem
                        thumbnail='Thumbnail-5'
                        icon='stick'
                        title={'Valorant'}
                        des={'Destop'}
                    />
                </div>
            </div>
        </section>
    )
}

export default FeatureGame