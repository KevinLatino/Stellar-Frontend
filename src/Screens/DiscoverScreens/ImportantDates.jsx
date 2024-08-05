import React from 'react'
import GirlWritingNotes from '../../../public/Ilustrations/Girl-Writing-Notes.png'

const ImportantDates = () => {
    return (
        <div>
            <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                <div className="w-[42rem] h-[7.5rem]">
                    <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                        <h1 className="text-4xl font-medium text-white">
                            <b>¡Escribe tus notas en un calendario!</b>
                        </h1>
                        <p className="text-xl font-medium text-white">
                            Hacer esto es una buena práctica, ya que puedes visualizar las fechas de entrega de manera sencilla.
                        </p>
                    </div>
                </div>
                <div className="w-[12.5rem] hidden sm:flex relative">
                    <img
                        src={GirlWritingNotes}
                        alt="Ilustration"
                        className="absolute left-[220px] bottom-[-20%]"
                    />
                </div>
            </div>
        </div>
    )
}

export default ImportantDates
