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

dayjs.extend(utc);
dayjs.extend(timezone);

const CalendarComponent = () => {
    const { data: titleDateTasks, isLoading, error } = useQuery({ queryKey: ["titleDateTasks"], queryFn: getTitleAndDate });

    const events = titleDateTasks ? titleDateTasks.map(task => ({
        start: dayjs.utc(task.dueDate).local().startOf('day').add(1, 'day').toDate(),
        end: dayjs.utc(task.dueDate).local().endOf('day').add(1, 'day').toDate(),
        title: task.title,
    })) : [];

    const localizer = dayjsLocalizer(dayjs);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

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
