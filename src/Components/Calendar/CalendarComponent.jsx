import React from 'react'
import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import dayjs from 'dayjs'
import ToolbarComponent from './ToolBarComponent'
import "react-big-calendar/lib/css/react-big-calendar.css"
import "./CalendarStyles.css"


const CalendarComponent = () => {

    const localizer = dayjsLocalizer(dayjs);

    return (
        <>
            <div className='flex justify-center items-center w-full h-full'>
                <Calendar
                    localizer={localizer}
                    views={['month']}
                    components={{
                        toolbar: ToolbarComponent,
                    }}
                />
            </div>
        </>
    )
}

export default CalendarComponent;
