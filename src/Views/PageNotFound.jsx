import React from 'react';

function PageNotFound() {
    return (
        <p>Error: Could not find the requested page at {window.location.toString()}</p>
  );
}

export default PageNotFound;