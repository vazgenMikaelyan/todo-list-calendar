import React from 'react';

import './CalendarComponent.css'

function CalendarComponent(props) {
    let date         = new Date();
    let calendar     = [];
    let currentMonth = new Date(props.year, props.month, 0);

    date.setFullYear(props.year);
    date.setMonth(props.month - 1);

    for (let i = 1; i <= currentMonth.getDate(); i++) {
        
        date.setDate(i);
        let count      = 0;
        let inComplete = 0;
        let localeDateString = date.toLocaleDateString();

        for (let j = 0; j < props.todos.length; j++) {
            if (props.todos[j].date === localeDateString) {
                count++;
                if(!props.todos[j].completed) {
                    inComplete++;
                }
            }
        }
        calendar.push({
            date:i,
            todos: count,
            inComplete:inComplete,
            dateString: localeDateString,
        });
    }

    return (
        <React.Fragment>
            <div className="calendar-header">
                {date.getFullYear()}
            </div>
            <div className="calendar">
                {calendar.map((item, i) => {
                    return (
                        <div key={`date-${i}`}
                            onClick={() => props.onDaySelect(item.dateString)} 
                            className={`calendar-date ${item.todos ? 'hasTodo' : ''}`}>
                            {item.date}
                            { item.todos ? <div className="tooltip">
                                 {`${item.todos} 
                                 to do items (${item.inComplete} of which is incomplete)`}
                                 </div> : ''}
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    );
}
export default CalendarComponent;