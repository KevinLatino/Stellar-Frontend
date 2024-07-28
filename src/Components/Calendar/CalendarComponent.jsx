import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import ToolbarComponent from './ToolBarComponent';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarStyles.css";
import { getTitleAndDate } from '../../Api/Task.Api';
import { useQuery } from 'react-query';
import { MainSpinner } from '../SpinnerComponent';

dayjs.extend(utc);
dayjs.extend(timezone);

const CalendarComponent = () => {
    const titleDateQuery = useQuery({ queryKey: ["titleDateTasks"], queryFn: getTitleAndDate });

    const events = titleDateQuery.data ? titleDateQuery.data.map(task => ({
        start: dayjs.utc(task.dueDate).local().startOf('day').add(1, 'day').toDate(),
        end: dayjs.utc(task.dueDate).local().endOf('day').add(1, 'day').toDate(),
        title: task.title,
    })) : [];

    const localizer = dayjsLocalizer(dayjs);

    if (titleDateQuery.isLoading) 
        return (
        <div className='animate__animated animate__fadeInDown h-full'>
            <CalendarComponent />
        </div>
    )
    if (titleDateQuery.error) return <div>Error: {titleDateQuery.error.message}</div>;

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
