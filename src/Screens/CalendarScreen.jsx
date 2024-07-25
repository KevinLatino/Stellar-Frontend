import React from 'react'
import "react-big-calendar/lib/css/react-big-calendar.css"
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'

const CalendarScreen = () => {

    const localizer = dayjsLocalizer(dayjs);

    return (
        <>
            <div className='flex justify-center items-center w-full h-full'>
                <Calendar
                    localizer={localizer}
                    style={{ height: '100vh', width: '100%' }} 
                    views={['month']}
                    messages={{
                        next: "Siguiente",
                        previous: "Anterior",
                        today: "Hoy",
                      }}
                />
            </div>
        </>
    )
}

export { CalendarScreen }
