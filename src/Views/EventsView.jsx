import React from 'react';

function EventsView({ IsAuthorized }) {

    return (
      <>
      <p>This is the events page.</p>
        <p>Authorized: {IsAuthorized.toString()}</p>
        </>
    );
}

export default EventsView;