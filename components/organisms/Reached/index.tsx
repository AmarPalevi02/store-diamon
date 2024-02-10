import HorizontalLine from '@/components/atoms/HorizontalLine'
import ReachedItem from '@/components/molecules/ReachedItem'
import React from 'react'

const Reached = () => {
    return (
        <section className="reached pt-50 pb-50">
            <div className="container-fluid">
                <div className="d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4">
                    <ReachedItem
                        title={"290M+"}
                        des={"Players Top Up"}
                    />
                    <HorizontalLine />
                    <ReachedItem
                        title={"12.500"}
                        des={"Games Available"}
                    />
                    <HorizontalLine />
                    <ReachedItem
                        title={"99,9%"}
                        des={"Happy Players"}
                    />
                    <HorizontalLine />
                    <ReachedItem
                        title={"4.7"}
                        des={"Rating Worldwide"}
                    />
                </div>
            </div>
        </section>
    )
}

export default Reached