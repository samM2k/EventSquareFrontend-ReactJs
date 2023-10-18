import React from 'react';

function Home({ IsAuthorized }) {
    if (!IsAuthorized) {
        window.location.href = "/login";
    }

    return (
    <p>Homepage</p>
  );
}

export default Home;