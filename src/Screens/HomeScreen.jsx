import React from 'react'
import { BannerComponent } from '../Components/BannerComponent'
import Falling from '../../public/Ilustrations/Stellar-Falling.svg'

const HomeScreen = () => {
    
    const title = "¡Bienvenido a Stellar!"
    const subtitle = "Ya puedes organizar tus tareas de una mejor manera"
    const img = Falling
    const color = "light-blue";

    return (
        <>
            <div className='flex flex-col gap-8'>
                <BannerComponent
                    title={title}
                    subtitle={subtitle}
                    img={img}
                    color={color}
                />
                <div>
                    <h1 className="text-xl font-medium text-stellar-blue">
                        <span className="inline-block border-b-[0.1rem] border-[#48BC5E] pb-1">
                            <b>¡Aquí están tus tareas completadas, sigue así!</b>
                        </span>
                    </h1>
                </div>
            </div>
        </>
    )
}

export { HomeScreen }
