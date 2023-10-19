import EventListItemView from "./EventListItemView";

function EventsListView({ Events }) {
    return (
        <div className='events-list-view'>
            {
                Events.map(calendarEvent => {
                    return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
                })
            }
        </div>
    );
}

export default EventsListView;