import React, { useState, useEffect } from 'react';
import ApiClient from '../Models/ApiClient';
import EventsListView from './EventsListView';
import EventsMapView from './EventsMapView';
import './EventsView.css';

function EventsView({ IsAuthorized }) {
  const viewTypes = ["list", "map"];
  const [viewType, setViewType] = useState(viewTypes[0]);

  const [events, setEvents] = useState(null);

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

        <button onClick={toggleViewType}>{formatViewType(viewType)}</button>
      </div>
      {
        //List view
        (viewType) == viewTypes[0] ?
          <EventsListView Events={events} />
          :
          //Map view
          viewType == viewTypes[1] ?
            <EventsMapView Events={events} />
            : null

      }


    </div>
  );
}



export default EventsView;