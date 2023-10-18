import React, { useState, useEffect } from 'react';
import ApiClient from '../Models/ApiClient';

function EventsView({ IsAuthorized }) {
  const viewTypes = ["list", "map"];
  const [viewType, setViewType] = useState(viewTypes[0]);

  const [events, setEvents] = useState(null);

  function getVisibilityString(int) {
    switch (int) {
      case 0:
        return "Hidden";
      case 1:
        return "InviteOnly";
      case 2:
        return "Public";
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
    <>
      Current view: {viewType}
      <button onClick={toggleViewType}>Toggle view</button>

      {
        //List view
        (viewType) == viewTypes[0] ?
          <div className='events-list-view'>
            <h3>Events</h3>
            {
              events.map(calendarEvent => {
                // { "id":"0cd8a266-506c-461a-b2fd-88096cfd2615","owner":"string","visibility":2,"startDateTime":"2023-10-16T03:55:32.519+00:00","endDateTime":"2023-10-16T03:55:32.519+00:00","name":"string","description":"string","isVirtual":true,"isPhysical":true,"location":{"flatNumber":0,"streetNumber":0,"streetName":"string","locality":"string","stateRegion":"string","country":"string"},"rsvps":null}
                return (
                  <div key={calendarEvent.id} className='event-card'>
                    <div className=''>{calendarEvent.name}</div>
                    <div className=''>{getVisibilityString(calendarEvent.visibility)}</div>
                    {calendarEvent.name}
                  </div>
                );
              })
            }
          </div>
          :
          //Map view
          viewType == viewTypes[1] ?
            <div>Map View</div>
            : null

      }


    </>
  );
}



export default EventsView;