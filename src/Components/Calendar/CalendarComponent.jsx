import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ToolbarComponent from './ToolBarComponent';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarStyles.css";

dayjs.extend(utc);
dayjs.extend(timezone);

const CalendarComponent = () => {

    const events = [
        {
            start: dayjs('2024-07-07').toDate(),
            end: dayjs('2024-07-07').toDate(),
            title: "Terminar Stellar",
            data: {
                x: 10
            }
        }
    ];

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
                    events={events}
                />
            </div>
        </>
    );
}

export default CalendarComponent;
