import { useState } from "react";
import EventListItemView from "./EventListItemView";
import ListView from "./ListView";
import Drawer from "./Layout/Drawer.jsx";

function EventsListView({ allEvents }) {
    const [filteredEvents, setFilteredEvents] = useState(allEvents);

    const filterTest = () => {
        var newEvents;
        if (filteredEvents == allEvents)
            newEvents = allEvents.filter(ev => ev.location != null);
        else
            newEvents = allEvents;
        setFilteredEvents(newEvents)
    };
    return (
        <div className="events-list-view">
            <div className="events-list-filters">
                <Drawer buttonLabel="Filters">
                    This is where the filters will go!
                </Drawer>
            </div>
            <ListView AddEntryRoute="/events/new">
                {
                    filteredEvents.map(calendarEvent => {
                        return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
                    })
                }
            </ListView>
        </div>
    );
}

export default EventsListView;