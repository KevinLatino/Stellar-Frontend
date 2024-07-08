import React from 'react'
import { BannerComponent } from '../Components/BannerComponent'
import { AddButton } from '../Components/AddButton'
import Falling from '../../public/Ilustrations/Stellar-Falling.svg'


const TaskScreen = () => {

    const title = "¡Crea y visualiza tus Tareas!"
    const subtitle = " En este espacio puedes tomar el control de tus deberes"
    const img = Falling
    const color = "light-blue"

    return (
        <>
            <div className='flex flex-col gap-8'>
                <BannerComponent 
                title={title}
                subtitle={subtitle}
                img={img}
                color={color}
                />
                <div className='flex flex-col gap-y-10'>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-red-500 pb-1">
                            <b>Tareas con fechas de entrega prontas</b>
                        </span>
                    </h1>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                            <b>Tareas con fechas de entrega cercanas</b>
                        </span>
                    </h1>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-[#48BC5E] pb-1">
                            <b>Tareas con fechas de entrega distantes</b>
                        </span>
                    </h1>
                </div>
                <AddButton />
            </div>
        </>
    )
}

export { TaskScreen }
