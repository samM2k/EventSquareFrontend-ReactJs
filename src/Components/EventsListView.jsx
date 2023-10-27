import { useEffect, useState } from "react";
import EventListItemView from "./EventListItemView";
import ListView from "./ListView";
import Drawer from "./Layout/Drawer.jsx";
import './EventsListView.css'

function EventsListView({ allEvents }) {
    const [filteredEvents, setFilteredEvents] = useState(allEvents);
    const [publicFilter, setPublicFilter] = useState(false);
    const [nameFilter, setNameFilter] = useState("");
    const [descriptionFilter, setDescriptionFilter] = useState("");


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
        window.Drawer.hide();
    };

    useEffect(() => {

        window.Drawer.setChildren(<>
            This is where the filters will go!

            <div className="filters">

                {/* Name filter */}
                <label htmlFor="name-filter-input">
                    Name
                </label>
                <input id="name-filter-input" value={nameFilter} onChange={(e) => {
                    setNameFilter(e.target.value)
                }} type="text" />

                {/* Descriptoin filter */}
                <label htmlFor="desc-filter-input">
                    Description
                </label>
                <input id="desc-filter-input" value={descriptionFilter} onChange={(e) => {
                    setDescriptionFilter(e.target.value)
                }} type="text" />

                {/* Public filter */}
                <div className="checkbox-filter">
                    <input id="public-filter-checkbox" value={publicFilter} onChange={(e) => {
                        setPublicFilter(e.target.checked)
                    }} type="checkbox" />
                    <label htmlFor="public-filter-checkbox">
                        Public
                    </label>
                </div>

                <button onClick={filterTest}>Apply</button>
            </div>
        </>);
    }, [])

    return (
        <div className="events-list-view">
            <div className="events-list-filters">
                {/* <Drawer>
                   
                {/* </Drawer> */}
                <button onClick={() => window.Drawer.toggle()}>Filters</button>
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