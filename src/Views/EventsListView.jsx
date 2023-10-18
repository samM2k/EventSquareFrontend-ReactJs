import EventListItemView from "./EventListItemView";

function EventsListView({ Events }) {
    return (
        <div className='events-list-view'>
            <h3>Events</h3>
            {
                Events.map(calendarEvent => {
                    return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
                })
            }
        </div>
    );
}

export default EventsListView;