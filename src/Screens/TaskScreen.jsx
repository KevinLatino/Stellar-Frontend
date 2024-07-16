import React from 'react'
import { AddTask } from '../Components/AddTaskComponent'
import Tasks from '../../public/Ilustrations/Task3.png'


const TaskScreen = () => {

    return (
        <>
            <div className='flex flex-col gap-8 animate__animated animate__fadeInDown'>
                <div className="flex my-2 bg-light-blue rounded-3xl">
                    <div className="my-14 ml-14 w-1/2">
                        <div className="w-full text-light-White">
                            <h1 className="text-4xl font-medium">
                                <b>¡Crea y visualiza tus Tareas!</b>
                            </h1>
                            <p className="text-xl font-medium">
                                En este espacio puedes tomar el control de tus deberes
                            </p>
                        </div>
                    </div>
                    <div className="w-[15rem] hidden sm:flex relative">
                        <img
                            src={Tasks}
                            alt="Ilustration"
                            className="absolute left-[188px] bottom-[0%]"
                        />
                    </div>
                </div>
                <h1 className="text-xl font-medium text-stellar-blue">
                    <span className="inline-block border-b-[0.1rem] border-light-yellow pb-1">
                        <b>Dale un vistazo a tus tareas</b>
                    </span>
                </h1>
            </div>
            <AddTask />
        </>
    )
}

export { TaskScreen }
