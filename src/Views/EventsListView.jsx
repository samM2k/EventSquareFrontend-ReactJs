import EventListItemView from "./EventListItemView";

function EventsListView({ Events }) {
    return (
        <div className='events-list-view'>
            <div className='event-card header-card'>
                <div className=''>Event Name</div>
                <div className=''>Visibility</div>
                <div className=''>Start Date</div>
            </div>
            {
                Events.map(calendarEvent => {
                    return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
                })
            }
        </div>
    );
}

export default EventsListView;