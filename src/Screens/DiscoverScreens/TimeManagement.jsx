import React from 'react';
import PeopleLearning from '../../../public/Ilustrations/Time-Management.png';

const TimeManagement = () => {
    return (
        <>
            <div className="flex p-6 h-[10.5rem] w-full bg-gradient-to-r from-[#4461f2] to-[#4461F2] rounded-3xl">
                <div className="w-1/2 h-[7.5rem]">
                    <div className="flex flex-col gap-1 pl-6 justify-center h-full">
                        <h1 className="text-4xl font-medium text-white">
                            <b>¡Crea y visualiza tus Tareas!</b>
                        </h1>
                        <p className="text-xl font-medium text-white">
                            En este espacio puedes tomar el control total de tus deberes
                        </p>
                    </div>
                </div>
                <div className="w-[21rem] hidden sm:flex relative">
                    <img
                        src={PeopleLearning}
                        alt="Ilustration"
                        className="absolute left-[215px] bottom-[-20%]"
                    />
                </div>
            </div>

            <div className="flex mt-6 h-full">
                <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-semibold font-raleway">Primera Sección</h2>
                    <p className='font-raleway'>Aquí puedes colocar contenido adicional, como instrucciones o información.</p>
                </div>
                <div className="w-0.5 bg-gray-300 mx-auto font-raleway"></div> {/* Línea gris divisoria */}
                <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-semibold font-raleway">Segunda Sección</h2>
                    <p className='font-raleway'>Aquí puedes colocar contenido adicional, como una lista de tareas o gráficos.</p>
                </div>
            </div>
        </>
    );
}

export default TimeManagement;
