import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import { getTitleAndDate } from '../../Api/Task.Api';
import { useQuery } from 'react-query';
import { MainSpinner } from '../SpinnerComponent';
import dayjs from 'dayjs';
import ToolbarComponent from './ToolBarComponent';
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CalendarStyles.css";

const CalendarComponent = () => {
    const titleDateQuery = useQuery({ queryKey: ["titleDateTasks"], queryFn: getTitleAndDate });

    const events = titleDateQuery.data ? titleDateQuery.data.map(task => ({
        start: dayjs.utc(task.dueDate).local().startOf('day').add(1, 'day').toDate(),
        end: dayjs.utc(task.dueDate).local().endOf('day').add(1, 'day').toDate(),
        title: task.title,
        priority: task.priority
    })) : [];

    const localizer = dayjsLocalizer(dayjs);

    if (titleDateQuery.isLoading) {
        return (
            <div className='flex justify-center items-center h-full'>
                <MainSpinner />
            </div>
        )
    }

    return (
        <>
            <div className='flex justify-center items-center w-full h-full'>
                <Calendar
                    localizer={localizer}
                    views={['month']}
                    components={{
                        toolbar: ToolbarComponent,
                        event: ({ event }) => (
                            <span className={`priority-${event.priority}`}>
                                {event.title}
                            </span>
                        ),
                    }}
                    events={events}
                />
            </div>
        </>
    );
}

export default CalendarComponent;
