import React, { useEffect } from 'react'
import AOS from 'aos'
import Navbar from "@/components/organisms/Navbar"
import MainBaner from '@/components/organisms/MainBaner'
import TransactionSteps from '@/components/organisms/TransactionSteps'
import FeatureGame from '@/components/organisms/FeatureGame'
import Reached from '@/components/organisms/Reached'
import Story from '@/components/organisms/Stroy'
import Footer from '@/components/organisms/Footer'

const About = () => {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <Navbar />
            <MainBaner />
            <TransactionSteps />
            <FeatureGame />
            <Reached />
            <Story />
            <Footer />
        </>
    )
}

export default About