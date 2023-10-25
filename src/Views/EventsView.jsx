import React, { useState, useEffect } from 'react';
import ApiClient from '../Helpers/ApiClient';
import EventsMapView from '../Components/EventsMapView';
import './EventsView.css';
import ListView from '../Components/ListView';
import EventListItemView from "../Components/EventListItemView";

function EventsView({ IsAuthorized }) {
  const viewTypes = ["list", "map"];
  const [viewType, setViewType] = useState(viewTypes[0]);

  const [events, setEvents] = useState(null);

  function getEventsView() {
    switch (viewTypes.indexOf(viewType)) {
      case 0:
        return <ListView IsAuthorized={IsAuthorized} AddEntryRoute="/events/new">
          {
            events.map(calendarEvent => {
              return <EventListItemView key={calendarEvent.id} CalendarEvent={calendarEvent} />
            })
          }
        </ListView>
      case 1:
        return <EventsMapView Events={events} />
    }
  }

  function toggleViewType() {
    var currentViewType = viewTypes.indexOf(viewType);
    switch (currentViewType) {
      case 0:
        setViewType(viewTypes[1])
        break;
      case 1:
        setViewType(viewTypes[0])
        break;
      default:
        return;
    }
  }


  function getToggleViewIcon() {
    switch (viewTypes.indexOf(viewType)) {
      case 0:
        return <ion-icon name="map-outline" />;
      case 1:
        return <ion-icon name="list-outline" />;
    }
  }

  function formatViewType(viewTypeString) {
    var result = viewTypeString.charAt(0).toUpperCase() + viewTypeString.slice(1);
    return result;
  }

  useEffect(() => {
    if (events == null) {
      ApiClient.getEvents().then(result => {
        if (result.Success)
          setEvents(result.Body);
        else
          setEvents([]);
      });
    }
  }, [])

  if (events == null) {
    return <p>Loading events...</p>
  }
  return (
    <div className='events-view-container'>
      <div className='events-view-header-row'>
        <h3>Events</h3>

        <button className='btn btn-dark' onClick={toggleViewType}>{getToggleViewIcon()}</button>
      </div>
      {
        //List view
        getEventsView()

      }


    </div>
  );
}



export default EventsView;