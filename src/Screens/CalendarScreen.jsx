import React from 'react'
import CalendarComponent from '@Components/Calendar/CalendarComponent';
import 'animate.css'

const CalendarScreen = () => {

    return (
        <>
            <div className='animate__animated animate__fadeInDown h-full'>
                <CalendarComponent />
            </div>
        </>
    )
}

export { CalendarScreen }
