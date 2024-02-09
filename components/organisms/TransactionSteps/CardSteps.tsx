import ItemsStep from '@/components/molecules/CardSteps'
import React from 'react'

const CardSteps = () => {
    return (
        <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <ItemsStep
                icon='step1'
                title={"1. Start"}
                des1={"Pilih salah satu game"}
                des2={"yang ingin kamu top up"}
            />
            <ItemsStep
                icon='step2'
                title={"2. Fill Up"}
                des1={"Top up sesuai dengan"}
                des2={"nominal yang sudah tersedia"}
            />
            <ItemsStep
                icon='step3'
                title={"3. Be a Winner"}
                des1={"Siap digunakan untuk"}
                des2={"improve permainan kamu"}
            />
        </div >
    )
}

export default CardSteps