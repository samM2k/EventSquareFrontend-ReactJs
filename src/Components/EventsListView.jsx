import { useState } from "react";
import EventListItemView from "./EventListItemView";
import ListView from "./ListView";
import Drawer from "./Layout/Drawer.jsx";

function EventsListView({ allEvents }) {
    const [filteredEvents, setFilteredEvents] = useState(allEvents);
    const [showDrawer, setShowDrawer] = useState(false);
    const [filterPublic, setFilterPublic] = useState(false);

    const filterTest = () => {
        var newEvents;
        newEvents = allEvents;
        if (filterPublic)
            newEvents = newEvents.filter(ev => ev.visibility == 2);
        setFilteredEvents(newEvents);
        setShowDrawer(false);
    };
    return (
        <div className="events-list-view">
            <div className="events-list-filters">
                <Drawer visible={showDrawer} setVisibility={setShowDrawer} buttonLabel="Filters">
                    This is where the filters will go!
                    <label>Public</label>
                    <input value={filterPublic} onChange={(e) => {
                        setFilterPublic(e.target.checked)
                    }} type="checkbox" />
                    <button onClick={filterTest}>Apply</button>
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