import { useEffect, useState } from "react";
import EventListItemView from "./EventListItemView";
import ListView from "./ListView";
import Drawer from "./Layout/Drawer.jsx";
import './EventsListView.css'
import EventFiltersView from "./EventFiltersView";
import { useDrawer } from "../DrawerContext";

function EventsListView({ allEvents }) {
    const [filteredEvents, setFilteredEvents] = useState(allEvents);
    const [publicFilter, setPublicFilter] = useState(false);
    const [nameFilter, setNameFilter] = useState("");
    const [descriptionFilter, setDescriptionFilter] = useState("");

    const drawer = useDrawer();

    const filterTest = () => {
        var newEvents;
        newEvents = allEvents;
        if (publicFilter)
            newEvents = newEvents.filter(ev => ev.visibility == 2);
        if (nameFilter)
            newEvents = newEvents.filter(ev => ev.name.toLowerCase().includes(nameFilter.toLowerCase()));
        if (descriptionFilter)
            newEvents = newEvents.filter(ev => ev.description.toLowerCase().includes(descriptionFilter.toLowerCase()));
        setFilteredEvents(newEvents);
        drawer.hide();
    };

    useEffect(() => {

        drawer.setContent(<EventFiltersView applyFiltersCallback={filterTest} nameFilter={nameFilter} setNameFilter={setNameFilter} descriptionFilter={descriptionFilter} setDescriptionFilter={setDescriptionFilter} publicFilter={publicFilter} setPublicFilter={setPublicFilter} />);
    }, [nameFilter, descriptionFilter, publicFilter])

    return (
        <div className="events-list-view">
            <div className="events-list-filters">
                {/* <Drawer>
                   
                {/* </Drawer> */}
                <button className="btn btn-dark" onClick={() => drawer.show()}>Filters</button>
                <p>Results: {filteredEvents.length}</p>
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